import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { blockData } from '../format/blockData';
import { BlocksResponseNotionAPI, CleanBlock } from '../interfaces/blocks';
import { ConectData, OptionsRequest } from '../interfaces/fetch';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

export type PropsBlocks = Omit<ConectData, 'options' | 'databaseId'> & { block_id: string };

/**
 * The function `getBlocks` retrieves blocks from a Notion page using the provided Notion key and block
 * ID.
 * @param {PropsBlocks}  - - `notion_key`: The API key for accessing the Notion API.
 * @returns The function `getBlocks` returns a Promise that resolves to an array of `CleanBlock`
 * objects.
 */
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
