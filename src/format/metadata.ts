import slugify from 'slugify';
import { ItemDatabaseClean } from '../interfaces/databases';
import { Author, Description, PropsMetadata, Title } from '../interfaces/responseMetadata';
import { RichText } from '../interfaces/blocks';

function handleTitle(title: Title) {
  if (title.title.length > 0 && title.title[0].plain_text !== '') {
    return title.title[0].plain_text;
  }
  throw new Error('no title provided');
}

function handleDescription(description: Description) {
  if (description.rich_text.length > 0 && description.rich_text[0].plain_text !== '') {
    return description.rich_text[0].plain_text;
  }
  return '';
}

function getSlug(rich_text: RichText[], title: Title) {
  if (rich_text.length > 0 && rich_text[0].plain_text !== '') {
    return rich_text[0].plain_text;
  }
  return slugify(handleTitle(title).toLowerCase(), { remove: /[*+~.()'"!:;?¿@><]/g });
}

function handleAuthor(author: Author, defaultUser: string) {
  // getUserInfo({ notion_key, user_id: author.id })
  return defaultUser;
  //
  // if (author.people.length > 0 && author.people[0].id !== '') {
  //   return author.people[0].id;
  // }
  // throw new Error('no author provided');
}

export function metadataData({ result, defaultUser }: PropsMetadata): ItemDatabaseClean {
  const properties = result.properties;

  const { draft, ogImage, slug, featured, description, author, date, tags, title } = properties;

  const item = {
    id: result.id,
    draft: draft.checkbox,
    ogImage: ogImage.url,
    slug: getSlug(slug.rich_text, title),
    featured: featured.checkbox,
    description: handleDescription(description),
    author: handleAuthor(author, defaultUser),
    date: date.created_time,
    tags: tags.multi_select.map((select) => select.name),
    title: handleTitle(title),
  };
  return item;
}
