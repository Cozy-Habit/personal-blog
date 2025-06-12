import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function getPostContent(id: string) {
  try {
    const fullPath = path.join(postsDirectory, `${id}/post.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const transformed = fileContents.replace(
      /!\[(.*?)\]\(([^\)]+)\)/g,
      (_match, alt, imgPath) => {
        console.log(_match, alt, imgPath);
        return `![${alt}](/_generated/posts/${id}/${imgPath})`;
      }
    );
    console.log(id, transformed);
    return transformed;
  } catch (e) {
    console.error(e);
  }
}
