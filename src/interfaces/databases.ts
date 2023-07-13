import { Parent, TedBy } from './fetch';
import { ResponseMetadata } from './responseMetadata';

export type PropsDatabase = {
  results: ResponseMetadata[];
  defaultUser: string;
};

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

export type DataBaseResponseNotionAPI = {
  object: string;
  results: ResponseMetadata[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  page: object;
  developer_survey: string;
};
