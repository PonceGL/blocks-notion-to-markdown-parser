import { MESSAGE_ERROR, checkDatabaseId } from '../../src/utils/checkDatabaseId';

describe('checkDatabaseId', () => {
  it('is a function', () => {
    const type = typeof checkDatabaseId;
    expect(type).toEqual('function');
  });

  it('should throw a databaseId is not defined error', async () => {
    const databaseId = undefined;
    // @ts-ignore: Unreachable code error
    expect(() => checkDatabaseId()).toThrowError(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('should throw a incorrect databaseId error', async () => {
    const databaseId = 12345;
    // @ts-ignore: Unreachable code error
    expect(() => checkDatabaseId(databaseId)).toThrowError(MESSAGE_ERROR.INCORRECT);
  });

  it('should throw a databaseId is not defined error for an empty string', async () => {
    const databaseId = '';
    expect(() => checkDatabaseId(databaseId)).toThrowError(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('there should be no error', async () => {
    const databaseId = 'valid_string';
    expect(() => checkDatabaseId(databaseId)).not.toThrow();
  });
});
