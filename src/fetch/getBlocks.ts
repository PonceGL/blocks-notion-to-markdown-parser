import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { blockData } from '../format/blockData';
import { BlocksResponseNotionAPI } from '../interfaces/blocks';
import { ConectData, OptionsRequest } from '../interfaces/fetch';
import { checkDatabaseId } from '../utils/checkDatabaseId';
import { checkKey } from '../utils/checkKey';
import { fecthData } from './fecthData';

type Props = Omit<ConectData, 'options'>;

export async function getBlocks({ notion_key, databaseId }: Props) {
  checkKey(notion_key);
  checkDatabaseId(databaseId);

  const url = ENDPOINTS.pageBlocks(databaseId);

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
