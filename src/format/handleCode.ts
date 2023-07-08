import { Code } from '../interfaces/blocks';

export function handleCode(data: Code) {
  const { language, rich_text } = data;
  if (Array.isArray(rich_text) && rich_text.length > 0) {
    const result = `\`\`\`${language}\n${rich_text[0].plain_text}\n\`\`\``;
    return result;
  }
  return `\`\`\`${language || ''}\n\n\`\`\``;
}
