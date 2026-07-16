import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-panel rounded-lg px-6 sm:px-7 py-6 no-underline transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-transparent hover:border-gold/30"
    >
      <div className="flex justify-between items-baseline flex-wrap gap-3">
        <h3 className="font-display font-bold text-[18px] text-cream">
          {post.title}
        </h3>
        <span className="text-[11.5px] text-soft whitespace-nowrap">
          {post.date} · {post.readTime}
        </span>
      </div>
      <p className="text-[12.5px] text-gold my-2 tracking-wide uppercase">
        {post.category}
      </p>
      <p className="text-soft text-[14.5px] leading-relaxed">
        {post.excerpt}
      </p>
    </Link>
  );
}