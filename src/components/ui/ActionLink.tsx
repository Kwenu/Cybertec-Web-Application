import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';

interface ActionLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-display text-sm font-semibold tracking-wide transition-[background-color,border-color,color] duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary: 'px-6 py-3 bg-brand-500 text-white hover:bg-brand-600',
  secondary:
  'px-6 py-3 border border-navy-800/25 bg-white text-navy-900 hover:border-navy-800/60',
  ghost: 'py-1 text-brand-600 hover:text-brand-700',
  onDark:
  'px-6 py-3 border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10'
};

export function ActionLink({
  to,
  children,
  variant = 'primary',
  withArrow = false,
  className = ''
}: ActionLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
    </Link>);

}