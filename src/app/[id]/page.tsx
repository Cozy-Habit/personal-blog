import { DetailPage } from "@/components";
import { getAllPosts, getPostContent } from "@/utils";
import GrayMatter from "gray-matter";

// Tell Next.js which slugs to statically generate
export async function generateStaticParams() {
  const posts = getAllPosts();

  if (posts)
    return posts.map(({ dir }: { dir: string }) => {
      return {
        id: dir,
      };
    });
  return [];
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
