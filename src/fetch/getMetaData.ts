import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { metadataData } from '../format/metadata';
import { ItemDatabaseClean } from '../interfaces/databases';
import { OptionsRequest } from '../interfaces/fetch';
import { ResponseMetadata } from '../interfaces/responseMetadata';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

export type PropsMetaData = { notion_key: string; block_id: string; defaultUser: string };

/**
 * The function `getMetaData` is an asynchronous function that retrieves metadata from a Notion page
 * using a Notion key and block ID.
 * @param {PropsMetaData}  - - `notion_key`: The API key for accessing the Notion API.
 * @returns a Promise that resolves to an object of type `ItemDatabaseClean`.
 */
export async function getMetaData({ notion_key, block_id, defaultUser }: PropsMetaData): Promise<ItemDatabaseClean> {
  checkKey(notion_key);
  checkDatabaseId(block_id);

  const url = ENDPOINTS.pageMetadata(block_id);

  const options: OptionsRequest = {
    method: 'GET',
    url: url,
    headers: {
      accept: 'application/json',
      'Notion-Version': NOTION_API_DATA.NotionVersion,
    },
  };

  const data = await fecthData<ResponseMetadata>({
    notion_key,
    options,
  });

  const metadata = metadataData({ result: data, defaultUser });

  return metadata;
}
