import fs from "fs";
import GrayMatter from "gray-matter";
import path from "path";

type PostData = {
  dir: string;
  metadata: GrayMatter.GrayMatterFile<string>;
  content: string;
}[];

export function parseHumanDate(dateStr: string): Date {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleaned);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }
  return date;
}

const articlesDirectory = path.join(process.cwd(), "src/posts/articles");
const projectsDirectory = path.join(process.cwd(), "src/posts/projects");

export function getAllPosts(): { articles: PostData; projects: PostData } {
  try {
    const articles = getPosts(articlesDirectory);
    const projects = getPosts(projectsDirectory);

    return {
      articles,
      projects,
    };
  } catch (e) {
    console.error(e); // or throw, or return a default object
  }
  return { articles: [], projects: [] };
}

export function getPosts(folderPath: string): PostData {
  const dirs = fs.readdirSync(folderPath);

  const posts: PostData = [];

  dirs.map((dir) => {
    const singlePostDirectory = path.join(folderPath, dir);
    const filenames = fs.readdirSync(singlePostDirectory);

    filenames.map((file) => {
      if (/\.md$/.test(file)) {
        const fullPath = path.join(singlePostDirectory, file);
        const content = fs.readFileSync(fullPath, "utf-8");
        const metadata = GrayMatter(content);
        posts.push({ dir, metadata, content });
      }
    });
  });

  posts.sort(
    (a, b) =>
      parseHumanDate(b.metadata.data.date).getTime() -
      parseHumanDate(a.metadata.data.date).getTime()
  );

  return posts;
}
