interface SectionProps {
  children: React.ReactNode;
  tone?: 'white' | 'light' | 'navy' | 'deep';
  id?: string;
  className?: string;
  size?: 'default' | 'compact';
}

const tones: Record<string, string> = {
  white: 'bg-white',
  light: 'bg-navy-900/[0.03]',
  navy: 'bg-navy-900 text-white',
  deep: 'bg-navy-950 text-white'
};

export function Section({
  children,
  tone = 'white',
  id,
  className = '',
  size = 'default'
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${
      size === 'compact' ? 'py-14' : 'py-20 lg:py-28'} ${
      className}`}>
      
      <div className="mx-auto max-w-content px-6">{children}</div>
    </section>);

}