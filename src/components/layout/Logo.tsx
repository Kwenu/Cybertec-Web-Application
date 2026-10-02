import { Link } from 'react-router-dom';
import { media } from '../../data/media';

interface LogoProps {
  tone?: 'light' | 'dark';
}

export function Logo({ tone = 'dark' }: LogoProps) {
  const onDark = tone === 'light';
  return (
    <Link
      to="/"
      className={`flex shrink-0 items-center ${
      onDark ? 'rounded-sm bg-white px-3 py-2' : ''}`
      }
      aria-label="Cybertec Enterprises (Pvt) Ltd — home">
      
      <img
        src={media.logo}
        alt="Cybertec Enterprises (Pvt) Ltd"
        className={onDark ? 'h-12 w-auto' : 'h-11 w-auto sm:h-12'} />
      
    </Link>);

}