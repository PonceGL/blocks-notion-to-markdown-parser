import axios from "axios";
import { ConectData } from "./types";
import { DataBaseResponseNotionAPI } from "./interfaces/databases";

type Props = Omit<ConectData, "databaseId">;
export async function fecthData({
  notion_key,
  options,
}: Props): Promise<DataBaseResponseNotionAPI> {
  axios.defaults.headers.common["Authorization"] = `Bearer ${notion_key}`;

  try {
    const response = await axios.request(options);
    if (response?.statusText !== "OK") throw new Error("Request failed");

    const { data } = response;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Request failed");
  }
}
