import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogArticlePage } from "@/components/blog/blog-article-page";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { createBlogMetadata } from "@/lib/blog-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type BlogPostRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return post ? createBlogMetadata(post, "en") : { title: "Article not found" };
}

export default async function BlogPostPage({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return <BlogArticlePage post={post} locale="en" />;
}
