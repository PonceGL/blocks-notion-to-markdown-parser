import { RichText } from './blocks';
import { Parent, TedBy } from './fetch';

export type PropsMetadata = {
  result: ResponseMetadata;
  defaultUser: string;
};

export type ResponseMetadata = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: string | null;
  icon: string | null;
  parent: Parent;
  archived: boolean;
  properties: {
    draft: {
      id: string;
      type: string;
      checkbox: boolean;
    };
    ogImage: {
      id: string;
      type: string;
      url: string | null;
    };
    slug: {
      id: string;
      type: string;
      rich_text: RichText[];
    };
    featured: {
      id: string;
      type: string;
      checkbox: true;
    };
    description: Description;
    author: Author;
    date: {
      id: string;
      type: string;
      created_time: string;
    };
    tags: Tags;
    title: Title;
  };
  url: string | null;
  public_url: string | null;
  developer_survey: string;
};

export type Description = {
  id: string;
  type: string;
  rich_text: RichText[];
};

export type Author = {
  id: string;
  type: string;
  people: [
    {
      object: string;
      id: string;
    },
  ];
};

export type Tags = {
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

export type Title = {
  id: string;
  type: string;
  title: [
    {
      type: string;
      text: {
        content: string;
        link: string | null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: string | null;
    },
  ];
};
