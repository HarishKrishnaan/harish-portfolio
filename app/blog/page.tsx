import Link from "next/link";
import RouteLineRight from "@/components/RouteLineRight";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogs";

export default function AllBlogsPage() {
  return (
    <>
      <main className="relative max-w-[780px] mx-auto px-4 sm:px-6 pb-24">
        <RouteLineRight />

        <div className="pr-14 sm:pr-[68px] pt-16 sm:pt-20 pb-6 text-right">
          <Link
            href="/#blogs"
            className="text-[12.5px] text-gold no-underline hover:text-cream transition-colors duration-200"
          >
            Back to portfolio →
          </Link>
        </div>

        <header className="relative pr-14 sm:pr-[68px] pb-10 text-right">
          <p className="font-display font-bold text-xs tracking-[0.16em] uppercase text-gold mb-4">
            Field Notes
          </p>
          <h1 className="font-display font-extrabold text-[42px] sm:text-[56px] leading-[0.98] tracking-tight text-cream">
            All Blogs
          </h1>
        </header>

        <div className="flex flex-col gap-4 pr-14 sm:pr-[68px]">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-panel rounded-lg px-6 sm:px-7 py-6 no-underline transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-transparent hover:border-gold/30 text-right"
            >
              <div className="flex justify-between items-baseline flex-wrap gap-3">
                <span className="text-[11.5px] text-soft whitespace-nowrap order-2 sm:order-1">
                  {post.date} · {post.readTime}
                </span>
                <h3 className="font-display font-bold text-[18px] text-cream order-1 sm:order-2">
                  {post.title}
                </h3>
              </div>
              <p className="text-[12.5px] text-gold my-2 tracking-wide uppercase">
                {post.category}
              </p>
              <p className="text-soft text-[14.5px] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}