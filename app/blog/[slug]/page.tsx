import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd, JsonLd } from '@/components/json-ld';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: siteConfig.name },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
          <span className="mt-6 inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">{post.category}</span>
          <h1 className="heading-font mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-gold-400" />{post.author}, {post.authorRole}</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold-400" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold-400" />{post.readTime}</span>
          </div>
        </Container>
      </section>

      {/* Cover image */}
      <div className="relative -mt-8">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="aspect-[21/9] w-full object-cover" />
          </div>
        </Container>
      </div>

      {/* Article body */}
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <FadeIn>
            <article className="space-y-6">
              {post.content.map((para, i) => (
                <p key={i} className="text-base leading-[1.8] text-foreground sm:text-lg">{para}</p>
              ))}
            </article>
          </FadeIn>

          {/* Author box */}
          <FadeIn delay={0.1}>
            <div className="mt-12 flex items-center gap-4 rounded-2xl border border-border bg-muted/50 p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-gradient text-lg font-bold text-gold-400">
                {post.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="font-semibold text-navy-900 dark:text-white">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorRole}, Riverhorse Hippo Company Limited</div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/50 py-16 sm:py-20">
          <Container>
            <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Related Articles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative w-32 shrink-0 overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rp.image} alt={rp.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-center p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">{rp.category}</span>
                    <h3 className="heading-font mt-1.5 text-sm font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">{rp.title}</h3>
                    <span className="mt-2 flex items-center gap-1 text-xs font-medium text-gold-600 dark:text-gold-400">Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
