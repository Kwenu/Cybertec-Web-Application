interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className = '',
  children
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      
      <h2
        className={`font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] sm:text-4xl ${
        isDark ? 'text-white' : 'text-navy-900'}`
        }>
        
        {title}
      </h2>
      {subtitle &&
      <p
        className={`mt-4 text-base leading-relaxed sm:text-lg ${
        isDark ? 'text-brand-100/80' : 'text-navy-900/65'}`
        }>
        
          {subtitle}
        </p>
      }
      {children}
    </div>);

}