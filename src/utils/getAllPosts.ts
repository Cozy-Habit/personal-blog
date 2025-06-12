import fs from "fs";
import GrayMatter from "gray-matter";
import path from "path";

export function parseHumanDate(dateStr: string): Date {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleaned);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }
  return date;
}

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function getAllPosts() {
  try {
    const dirs = fs.readdirSync(postsDirectory);

    const posts: {
      dir: string;
      metadata: GrayMatter.GrayMatterFile<string>;
      content: string;
    }[] = [];

    dirs.map((dir) => {
      const singlePostDirectory = path.join(process.cwd(), `src/posts/${dir}`);
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
  } catch (e) {
    console.error(e); // or throw, or return a default object
  }
}
