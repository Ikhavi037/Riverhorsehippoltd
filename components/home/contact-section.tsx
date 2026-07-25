'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/lib/site-config';
import { toast } from 'sonner';

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: 'Homepage contact form',
        message: form.message,
      });
      if (error) throw error;
      toast.success('Thank you! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's start a conversation"
          description="Reach out to discuss how we can help your organization achieve its financial goals."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact info + map */}
          <FadeIn>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard icon={MapPin} title="Visit Us" lines={[siteConfig.address.line1, siteConfig.address.line2]} />
                <ContactCard icon={Phone} title="Call Us" lines={[siteConfig.phone]} href={`tel:${siteConfig.phone}`} />
                <ContactCard icon={Mail} title="Email Us" lines={[siteConfig.email]} href={`mailto:${siteConfig.email}`} />
                <ContactCard icon={Clock} title="Office Hours" lines={[siteConfig.hours]} />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-border shadow-md" style={{ minHeight: '300px' }}>
                <iframe
                  title="Riverhorse Hippo office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8615!2d36.8168!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OCc2MC40IkU!5e0!3m2!1sen!2ske!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
              <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 hours.</p>
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="mt-1.5"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+254 786 658 137"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="mt-1.5 resize-none"
                  />
                </div>
                <Button type="submit" variant="gold" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
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
