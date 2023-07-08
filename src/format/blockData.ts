import { Block, BlockType, TypeBlock } from "../interfaces/blocks";

function getRichText(type: BlockType, data: TypeBlock): string {
  if ("rich_text" in data) {
    if (Array.isArray(data.rich_text)) {
      if (data.rich_text.length > 0) {
        return data.rich_text[0].plain_text;
      }
    }
  }

  if (type === "divider") {
    return "---";
  }

  if (type === "image") {
    if ("external" in data) {
      return data.external.url;
    }
  }

  // child_database

  return "\n";
}

export function blockData(blocks: Block[]) {
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

  console.log("====================================");
  console.log(sections);
  console.log("====================================");

  return blocks;
}

// {
//     object: 'block',
//     id: '33ab8da8-cba7-4aee-8b88-105876b12bce',
//     parent: {
//         type: 'page_id',
//         page_id: '3861029c-d775-46bb-99d7-a6ef29c6085a'
//     },
//     created_time: '2023-07-07T15:37:00.000Z',
//     last_edited_time: '2023-07-07T16:29:00.000Z',
//     created_by: { object: 'user', id: '43804446-140c-4054-9133-1150f35bd40a' },
//     last_edited_by: { object: 'user', id: '43804446-140c-4054-9133-1150f35bd40a' },
//     has_children: false,
//     archived: false,
//     type: 'paragraph',
//     paragraph: { rich_text: [Array], color: 'default' }
// }
