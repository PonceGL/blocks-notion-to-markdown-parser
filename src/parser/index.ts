import { DataForParser } from '../interfaces/parser';
import { parser } from './Parser';

export function ParserBlocks({ metadata, blocks }: DataForParser) {
  const p = parser({ metadata, blocks });
  p.generateData();
}
