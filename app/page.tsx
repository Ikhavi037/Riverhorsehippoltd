import { OrganizationJsonLd } from '@/components/json-ld';
import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { ServicesSection } from '@/components/home/services-section';
import { IndustriesSection } from '@/components/home/industries-section';
import { WhyChooseUsSection } from '@/components/home/why-choose-us-section';
import { ProcessSection } from '@/components/home/process-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { PartnersSection } from '@/components/home/partners-section';
import { BlogPreviewSection } from '@/components/home/blog-preview-section';
import { FaqSection } from '@/components/home/faq-section';
import { ContactSection } from '@/components/home/contact-section';

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <BlogPreviewSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
