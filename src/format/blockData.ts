import { Block, BlockType, CleanBlock, TypeBlock } from '../interfaces/blocks';
import { handleCode } from './handleCode';

function getRichText(type: BlockType, data: TypeBlock): string {
  if ('language' in data) {
    return handleCode(data);
  }

  if ('rich_text' in data) {
    if (Array.isArray(data.rich_text)) {
      if (data.rich_text.length > 0) {
        const text = data.rich_text
          .map((t) => {
            if (t.href !== null) {
              return `[${t.plain_text}](${t.href})`;
            }
            return t.plain_text;
          })
          .join('');
        return text;
      }
    }
  }

  if (type === 'divider') {
    return '---';
  }

  if (type === 'image') {
    if ('external' in data) {
      return data.external.url;
    }
  }

  console.log('====================================');
  console.log('Falta el tipo: ', type);
  console.log('====================================');

  // child_database

  return '';
}

export function blockData(blocks: Block[]): CleanBlock[] {
  const sections = blocks.map((block) => {
    const { id, type } = block;
    const contentType = block[type];
    const contentText = getRichText(type, contentType);

    const section = {
      id: id,
      type: type,
      content: contentText,
    };

    return section;
  });

  return sections;
}
