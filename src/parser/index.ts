import { DataForParser } from '../interfaces/parser';
import { parser } from './Parser';

export async function ParserBlocks({ metadata, blocks, notion_key }: DataForParser) {
  const p = parser({ metadata, blocks, notion_key });
  const markdown = await p.generateData();

  console.log('====================================');
  console.log('============= markdown =============');
  console.log('====================================');
  console.log(markdown);
  console.log('====================================');
}
