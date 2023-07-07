import { ConectData } from "./types";
import { checkDatabaseId } from "./utils/checkDatabaseId";
import { checkKey } from "./utils/checkKey";

export function gatDatabases({ notion_key, databaseId }: ConectData) {
  checkKey(notion_key);
  checkDatabaseId(databaseId);
}
