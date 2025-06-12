import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function getPostContent(id: string) {
  try {
    const fullPath = path.join(postsDirectory, `${id}/post.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    return fileContents;
  } catch (e) {
    console.error(e);
  }
}
