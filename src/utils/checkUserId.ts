export const MESSAGE_ERROR = {
  NOT_DEFINED: 'user_id is not defined',
  INCORRECT: 'incorrect user_id',
};

export function checkUserId(id: string) {
  if (!id) {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }

  if (typeof id !== 'string') {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }

  if (id === '') {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }
}
