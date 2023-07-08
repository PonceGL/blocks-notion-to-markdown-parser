export const ENDPOINTS = {
  databases: (id: string) => `https://api.notion.com/v1/databases/${id}/query`,
  pageMetadata: (id: string) => `https://api.notion.com/v1/pages/${id}`,
  pageBlocks: (id: string) => `https://api.notion.com/v1/blocks/${id}/children`,
};

export const NOTION_API_DATA = {
  NotionVersion: '2022-06-28',
};
