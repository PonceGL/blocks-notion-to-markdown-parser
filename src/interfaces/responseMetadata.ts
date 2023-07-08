export type ResponseMetadata = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: string | null;
  icon: string | null;
  parent: {
    type: string;
    database_id: string;
  };
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
      rich_text: [
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
        }
      ];
    };
    featured: {
      id: string;
      type: string;
      checkbox: true;
    };
    description: {
      id: string;
      type: string;
      rich_text: [
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
        }
      ];
    };
    author: {
      id: string;
      type: string;
      people: [
        {
          object: string;
          id: string;
        }
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
        }
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
        }
      ];
    };
  };
  url: string | null;
  public_url: string | null;
  developer_survey: string;
};
