import axios from 'axios';
import { ConectData } from '../types';

type Props = Omit<ConectData, 'databaseId'>;
export async function fecthData<T>({ notion_key, options }: Props): Promise<T> {
  axios.defaults.headers.common['Authorization'] = `Bearer ${notion_key}`;

  try {
    const response = await axios.request(options);
    if (response?.statusText !== 'OK') throw new Error('Request failed');

    const { data } = response;

    return data;
  } catch (error) {
    throw new Error('Request failed');
  }
}
