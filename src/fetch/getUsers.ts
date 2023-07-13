import { ENDPOINTS, NOTION_API_DATA } from '../api/config';
import { OptionsRequest } from '../interfaces/fetch';
import { User } from '../interfaces/user';
import { checkKey } from '../utils/checkKey';
import { checkUserId } from '../utils/checkUserId';
import { fecthData } from './fecthData';

export type PropsUserInfo = {
  notion_key: string;
  user_id: string;
};

export async function getUserInfo({ notion_key, user_id }: PropsUserInfo): Promise<User> {
  checkKey(notion_key);
  checkUserId(user_id);

  const url = ENDPOINTS.users(user_id);

  const options: OptionsRequest = {
    method: 'POST',
    url: url,
    headers: {
      accept: 'application/json',
      'Notion-Version': NOTION_API_DATA.NotionVersion,
      'Access-Control-Allow-Origin': '*',
    },
  };

  const data = await fecthData<User>({
    notion_key,
    options,
  });

  return data;
}
