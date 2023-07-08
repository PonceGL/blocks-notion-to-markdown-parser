import { MESSAGE_ERROR, validateOptionsRequest } from '../../src/utils/validateOptionsRequest';

describe('validateOptionsRequest', () => {
  it('is a function', () => {
    const type = typeof validateOptionsRequest;
    expect(type).toEqual('function');
  });

  it('should throw a options Is not defined error', async () => {
    // @ts-ignore: Unreachable code error
    expect(() => validateOptionsRequest()).toThrowError(MESSAGE_ERROR.NOT_DEFINED);
  });

  it('should throw a options Is not correct error', async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
    };
    expect(() => validateOptionsRequest(options)).toThrowError(MESSAGE_ERROR.INCORRECT);
  });
});
