import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
interface ButtonProps {
  children: ReactNode; variant?: 'primary' | 'outline' | 'ghost';
  href?: string; onClick?: () => void; className?: string;
  external?: boolean; disabled?: boolean; type?: 'button' | 'submit' | 'reset';
}
export function Button({ children, variant = 'primary', href, onClick, className, external, disabled, type = 'button' }: ButtonProps) {
  const classes = cn(
    variant === 'primary' && 'btn-primary',
    variant === 'outline' && 'btn-outline',
    variant === 'ghost' && 'px-4 py-2 rounded-xl text-sm font-medium transition-all inline-flex items-center gap-2 opacity-70 hover:opacity-100',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none', className
  );
  if (href) return <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{children}</button>;
}
