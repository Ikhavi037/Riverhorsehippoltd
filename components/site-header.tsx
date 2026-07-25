'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { mainNav, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-navy-900 text-white/80 lg:block">
        <Container>
          <div className="flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-5">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-400">
                <Phone className="h-3 w-3" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-400">
                <Mail className="h-3 w-3" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                {siteConfig.hours}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/book-consultation" className="text-gold-400 transition-colors hover:text-gold-300">
                Book a Consultation
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-background/90 shadow-lg backdrop-blur-md'
            : 'bg-background'
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Main navigation">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Riverhorse Hippo home">
              <Logo />
              <span className="heading-font text-lg font-bold tracking-tight text-navy-900 dark:text-white">
                Riverhorse<span className="text-gold-500"> Hippo</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              {mainNav.map((item) => (
                <li
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.title)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        'gold-underline rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive(item.href)
                          ? 'text-gold-600 dark:text-gold-400'
                          : 'text-navy-800 hover:text-navy-900 dark:text-white/80 dark:hover:text-white'
                      )}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive('/resources')
                          ? 'text-gold-600 dark:text-gold-400'
                          : 'text-navy-800 hover:text-navy-900 dark:text-white/80 dark:hover:text-white'
                      )}
                      aria-expanded={dropdownOpen === item.title}
                    >
                      {item.title}
                      <ChevronDown className={cn('h-4 w-4 transition-transform', dropdownOpen === item.title && 'rotate-180')} />
                    </button>
                  )}
                  {item.children && (
                    <AnimatePresence>
                      {dropdownOpen === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full w-64 overflow-hidden rounded-xl border border-border bg-card p-2 shadow-xl"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg p-3 transition-colors hover:bg-muted"
                            >
                              <div className="text-sm font-semibold text-foreground">{child.title}</div>
                              <div className="mt-0.5 text-xs text-muted-foreground">{child.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button asChild className="bg-navy-900 hover:bg-navy-800">
                <Link href="/book-consultation">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="rounded-md p-2 text-navy-900 dark:text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </Container>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border bg-background lg:hidden"
            >
              <Container>
                <ul className="flex flex-col gap-1 py-4">
                  {mainNav.map((item) => (
                    <li key={item.title}>
                      {item.children ? (
                        <>
                          <div className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            {item.title}
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          className={cn(
                            'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted',
                            isActive(item.href) && 'text-gold-600 dark:text-gold-400'
                          )}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="mt-3">
                    <Button asChild className="w-full bg-navy-900 hover:bg-navy-800">
                      <Link href="/book-consultation">Book Consultation</Link>
                    </Button>
                  </li>
                </ul>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function Logo() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-gradient">
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M8 22C8 22 6 18 10 14C14 10 18 12 20 14C22 16 22 20 20 22C18 24 14 24 12 22C10 20 8 22 8 22Z"
          fill="#D4AF37"
        />
        <circle cx="14" cy="16" r="1.5" fill="#0B132B" />
        <path d="M20 12C20 12 22 10 24 11" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
