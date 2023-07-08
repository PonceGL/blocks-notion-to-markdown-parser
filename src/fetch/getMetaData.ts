import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { metadataData } from '../format/metadata';
import { ConectData, OptionsRequest } from '../interfaces/fetch';
import { ResponseMetadata } from '../interfaces/responseMetadata';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

type Props = Omit<ConectData, 'options'>;

export async function getMetaData({ notion_key, databaseId }: Props) {
  checkKey(notion_key);
  checkDatabaseId(databaseId);

  const url = ENDPOINTS.pageMetadata(databaseId);

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
