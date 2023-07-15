import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { fecthData } from '../fetch/fecthData';
import { handleAnnotations } from '../format/handleAnnotations';
import { BlocksResponseNotionAPI, CleanBlock, TableRow } from '../interfaces/blocks';
import { OptionsRequest } from '../interfaces/fetch';
import { checkBlockId } from '../utils/checkBlockId';
import { checkKey } from '../utils/checkKey';

export class TypeBlockParser {
  private blocks: CleanBlock[];
  private notion_key: string;

  constructor(notion_key: string) {
    this.blocks = [];
    this.notion_key = notion_key;
  }

  public async format(data: CleanBlock[]): Promise<string> {
    if (data.length === 0) return '';
    this.blocks = data;

    let text = ``;
    const result = await Promise.all(
      this.blocks.map(async ({ id, type, content }) => {
        if (type.includes('heading_')) {
          const numbers = [...Array(Number(type.at(-1))).keys()];
          const hashByHeading = numbers.map((n) => '#').join('');
          return `\n${hashByHeading} ${content.trim()}\n`;
        }

        if (type === 'quote') {
          return `\n > ${content.trim()}\n`;
        }

        if (type === 'bulleted_list_item') {
          return `\n- ${content.trim()}\n`;
        }

        if (type === 'numbered_list_item') {
          const quantity = this.blocks.filter((b) => b.type === 'numbered_list_item');
          const number = quantity.findIndex((e) => e.content === content);
          return `\n${number + 1}. ${content.trim()}\n`;
        }

        if (type === 'to_do') {
          return `\n- [ ]  ${content.trim()}\n`;
        }

        if (type === 'table') {
          const table = await this.blocksTableChildren(id, content);
          return `\n${table}`;
        }

        return `\n${content.trim()}\n`;
      }),
    );

    return result.join('') || '';
  }

  private async blocksTableChildren(block_id: string, content: string): Promise<string> {
    if (this.notion_key === '') return '';

    return await this.getBlocks(block_id);
  }

  private async getBlocks(block_id: string): Promise<string> {
    checkKey(this.notion_key);
    checkBlockId(block_id);

    const url = ENDPOINTS.pageBlocks(block_id);

    const options: OptionsRequest = {
      method: 'GET',
      url: url,
      headers: {
        accept: 'application/json',
        'Notion-Version': NOTION_API_DATA.NotionVersion,
      },
    };

    const data = await fecthData<BlocksResponseNotionAPI>({
      notion_key: this.notion_key,
      options,
    });

    const table = data.results.map((block, i) => {
      if (block.type === 'table_row') {
        const tableRow = block.table_row as unknown as TableRow;
        let row = this.parserTableRow(tableRow);
        if (i === 0) {
          row = `\n${row}\n| --- | --- |`;
        }

        return row;
      }
      return '';
    });

    return table.join('\n');
  }

  private parserTableRow(data: TableRow) {
    const cells = data.cells;

    if (cells.length === 0) return '';

    const content = cells
      .map((cell) => {
        if (cell.length > 0) {
          const text = cell
            .map(({ plain_text, annotations }) => handleAnnotations({ plain_text, annotations }))
            .join('');

          return text;
        }
        return '';
      })
      .join(' | ');
    const contentFormat = `| ${content} |`;

    return contentFormat;
  }
}
