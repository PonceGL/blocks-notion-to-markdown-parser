import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { blockData } from '../format/blockData';
import { Block, BlocksResponseNotionAPI, CleanBlock } from '../interfaces/blocks';
import { ConectData, OptionsRequest } from '../interfaces/fetch';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

export type PropsBlocks = Omit<ConectData, 'options' | 'databaseId'> & { block_id: string };

export async function getBlocks({ notion_key, block_id }: PropsBlocks): Promise<CleanBlock[]> {
  checkKey(notion_key);
  checkDatabaseId(block_id);

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
    notion_key,
    options,
  });

  const metadata = blockData(data.results);

  return metadata;
}
