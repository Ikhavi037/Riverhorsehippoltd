'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { blogPosts } from '@/lib/blog';

export function BlogPreviewSection() {
  const posts = blogPosts.filter((p) => p.featured).concat(blogPosts.filter((p) => !p.featured)).slice(0, 3);

  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SectionHeading
            center={false}
            eyebrow="Insights"
            title="Latest from our blog"
            description="Expert insights, guides, and firm news to keep you informed."
          />
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-gold-600 transition-colors hover:text-gold-500 dark:text-gold-400"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" delay={0.1}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-medium text-gold-400 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="heading-font mt-3 text-base font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
