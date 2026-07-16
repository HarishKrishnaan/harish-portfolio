import Link from "next/link";
import Pitch from "./Pitch";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/blogs";

export default function Blogs() {
  const preview = blogPosts.slice(0, 3);

  return (
    <Pitch id="blogs" label="Pitch 4 — Field Notes" title="Blogs I've created">
      <div className="flex justify-end -mt-14 mb-6">
        <Link
          href="/blog"
          className="text-[12.5px] text-gold border-b border-gold no-underline transition-all duration-200 hover:text-cream hover:border-cream whitespace-nowrap"
        >
          All Blogs ↗
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {preview.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Pitch>
  );
}