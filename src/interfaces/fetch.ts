import { AxiosRequestConfig } from 'axios';

export type ConectData = {
  notion_key: string;
  databaseId: string;
  options: OptionsRequest;
};

export type TedBy = {
  object: string;
  id: string;
};

export type Parent = {
  type: string;
  page_id: string;
};

export type OptionsRequest = AxiosRequestConfig;

export type OptionsRequestFilters = {
  filter: {
    property: 'draft';
    checkbox: {
      equals: boolean;
    };
  };
  sorts: [
    {
      property: string;
      direction: 'descending' | 'ascending';
    },
  ];
};
