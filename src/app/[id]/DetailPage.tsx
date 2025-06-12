import { CommentSection } from "@/components";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export default function App({ markdown }: { markdown: string }) {
  return (
    <div className="pt-8 prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
        components={{
          img: ({ ...props }) => <img {...props} className="rounded-md" />,
        }}
      >
        {markdown}
      </ReactMarkdown>
      <hr />

      <CommentSection />
    </div>
  );
}
