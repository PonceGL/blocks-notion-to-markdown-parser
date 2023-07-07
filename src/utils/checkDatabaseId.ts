const MESSAGE_ERROR = {
  NOT_DEFINED: "databaseId is not defined",
  INCORRECT: "incorrect databaseId",
};

const LENGTH = 32;

export function checkDatabaseId(id: string) {
  if (!id) {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }

  if (typeof id !== "string") {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }

  if (id.length !== LENGTH) {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }
}
