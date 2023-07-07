import "dotenv/config";
import blocks from "./api/blocks.json";
import { gatDatabases } from "./client";

(function () {
  const KEY = process.env.NOTION_KEY || "";
  const DB = "3861029c-d775-46bb-99d7-a6ef29c6085a";
  gatDatabases({
    notion_key: KEY,
    databaseId: DB,
  });
})();
