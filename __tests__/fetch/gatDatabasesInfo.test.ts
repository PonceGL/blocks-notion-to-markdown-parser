import 'dotenv/config';
import { gatDatabasesInfo } from '../../src/fetch/gatDatabases';
import { MESSAGE_ERROR as DATABASE_ID_ERROR } from '../../src/utils/checkDatabaseId';
import { MESSAGE_ERROR as KEY_ERROR } from '../../src/utils/checkKey';

describe('gatDatabasesInfo', () => {
  it('is a function', () => {
    const type = typeof gatDatabasesInfo;
    expect(type).toEqual('function');
  });

  it('should launch an incorrect notion_key error', async () => {
    const notion_key = 'secret_1234567890';
    const databaseId = '12345678-1234-1234-1234-123456789012';
    await expect(gatDatabasesInfo({ notion_key, databaseId })).rejects.toThrow(KEY_ERROR.INCORRECT);
  });

  it('should throw incorrect notion_key error for not starting correctly', async () => {
    const notion_key = 'qwertyu1234567890';
    const databaseId = '12345678-1234-1234-1234-123456789012';
    await expect(gatDatabasesInfo({ notion_key, databaseId })).rejects.toThrow(KEY_ERROR.INCORRECT);
  });

  it('should launch an databaseId is not defined error', async () => {
    const notion_key = process.env.NOTION_KEY || '';
    const databaseId = '';
    await expect(gatDatabasesInfo({ notion_key, databaseId })).rejects.toThrow(DATABASE_ID_ERROR.NOT_DEFINED);
  });

  it('test_options_object_formatting', async () => {
    const notion_key = process.env.NOTION_KEY || '';
    const databaseId = '478e7933eaf2488cbd96e11485faf9ed';
    const result = await gatDatabasesInfo({ notion_key, databaseId });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
