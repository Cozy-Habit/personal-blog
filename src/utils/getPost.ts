import fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "src/posts/articles");
const projectsDirectory = path.join(process.cwd(), "src/posts/projects");

export function getPostContent(id: string) {
  return getArticleContent(id) || getProjectContent(id);
}

function getArticleContent(id: string) {
  try {
    const fullPath = path.join(articlesDirectory, `${id}/post.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    const transformed = fileContents.replace(
      /!\[(.*?)\]\(([^\)]+)\)/g,
      (_match, alt, imgPath) => {
        return `![${alt}](${basePath}/_generated/posts/projects/${id}/${imgPath})`;
      }
    );
    return transformed;
  } catch (e) {
    console.error(e);
  }
}

function getProjectContent(id: string) {
  try {
    const fullPath = path.join(projectsDirectory, `${id}/post.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    const transformed = fileContents.replace(
      /!\[(.*?)\]\(([^\)]+)\)/g,
      (_match, alt, imgPath) => {
        return `![${alt}](${basePath}/_generated/posts/articles/${id}/${imgPath})`;
      }
    );
    return transformed;
  } catch (e) {
    console.error(e);
  }
}
