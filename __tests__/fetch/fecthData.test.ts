import { ERROR_MESSAGE, fecthData } from '../../src/fetch/fecthData';
import { MESSAGE_ERROR } from '../../src/utils/validateOptionsRequest';
import { MESSAGE_ERROR as KEY_ERROR } from '../../src/utils/checkKey';
import { ENDPOINTS } from '../../src/api/config';

type Rickandmortyapi = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

type Location = {
  name: string;
  url: string;
};

describe('fecthData', () => {
  it('is a function', () => {
    const type = typeof fecthData;
    expect(type).toEqual('function');
  });

  it('should throw an error if options is not defined', () => {
    const notion_key = 'secret_valid_string_whith_correct_length_123456789';
    // @ts-ignore: Unreachable code error
    expect(() => fecthData({ notion_key })).rejects.toThrow(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('should throw an error if notion_key is not defined', () => {
    // @ts-ignore: Unreachable code error
    expect(() => fecthData({})).rejects.toThrow(KEY_ERROR.NOT_DEFINED);
  });

  it('should throw an error because of missing fields in the options', async () => {
    const notion_key = 'secret_valid_string_whith_correct_length_123456789';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
    };
    // @ts-ignore: Unreachable code error
    expect(() =>
      fecthData({
        notion_key,
        options,
      }),
    ).rejects.toThrow(MESSAGE_ERROR.INCORRECT);
  });

  it('should throw an error because of incorrect data', async () => {
    const notion_key = 'secret_valid_string_whith_correct_length_123456789';
    const databaseId = 'valid_string';
    const url = ENDPOINTS.databases(databaseId);
    const options = {
      method: 'POST',
      url,
      headers: {
        accept: 'application/json',
      },
    };
    // @ts-ignore: Unreachable code error
    expect(() =>
      fecthData({
        notion_key,
        options,
      }),
    ).rejects.toThrow(ERROR_MESSAGE);
  });

  it('there should be no error', async () => {
    const notion_key = 'secret_valid_string_whith_correct_length_123456789';
    const url = 'https://rickandmortyapi.com/api/character/109';
    const options = {
      method: 'GET',
      url,
      headers: {
        accept: 'application/json',
      },
    };
    expect(() =>
      fecthData<Rickandmortyapi>({
        notion_key,
        options,
      }),
    ).not.toThrow();
  });
});
