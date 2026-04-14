import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md';
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#941c1e] focus-visible:ring-offset-2',
    variant === 'primary'
      ? 'bg-[#941c1e] text-white shadow-[0_8px_18px_rgba(148,28,30,0.25)] hover:-translate-y-0.5 hover:bg-[#7f1719]'
      : 'border border-[#941c1e]/60 bg-transparent text-[#941c1e] hover:bg-[#941c1e]/8',
    size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-6 py-3 text-sm sm:text-base',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
