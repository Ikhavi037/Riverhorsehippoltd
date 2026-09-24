import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, HeartHandshake, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/container';
import { PageHero, SectionHeading } from '@/components/section-heading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { CredentialsSection } from '@/components/credentials-section';
import { TeamSection } from '@/components/team-section';
import { stats } from '@/lib/content';
import { AnimatedCounter } from '@/components/animated-counter';

export const metadata: Metadata = pageMetadata({
  title: 'About Our Firm in Nairobi | Riverhorse Hippo',
  description:
    'Riverhorse Hippo is a Nairobi accounting, tax, audit and advisory firm serving startups, SMEs and NGOs across East Africa. Get in touch today.',
  path: '/about',
});

const values = [
  { icon: Target, title: 'Our Mission', text: 'To empower organizations with the financial clarity, strategic insight, and professional support they need to achieve sustainable growth and lasting impact.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted business advisory and financial services partner in East Africa, recognized for excellence, integrity, and transformative client outcomes.' },
  { icon: HeartHandshake, title: 'Our Values', text: 'Integrity, excellence, client-centricity, innovation, and accountability guide every engagement and every interaction with our clients.' },
];

const principles = [
  'Independence and objectivity in every engagement',
  'Strict confidentiality and data protection',
  'Continuous professional development',
  'Proactive communication and transparency',
  'Evidence-based recommendations',
  'Long-term partnership mindset',
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />
      <PageHero
        eyebrow="About Us"
        title="Building financial confidence across East Africa"
        description="We are a team of seasoned professionals dedicated to helping organizations navigate complexity, achieve compliance, and unlock sustainable growth."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/book-consultation" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90">
            Work With Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
            See Our Results
          </Link>
        </div>
      </PageHero>

      {/* Mission / Vision / Values */}
      <section className="py-20 sm:py-24">
        <Container>
          <StaggerContainer className="grid gap-6 md:grid-cols-3" delay={0.1}>
            {values.map((val) => (
              <StaggerItem key={val.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-gold-400">
                    <val.icon className="h-7 w-7" />
                  </div>
                  <h3 className="heading-font mt-5 text-xl font-bold text-navy-900 dark:text-white">{val.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{val.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-muted/50 py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">Our Story</span>
              <h2 className="heading-font mt-4 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl text-balance">
                From a bold idea to a trusted advisory firm
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>Riverhorse Hippo Company Limited was founded with a simple conviction: that every organization — regardless of size — deserves access to world-class financial expertise. We saw too many businesses and NGOs struggling with compliance, missing growth opportunities, and lacking the financial leadership they needed.</p>
                <p>Today, we serve over 500 clients across 12 countries, from early-stage startups to large corporates and public institutions. Our team brings Big Four experience, sector-specific knowledge, and a genuine commitment to client success.</p>
                <p>What sets us apart is not just our technical expertise — it is our partnership approach. We do not just deliver reports; we build relationships, share knowledge, and walk alongside our clients as they grow.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <h3 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">Our Principles</h3>
                <ul className="mt-5 space-y-3">
                  {principles.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-sm text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="heading-font text-4xl font-bold text-gradient-gold sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials & Registration */}
      <CredentialsSection />

      {/* Team (renders only when src/data/team.ts is populated) */}
      <TeamSection />

      {/* CTA */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-xl sm:p-16">
              <div className="absolute inset-0 bg-dots opacity-30" />
              <div className="relative">
                <Award className="mx-auto h-12 w-12 text-gold-400" />
                <h2 className="heading-font mt-6 text-3xl font-bold sm:text-4xl text-balance">Partner with a firm that cares about your success</h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70 text-pretty">Experience the difference of working with a team that treats your goals as their own.</p>
                <Link href="/book-consultation" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 transition-opacity hover:opacity-90">
                  Book a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
