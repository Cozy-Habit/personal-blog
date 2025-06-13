import { DetailPage } from "@/components";
import { getAllPosts, getPostContent } from "@/utils";
import GrayMatter from "gray-matter";

// Tell Next.js which slugs to statically generate
export async function generateStaticParams() {
  const { articles, projects } = getAllPosts();
  const postIds = [];

  if (articles)
    postIds.push(
      articles.map(({ dir }: { dir: string }) => {
        return {
          id: dir,
        };
      })
    );

  if (projects)
    postIds.push(
      projects.map(({ dir }: { dir: string }) => {
        return {
          id: dir,
        };
      })
    );

  // Flatten the array of arrays
  return postIds.flat();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const markdown = getPostContent(id);

  if (markdown) {
    const content = GrayMatter(markdown).content;
    return <DetailPage markdown={content} />;
  }
  return <div>Post not found</div>;
}
