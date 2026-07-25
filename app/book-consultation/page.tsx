'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/lib/supabase';
import { services } from '@/lib/services';
import { toast } from 'sonner';
import { BreadcrumbJsonLd } from '@/components/json-ld';

const timeSlots = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

const steps = ['Your Details', 'Service & Schedule', 'Confirm'] as const;

export default function BookConsultationPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });

  const canProceed = () => {
    if (step === 0) return form.name && form.email && form.phone;
    if (step === 1) return form.service && form.preferred_date && form.preferred_time;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.from('consultation_bookings').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        message: form.message,
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success('Booking request submitted! We will confirm your appointment shortly.');
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <>
        <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Book Consultation', url: '/book-consultation' }]} />
        <PageHero eyebrow="Book Consultation" title="Thank you for your request!" description="We have received your booking request and will confirm your appointment within 24 hours." />
        <section className="py-20">
          <Container size="narrow">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-md">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="heading-font mt-6 text-2xl font-bold text-navy-900 dark:text-white">Request Received</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Thank you, {form.name}. We have received your request for a {form.service} consultation on {form.preferred_date} at {form.preferred_time}. Our team will contact you at {form.email} to confirm.
                </p>
                <div className="mt-8">
                  <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800">
                    Back to Home <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Book Consultation', url: '/book-consultation' }]} />
      <PageHero
        eyebrow="Book Consultation"
        title="Schedule your free consultation"
        description="Take the first step toward financial clarity. Book a complimentary 30-minute consultation with our experts."
      />

      <section className="py-20 sm:py-24">
        <Container size="narrow">
          {/* Progress steps */}
          <div className="mb-10 flex items-center justify-center gap-2 sm:gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${i <= step ? 'bg-gold-gradient text-navy-900' : 'bg-muted text-muted-foreground'}`}>
                  {i + 1}
                </div>
                <span className={`hidden text-sm font-medium sm:block ${i <= step ? 'text-navy-900 dark:text-white' : 'text-muted-foreground'}`}>{label}</span>
                {i < steps.length - 1 && <div className={`h-px w-8 sm:w-16 ${i < step ? 'bg-gold-500' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
              {/* Step 0: Details */}
              {step === 0 && (
                <div className="space-y-5">
                  <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Your Details</h3>
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative mt-1.5">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <div className="relative mt-1.5">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 786 658 137" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company / Organization</Label>
                    <div className="relative mt-1.5">
                      <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Ltd" className="pl-10" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Service & Schedule */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Service & Schedule</h3>
                  <div>
                    <Label>Service of Interest *</Label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                        ))}
                        <SelectItem value="General Consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <div className="relative mt-1.5">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="date" type="date" required min={today} value={form.preferred_date} onChange={(e) => setForm({ ...form, preferred_date: e.target.value })} className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label>Preferred Time Slot *</Label>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setForm({ ...form, preferred_time: slot })}
                          className={`flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                            form.preferred_time === slot
                              ? 'border-gold-500 bg-gold-500/10 text-gold-600 dark:text-gold-400'
                              : 'border-border bg-card text-muted-foreground hover:border-gold-500/30'
                          }`}
                        >
                          <Clock className="h-3.5 w-3.5" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us briefly what you'd like to discuss..." className="mt-1.5 resize-none" />
                  </div>
                </div>
              )}

              {/* Step 2: Confirm */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Confirm Your Booking</h3>
                  <p className="text-sm text-muted-foreground">Please review your details before submitting.</p>
                  <div className="rounded-xl border border-border bg-muted/30 p-5">
                    <dl className="space-y-3 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Name</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.name}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Email</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.email}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Phone</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.phone}</dd>
                      </div>
                      {form.company && (
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Company</dt>
                          <dd className="font-medium text-navy-900 dark:text-white">{form.company}</dd>
                        </div>
                      )}
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Service</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.service}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Date</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.preferred_date}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Time</dt>
                        <dd className="font-medium text-navy-900 dark:text-white">{form.preferred_time}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                {step > 0 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                ) : (
                  <div />
                )}
                {step < 2 ? (
                  <Button variant="gold" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="gold" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Submitting...' : 'Confirm Booking'}
                    {!loading && <CheckCircle2 className="ml-2 h-4 w-4" />}
                  </Button>
                )}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
