import "dotenv/config";
import { gatDatabasesInfo } from "./gatDatabases";

(async function () {
  const KEY = process.env.NOTION_KEY || "";
  const DB = "478e7933eaf2488cbd96e11485faf9ed";
  const listPost = await gatDatabasesInfo({
    notion_key: KEY,
    databaseId: DB,
  });

  console.log("====================================");
  console.log("listPost");
  console.log(listPost);
  console.log("====================================");
})();
