import { MESSAGE_ERROR, checkKey } from '../../src/utils/checkKey';

describe('checkKey', () => {
  it('is a function', () => {
    const type = typeof checkKey;
    expect(type).toEqual('function');
  });

  it('should throw a notion_key is not defined error', async () => {
    const notion_key = undefined;
    // @ts-ignore: Unreachable code error
    expect(() => checkKey()).toThrowError(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('should throw a incorrect notion_key error', async () => {
    const notion_key = 12345;
    // @ts-ignore: Unreachable code error
    expect(() => checkKey(notion_key)).toThrowError(MESSAGE_ERROR.INCORRECT);
  });

  it('should throw a notion_key is not defined error for an empty string', async () => {
    const notion_key = '';
    expect(() => checkKey(notion_key)).toThrowError(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('should throw an error because the string does not start correctly', async () => {
    const notion_key = 'invalid_string';
    expect(() => checkKey(notion_key)).toThrowError(MESSAGE_ERROR.INCORRECT);
  });

  it('there should be no error', async () => {
    const notion_key = 'secret_valid_string_whith_correct_length_123456789';
    expect(() => checkKey(notion_key)).not.toThrow();
  });
});
