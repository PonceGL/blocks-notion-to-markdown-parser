import { Block, BlockType, CleanBlock, TypeBlock } from '../interfaces/blocks';
import { handleAnnotations } from './handleAnnotations';
import { handleCode } from './handleCode';

function getRichText(type: BlockType, data: TypeBlock): string {
  if (type === 'child_database') {
    if ('title' in data) {
      console.log('====================================');
      console.log('child_database Cannot parsert: ', data.title);
      console.log('====================================');
    }
  }

  if ('language' in data) {
    return handleCode(data);
  }

  if (type === 'divider') {
    return '---';
  }

  if (type === 'image') {
    if ('external' in data) {
      const url = data.external.url;
      const caption = data.caption.length > 0 ? data.caption[0].plain_text : url;
      return `\n![${caption}](${url})\n`;
    }
  }

  if ('rich_text' in data) {
    if (Array.isArray(data.rich_text)) {
      if (data.rich_text.length > 0) {
        const text = data.rich_text
          .map(({ plain_text, annotations, href }) => {
            if (href !== null) {
              return `[${plain_text}](${href})`;
            }
            return handleAnnotations({ plain_text, annotations });
          })
          .join('');
        return text;
      }
    }
  }


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
