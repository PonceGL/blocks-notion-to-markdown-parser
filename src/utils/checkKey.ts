const MESSAGE_ERROR = {
  NOT_DEFINED: 'notion_key is not defined',
  INCORRECT: 'incorrect notion_key',
};

const LENGTH = 50;

export function checkKey(key: string) {
  if (!key) {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }

  if (typeof key !== 'string') {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }

  if (!key.startsWith('secret_')) {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }

  if (key.length !== LENGTH) {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }
}
