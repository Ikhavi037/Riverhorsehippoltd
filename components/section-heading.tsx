import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn(center && 'mx-auto max-w-2xl text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
            light ? 'bg-white/10 text-gold-400' : 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'heading-font mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          light ? 'text-white' : 'text-navy-900 dark:text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            {eyebrow}
          </span>
        )}
        <h1 className="heading-font mt-5 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
