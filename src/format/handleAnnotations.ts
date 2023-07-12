import { Annotations } from '../interfaces/blocks';

type Props = {
  plain_text: string;
  annotations: Annotations;
};
export function handleAnnotations({ plain_text, annotations }: Props): string {
  if (typeof plain_text !== 'string' || plain_text == '') return '';

  if (annotations.bold && !annotations.italic) {
    return `**${plain_text}**`;
  }

  if (annotations.italic && !annotations.bold) {
    return `*${plain_text}*`;
  }
  if (annotations.italic && annotations.bold) {
    return `***${plain_text}***`;
  }

  if (annotations.strikethrough) {
    return `~~${plain_text}~~`;
  }

  if (annotations.underline) {
    return `<ins>${plain_text}</ins>`;
  }

  if (annotations.code) {
    return `\`${plain_text}\``;
  }

  return plain_text;
}
