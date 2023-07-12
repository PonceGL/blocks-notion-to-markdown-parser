import { CleanBlock, TypeBlock } from '../interfaces/blocks';
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

  public generateData() {
    this.generateMetadata();
    const text = this.typeBlock.format(this.blocks);
    const markdown = `${this.template}\n\n${text.trim()}\n`;
    console.log('====================================');
    console.log('============= markdown =============');
    console.log('====================================');
    console.log(markdown);
    console.log('====================================');
  }
  private generateMetadata() {
    const { draft, ogImage, slug, featured, description, date, tags, title } = this.metadata;
    const newData = `---\nauthor: PonceGL\ntitle: '${title}'\ndate: ${date}\ndescription: ${description}\npostSlug: ${slug}\nfeatured: ${featured}\ndraft: ${draft}\ntags:  ${this.generateListTags(
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

export function parser({ metadata, blocks }: DataForParser) {
  const typeBlock = new TypeBlockParser();
  return new Parser(metadata, blocks, typeBlock);
}
