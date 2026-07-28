'use client';

import { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export function CareerApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', cover_letter: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `Job Application: ${jobTitle}`,
        message: form.cover_letter,
      });
      if (error) throw error;
      toast.success('Application submitted! We will be in touch soon.');
      setForm({ name: '', email: '', phone: '', cover_letter: '' });
    } catch {
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
      <h3 className="heading-font text-xl font-semibold text-navy-900 dark:text-white">Apply for this position</h3>
      <p className="mt-1 text-sm text-muted-foreground">Fill out the form below and we'll get back to you.</p>
      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="mt-1.5" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@email.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+254 786 658 137" className="mt-1.5" />
          </div>
        </div>
        <div>
          <Label htmlFor="cover_letter">Cover Letter / Message</Label>
          <Textarea id="cover_letter" rows={5} value={form.cover_letter} onChange={(e) => setForm({ ...form, cover_letter: e.target.value })} placeholder="Tell us why you're a great fit..." className="mt-1.5 resize-none" />
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-sm text-muted-foreground">
          <Upload className="h-5 w-5 shrink-0 text-gold-500" />
          <span>Email your CV to careers@riverhorsehippoltd.com or attach it in your message above.</span>
        </div>
        <Button type="submit" variant="gold" className="w-full" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Application'}
          {!loading && <Send className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}
