'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BarChart3, TrendingUp, Wallet, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted by 500+ organizations
            </span>
            <h1 className="heading-font mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Accounting. Tax. Audit.
              <br />
              Advisory.{' '}
              <span className="text-gradient-gold">Done Right.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
              Riverhorse Hippo Company Limited helps startups, SMEs, NGOs, corporates, and public institutions achieve sustainable growth through expert financial services and strategic advisory.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:shadow-xl hover:shadow-gold-500/30"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="heading-font text-3xl font-bold text-gold-400">15+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <div className="heading-font text-3xl font-bold text-gold-400">12</div>
                <div className="text-sm text-white/60">Countries Served</div>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <div className="heading-font text-3xl font-bold text-gold-400">500+</div>
                <div className="text-sm text-white/60">Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right: floating dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <FloatingDashboard />
          </motion.div>
        </div>
      </Container>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80V40C240 10 480 10 720 30C960 50 1200 50 1440 30V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}

function FloatingDashboard() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass rounded-2xl p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/60">Revenue Overview</div>
            <div className="heading-font text-2xl font-bold text-white">$2.4M</div>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-green-500/20 px-2 py-1 text-xs font-semibold text-green-400">
            <TrendingUp className="h-3 w-3" />
            +18.2%
          </div>
        </div>
        {/* Mini chart */}
        <div className="mt-4 flex h-24 items-end gap-1.5">
          {[40, 55, 35, 65, 50, 75, 60, 85, 70, 90, 80, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
              className="flex-1 rounded-t bg-gradient-to-t from-gold-500/40 to-gold-500"
            />
          ))}
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute -right-6 top-32 rounded-xl p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/20 text-gold-400">
            <Wallet className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-white/60">Tax Saved</div>
            <div className="text-sm font-bold text-white">$128K</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="glass absolute -left-8 bottom-20 rounded-xl p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-white/60">Audit Score</div>
            <div className="text-sm font-bold text-white">98/100</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
