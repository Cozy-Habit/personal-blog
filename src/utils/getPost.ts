import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function getPostContent(id: string) {
  try {
    const fullPath = path.join(postsDirectory, `${id}/post.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    const transformed = fileContents.replace(
      /!\[(.*?)\]\(([^\)]+)\)/g,
      (_match, alt, imgPath) => {
        return `![${alt}](${basePath}/_generated/posts/${id}/${imgPath})`;
      }
    );
    return transformed;
  } catch (e) {
    console.error(e);
  }
}
