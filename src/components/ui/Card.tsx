import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
interface CardProps { children: ReactNode; className?: string; hoverable?: boolean; }
export function Card({ children, className, hoverable = true }: CardProps) {
  return <div className={cn('card-base', hoverable && 'card-hover', className)}>{children}</div>;
}
