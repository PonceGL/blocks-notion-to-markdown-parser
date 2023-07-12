import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { metadataData } from '../format/metadata';
import { ItemDatabaseClean } from '../interfaces/databases';
import { ConectData, OptionsRequest } from '../interfaces/fetch';
import { ResponseMetadata } from '../interfaces/responseMetadata';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

export type PropsMetaData = Omit<ConectData, 'options' | 'databaseId'> & { block_id: string };

export async function getMetaData({ notion_key, block_id }: PropsMetaData): Promise<ItemDatabaseClean> {
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

  const metadata = metadataData(data);

  return metadata;
}
