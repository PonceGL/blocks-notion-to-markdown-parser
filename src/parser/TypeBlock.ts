import { CleanBlock } from '../interfaces/blocks';

export class TypeBlockParser {
  private blocks: CleanBlock[];

  constructor() {
    this.blocks = [];
  }

  public format(data: CleanBlock[]): string {
    this.blocks = data;
    let text = ``;
    this.blocks.forEach(({ type, content }) => {
      if (type.includes('heading_')) {
        const numbers = [...Array(Number(type.at(-1))).keys()];
        const hashByHeading = numbers.map((n) => '#').join('');
        text += `\n${hashByHeading} ${content.trim()}\n`;
        return;
      }

      if (type === 'quote') {
        text += `\n > ${content.trim()}\n`;
        return;
      }

      if (type === 'bulleted_list_item') {
        text += `\n- ${content.trim()}\n`;
        return;
      }

      if (type === 'numbered_list_item') {
        const quantity = this.blocks.filter((b) => b.type === 'numbered_list_item');
        const number = quantity.findIndex((e) => e.content === content);
        text += `\n${number + 1}. ${content.trim()}\n`;
        return;
      }


      if (type === 'to_do') {
        text += `\n- [ ]  ${content.trim()}\n`;
        return;
      }

      text += `\n${content.trim()}\n`;
      return;
    });

    return text;
  }
}
