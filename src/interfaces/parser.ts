import { CleanBlock } from './blocks';
import { ItemDatabaseClean } from './databases';

export type DataForParser = {
  metadata: ItemDatabaseClean;
  blocks: CleanBlock[];
  notion_key: string;
};
