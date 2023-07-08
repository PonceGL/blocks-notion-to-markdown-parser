import { Parent, TedBy } from './fetch';

export type ItemDatabaseClean = {
  id: string;
  draft: boolean;
  ogImage: string | null;
  slug: string;
  featured: boolean;
  description: string;
  author: string;
  date: string;
  tags: string[];
  title: string;
};

export type Database = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: string | null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: {
    draft: {
      id: string;
      type: string;
      checkbox: false;
    };
    ogImage: {
      id: string;
      type: string;
      url: null;
    };
    slug: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: string;
          };
          plain_text: string;
          href: null;
        },
      ];
    };
    featured: {
      id: string;
      type: string;
      checkbox: false;
    };
    description: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: string;
          };
          plain_text: string;
          href: null;
        },
      ];
    };
    author: {
      id: string;
      type: string;
      people: [
        {
          object: string;
          id: string;
        },
      ];
    };
    date: {
      id: string;
      type: string;
      created_time: string;
    };
    tags: {
      id: string;
      type: string;
      multi_select: [
        {
          id: string;
          name: string;
          color: string;
        },
      ];
    };
    title: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: string;
          };
          plain_text: string;
          href: null;
        },
      ];
    };
  };
  url: string;
  public_url: null | string;
};

export type DataBaseResponseNotionAPI = {
  object: string;
  results: Database[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  page: object;
  developer_survey: string;
};
