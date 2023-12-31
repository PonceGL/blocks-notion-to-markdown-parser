import { Parent, TedBy } from './fetch';

export type CleanBlock = {
  id: string;
  type: BlockType;
  content: string;
};

export type BlocksResponseNotionAPI = {
  object: string;
  results: Block[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  block: object;
  developer_survey: string;
};

export type Block = {
  object: string;
  id: string;
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  created_by: TedBy;
  last_edited_by: TedBy;
  has_children: boolean;
  archived: boolean;
  type: BlockType;
  [key: string]: TypeBlock;
};

export type TypeBlock =
  | Paragraph
  | Heading
  | Code
  | Divider
  | ChildDatabase
  | Image
  | ToDo
  | Callout
  | TableOfContents
  | Table
  | TableRow;

export type BlockType =
  | 'code'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'paragraph'
  | 'quote'
  | 'divider'
  | 'toggle'
  | 'image'
  | 'to_do'
  | 'callout'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'child_database'
  | 'table_of_contents'
  | 'table'
  | 'table_row';

export type Color =
  | 'blue'
  | 'blue_background'
  | 'brown'
  | 'brown_background'
  | 'default'
  | 'gray'
  | 'gray_background'
  | 'green'
  | 'green_background'
  | 'orange'
  | 'orange_background'
  | 'pink'
  | 'pink_background'
  | 'purple'
  | 'purple_background'
  | 'red'
  | 'red_background'
  | 'yellow'
  | 'yellow_background';

export type Paragraph = {
  rich_text: RichText[];
  color: string;
};

export type RichText = {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null | string;
};

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export type Text = {
  content: string;
  link: External | null;
};

export type External = {
  url: string;
};

export type Callout = {
  rich_text: RichText[];
  icon: Icon;
  color: string;
};

export type Icon = {
  type: string;
  emoji: string;
};

export type ChildDatabase = {
  title: string;
};

export type Code = {
  caption: any[];
  rich_text: RichText[];
  language: string;
};

export type Divider = {};

export type Heading = {
  rich_text: RichText[];
  is_toggleable: boolean;
  color: string;
};

export type Image = {
  caption: any[];
  type: string;
  external: External;
};

export type TableOfContents = {
  color: string;
};

export type Table = {
  table_width: number;
  has_column_header: boolean;
  has_row_header: boolean;
};

export type TableRow = {
  cells: Cell[][];
};

export type Cell = {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
};


export type ToDo = {
  rich_text: RichText[];
  checked: boolean;
  color: string;
};
