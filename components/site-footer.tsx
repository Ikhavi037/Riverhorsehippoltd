'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email });
      if (error) throw error;
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-navy-900 text-white/70">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <Container>
          <div className="flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="heading-font text-2xl font-bold text-white md:text-3xl">
                Ready to grow with confidence?
              </h3>
              <p className="mt-2 text-white/60">
                Book a free consultation and discover how we can help your business thrive.
              </p>
            </div>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path d="M8 22C8 22 6 18 10 14C14 10 18 12 20 14C22 16 22 20 20 22C18 24 14 24 12 22C10 20 8 22 8 22Z" fill="#D4AF37" />
                  <circle cx="14" cy="16" r="1.5" fill="#0B132B" />
                  <path d="M20 12C20 12 22 10 24 11" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="heading-font text-lg font-bold text-white">
                Riverhorse<span className="text-gold-400"> Hippo</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline} Professional business advisory and financial services for startups, SMEs, NGOs, corporates, and public institutions.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">{siteConfig.email}</a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="heading-font text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-gold-400">About Us</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-gold-400">Careers</Link></li>
              <li><Link href="/case-studies" className="transition-colors hover:text-gold-400">Case Studies</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-gold-400">Blog</Link></li>
              <li><Link href="/faqs" className="transition-colors hover:text-gold-400">FAQs</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-gold-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-font text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-gold-400">{s.title}</Link>
                </li>
              ))}
              <li><Link href="/services" className="font-medium text-gold-400 transition-colors hover:text-gold-300">View All Services →</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="heading-font text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-white/60">
              Get financial insights and advisory updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gold-gradient px-4 py-2.5 text-sm font-semibold text-navy-900 transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-xs text-white/50 transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-white/50 transition-colors hover:text-white">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-3">
              <SocialLink href={siteConfig.social.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={siteConfig.social.twitter} icon={Twitter} label="Twitter" />
              <SocialLink href={siteConfig.social.facebook} icon={Facebook} label="Facebook" />
              <SocialLink href={siteConfig.social.instagram} icon={Instagram} label="Instagram" />
              <SocialLink href={siteConfig.social.youtube} icon={Youtube} label="YouTube" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Linkedin; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all hover:bg-gold-500 hover:text-navy-900"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
