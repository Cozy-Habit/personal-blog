import { getAllPosts, getPostContent } from "@/utils";
import GrayMatter from "gray-matter";
import DetailPage from "./DetailPage";

// Tell Next.js which slugs to statically generate
export async function generateStaticParams() {
  const posts = getAllPosts();

  if (posts)
    return posts.map(({ dir }) => {
      return {
        id: dir,
      };
    });
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const markdown = getPostContent(id);

  if (markdown) {
    const content = GrayMatter(markdown).content;
    return <DetailPage markdown={content} />;
  }
}
