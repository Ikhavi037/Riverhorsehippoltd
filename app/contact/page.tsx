'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/lib/site-config';
import { toast } from 'sonner';
import { BreadcrumbJsonLd } from '@/components/json-ld';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert(form);
      if (error) throw error;
      toast.success('Thank you! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with our team"
        description="Whether you have a question, need a quote, or want to explore how we can help your organization, we're here to help."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact info */}
            <FadeIn>
              <div className="space-y-6">
                <ContactInfoCard icon={MapPin} title="Visit Our Office" lines={[siteConfig.address.line1, siteConfig.address.line2]} />
                <ContactInfoCard icon={Phone} title="Call Us" lines={[siteConfig.phone]} href={`tel:${siteConfig.phone}`} />
                <ContactInfoCard icon={Mail} title="Email Us" lines={[siteConfig.email, siteConfig.supportEmail]} href={`mailto:${siteConfig.email}`} />
                <ContactInfoCard icon={Clock} title="Office Hours" lines={[siteConfig.hours, 'Saturday: 9:00 AM - 1:00 PM']} />

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] p-4 text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-6 w-6" fill="white" />
                  <div>
                    <div className="font-semibold">Chat on WhatsApp</div>
                    <div className="text-sm text-white/80">Quick responses during business hours</div>
                  </div>
                </a>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="heading-font text-sm font-semibold text-navy-900 dark:text-white">Follow Us</h4>
                  <div className="mt-3 flex gap-3">
                    <SocialBtn href={siteConfig.social.linkedin} icon={Linkedin} label="LinkedIn" />
                    <SocialBtn href={siteConfig.social.twitter} icon={Twitter} label="Twitter" />
                    <SocialBtn href={siteConfig.social.facebook} icon={Facebook} label="Facebook" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact form */}
            <FadeIn delay={0.15} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
                <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Send us a message</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fields marked with * are required. We typically respond within 24 hours.</p>
                <div className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Ltd" className="mt-1.5" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 786 658 137" className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your needs..." className="mt-1.5 resize-none" />
                  </div>
                  <Button type="submit" variant="gold" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn delay={0.2} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md" style={{ height: '400px' }}>
              <iframe
                title="Riverhorse Hippo office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8615!2d36.8168!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OCc2MC40IkU!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

function ContactInfoCard({ icon: Icon, title, lines, href }: { icon: typeof MapPin; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-gold-500/30 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-gradient text-gold-400">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="heading-font mt-3 text-sm font-semibold text-navy-900 dark:text-white">{title}</h4>
      {lines.map((line, i) => (
        <p key={i} className="mt-1 text-sm text-muted-foreground">{line}</p>
      ))}
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function SocialBtn({ href, icon: Icon, label }: { href: string; icon: typeof Linkedin; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-navy-700 transition-all hover:bg-navy-900 hover:text-gold-400 dark:text-white/70">
      <Icon className="h-4 w-4" />
    </a>
  );
}
