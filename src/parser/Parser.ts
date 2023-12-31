import { CleanBlock } from '../interfaces/blocks';
import { ItemDatabaseClean } from '../interfaces/databases';
import { DataForParser } from '../interfaces/parser';
import { TypeBlockParser } from './TypeBlock';

class Parser {
  private readonly metadata: ItemDatabaseClean;
  private readonly blocks: CleanBlock[];
  private template: string;
  private readonly typeBlock: TypeBlockParser;

  constructor(metadata: ItemDatabaseClean, blocks: CleanBlock[], typeBlock: TypeBlockParser) {
    this.metadata = metadata;
    this.blocks = blocks;
    this.template = ``;
    this.typeBlock = typeBlock;
  }

  public async generateData(): Promise<string> {
    this.generateMetadata();
    const text = await this.typeBlock.format(this.blocks);
    const markdown = `${this.template}\n\n${text.trim()}\n`;
    return markdown;
  }
  private generateMetadata() {
    const { draft, ogImage, slug, featured, description, date, tags, title, author } = this.metadata;
    const newData = `---\nauthor: ${author}\ntitle: '${title}'\ndate: ${date}\ndescription: ${description}\npostSlug: ${slug}\nfeatured: ${featured}\ndraft: ${draft}\ntags:  ${this.generateListTags(
      tags,
    )}\nogImage: ${ogImage}\nkeyWords: ""\n---\n`;
    this.template = newData.trim();
  }

  private generateListTags(tags: string[]): string {
    if (tags.length === 1) {
      return `
     - ${tags[0]}`;
    }

    if (tags.length > 1) {
      const stringTags = tags
        .map(
          (tag) => `
    - ${tag}`,
        )
        .join('');
      return stringTags;
    }

    return '';
  }
}

export function parser({ metadata, blocks, notion_key }: DataForParser) {
  const typeBlock = new TypeBlockParser(notion_key);
  return new Parser(metadata, blocks, typeBlock);
}
