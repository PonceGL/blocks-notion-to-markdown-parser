import { ItemDatabaseClean } from "../interfaces/databases";
import { ResponseMetadata } from "../interfaces/responseMetadata";

export function metadataData(result: ResponseMetadata): ItemDatabaseClean {
  const properties = result.properties;

  const {
    draft,
    ogImage,
    slug,
    featured,
    description,
    author,
    date,
    tags,
    title,
  } = properties;

  const item = {
    id: result.id,
    draft: draft.checkbox,
    ogImage: ogImage.url,
    slug: slug.rich_text[0].plain_text,
    featured: featured.checkbox,
    description: description.rich_text[0].plain_text,
    author: author.people[0].id,
    date: date.created_time,
    tags: tags.multi_select.map((select) => select.name),
    title: title.title[0].plain_text,
  };
  return item;
}
