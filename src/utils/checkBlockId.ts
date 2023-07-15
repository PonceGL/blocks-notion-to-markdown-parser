export const MESSAGE_ERROR = {
  NOT_DEFINED: 'block_id is not defined',
  INCORRECT: 'incorrect block_id',
};

export function checkBlockId(id: string) {
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
