'use client';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
interface SectionProps { id: string; children: ReactNode; className?: string; alt?: boolean; }
export function Section({ id, children, className, alt }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id={id} ref={ref} className={cn('py-24 lg:py-32 relative overflow-hidden', className)} style={{ background: alt ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }} className="section-container">
        {children}
      </motion.div>
    </section>
  );
}
interface SectionHeaderProps { label?: string; title: string; subtitle?: string; }
export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const words = title.split(' ');
  return (
    <div className="mb-14">
      {label && <p className="text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>{label}</p>}
      <h2 className="section-title">
        {words.map((word, i) => i === words.length - 1
          ? <span key={i} className="gradient-text">{word}</span>
          : <span key={i}>{word} </span>)}
      </h2>
      <div className="accent-line mt-4 mb-4" />
      {subtitle && <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>}
    </div>
  );
}
