import Link from "next/link";
import { notFound } from "next/navigation";
import RouteLine from "@/components/RouteLine";
import Footer from "@/components/Footer";
import { blogPosts, getPostBySlug } from "@/lib/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <main className="relative max-w-[780px] mx-auto px-4 sm:px-6 pb-24">
        <RouteLine />
        <div className="pl-14 sm:pl-[68px] pt-16 sm:pt-20 pb-6">
          <Link
            href="/#blogs"
            className="text-[12.5px] text-gold no-underline hover:text-cream transition-colors duration-200"
          >
            ← Back to portfolio
          </Link>
        </div>

        <article className="relative pl-14 sm:pl-[68px] pb-10">
          <div className="border border-line/50 rounded-md px-6 sm:px-8 py-8 sm:py-10">
            <p className="font-display font-bold text-[12.5px] uppercase tracking-[0.1em] text-gold mb-3">
              {post.category} · {post.date} · {post.readTime}
            </p>
            <h1 className="font-display font-extrabold text-[32px] sm:text-[44px] leading-[1.05] text-cream mb-8">
              {post.title}
            </h1>

            <div className="flex flex-col gap-6">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-display font-bold text-[18px] text-cream mb-2.5">
                      {section.heading}
                    </h2>
                  )}
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-soft text-[15px] leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-line/40">
              {post.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] px-3 py-1.5 border border-line text-soft rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}