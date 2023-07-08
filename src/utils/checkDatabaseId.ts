const MESSAGE_ERROR = {
  NOT_DEFINED: "databaseId is not defined",
  INCORRECT: "incorrect databaseId",
};


export function checkDatabaseId(id: string) {
  if (!id) {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }

  if (typeof id !== "string") {
    throw new Error(MESSAGE_ERROR.INCORRECT);
  }
}
