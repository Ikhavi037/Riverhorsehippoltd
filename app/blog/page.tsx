import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Financial Insights & Advisory',
  description:
    'Expert insights on accounting, tax planning, audit, governance, NGO compliance, digital transformation, and business advisory from the Riverhorse Hippo team.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
      <PageHero
        eyebrow="Blog & Insights"
        title="Financial insights to fuel your growth"
        description="Expert analysis, practical guides, and industry commentary from our team of seasoned professionals."
      />

      <section className="py-20 sm:py-24">
        <Container>
          {/* Featured post */}
          <FadeIn>
            <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all hover:shadow-xl lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">Featured</span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">{featured.category}</span>
                <h2 className="heading-font mt-3 text-2xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                </div>
                <div className="mt-6 flex items-center gap-1.5 font-semibold text-gold-600 dark:text-gold-400">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Rest of posts */}
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={0.1}>
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-medium text-gold-400 backdrop-blur-sm">{post.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h3 className="heading-font mt-3 text-base font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
