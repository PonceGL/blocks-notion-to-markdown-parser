import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { fecthData } from './fecthData';
import { databaseData } from '../format/databaseData';
import { DataBaseResponseNotionAPI, ItemDatabaseClean } from '../interfaces/databases';

import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { ConectData, OptionsRequest, OptionsRequestFilters } from '../interfaces/fetch';

export type PropsDatabasesInfo = Omit<ConectData, 'options'> & { defaultUser: string };
/**
 * The function `getDatabasesInfo` retrieves information from a Notion database, filtering out draft
 * items and sorting them by date in descending order.
 * @param {PropsDatabasesInfo}  - - `notion_key`: The API key for accessing the Notion API.
 * @returns a Promise that resolves to an array of ItemDatabaseClean objects.
 */
export async function gatDatabasesInfo({
  notion_key,
  databaseId,
  defaultUser,
}: PropsDatabasesInfo): Promise<ItemDatabaseClean[]> {
  checkKey(notion_key);
  checkDatabaseId(databaseId);

  const url = ENDPOINTS.databases(databaseId);

  const filters: OptionsRequestFilters = {
    filter: {
      property: 'draft',
      checkbox: {
        equals: false,
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  };

  const options: OptionsRequest = {
    method: 'POST',
    url: url,
    headers: {
      accept: 'application/json',
      'Notion-Version': NOTION_API_DATA.NotionVersion,
      'Access-Control-Allow-Origin': '*',
    },
    data: filters,
  };

  const data = await fecthData<DataBaseResponseNotionAPI>({
    notion_key,
    options,
  });

  const list = databaseData({ results: data.results, defaultUser });

  return list;
}
