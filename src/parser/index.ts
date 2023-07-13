import { DataForParser } from '../interfaces/parser';
import { parser } from './Parser';

/**
 * The function `ParserBlocks` takes in metadata, blocks, and a notion key, and returns a promise that
 * resolves to a string of generated markdown.
 * @param {DataForParser}  - - `metadata`: An object containing metadata information.
 * @returns a Promise that resolves to a string.
 */
export async function ParserBlocks({ metadata, blocks, notion_key }: DataForParser): Promise<string> {
  const p = parser({ metadata, blocks, notion_key });
  const markdown = await p.generateData();
  return markdown;
}
