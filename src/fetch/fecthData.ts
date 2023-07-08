import axios from 'axios';
import { validateOptionsRequest } from '../utils/validateOptionsRequest';
import { ConectData } from '../interfaces/fetch';
import { checkKey } from '../utils/checkKey';

export const ERROR_MESSAGE = 'Request failed';

type Props = Omit<ConectData, 'databaseId'>;
export async function fecthData<T>({ notion_key, options }: Props): Promise<T> {
  checkKey(notion_key);
  validateOptionsRequest(options);

  axios.defaults.headers.common['Authorization'] = `Bearer ${notion_key}`;

  try {
    const response = await axios.request(options);
    if (response?.statusText !== 'OK') throw new Error(ERROR_MESSAGE);

    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
}
