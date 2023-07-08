import "dotenv/config";
import { gatDatabasesInfo } from "./fetch/gatDatabases";
import { getMetaData } from "./fetch/getMetaData";
import { getBlocks } from "./fetch/getBlocks";

const idPost = "3861029c-d775-46bb-99d7-a6ef29c6085a";

(async function () {
  const KEY = process.env.NOTION_KEY || "";
  const DB = "478e7933eaf2488cbd96e11485faf9ed";
  /* const listPost = await gatDatabasesInfo({
    notion_key: KEY,
    databaseId: DB,
  });
  const metadata = await getMetaData({
    notion_key: KEY,
    databaseId: idPost,
  }); */
  /* const blocks = await getBlocks({
    notion_key: KEY,
    databaseId: idPost,
  }); */
  /* console.log("====================================");
  console.log("listPost");
  console.log(listPost);
  console.log("====================================");
  console.log("====================================");
  console.log("metadata");
  console.log(metadata);
  console.log("===================================="); */
  /* console.log("====================================");
  console.log("blocks");
  console.log(blocks);
  console.log("===================================="); */
})();
