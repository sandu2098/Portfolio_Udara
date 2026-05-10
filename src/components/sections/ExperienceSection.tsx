'use client';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Trophy } from 'lucide-react';
import { experiences } from '@/lib/data';
import type { Experience } from '@/types';
import { Section, SectionHeader } from '@/components/ui/Section';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

const typeConfig: Record<Experience['type'], { icon: typeof Briefcase; color: string; bg: string }> = {
  leadership: { icon: Briefcase, color: 'var(--accent)', bg: 'var(--accent-soft)' },
  volunteer:  { icon: Heart,     color: '#f472b6',       bg: 'rgba(244,114,182,0.1)' },
  work:       { icon: Trophy,    color: '#34d399',       bg: 'rgba(52,211,153,0.1)' },
};

// Special icon override for Tennis Captain
const roleIcons: Record<string, { emoji: string; color: string; bg: string }> = {
  'Captain — University Tennis Team': { emoji: '🎾', color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  'Secretary Team Lead': { emoji: '📋', color: 'var(--accent)', bg: 'var(--accent-soft)' },
  'Committee Member': { emoji: '🌸', color: '#f472b6', bg: 'rgba(244,114,182,0.1)' },
  'Student Volunteer': { emoji: '🤝', color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  'Technical Volunteer': { emoji: '💻', color: 'var(--accent)', bg: 'var(--accent-soft)' },
};

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader label="Experience" title="Leadership & Involvement" subtitle="Beyond the keyboard — activities that shaped who I am as a collaborator and leader." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: 'var(--border)' }} />
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const override = roleIcons[exp.role];
            const fallback = typeConfig[exp.type];
            const color = override?.color ?? fallback.color;
            const bg = override?.bg ?? fallback.bg;
            const emoji = override?.emoji;
            return (
              <motion.div key={`${exp.role}-${idx}`} variants={fadeUpVariant} className="md:pl-16 relative">
                <div className="absolute left-0 top-5 w-12 h-12 rounded-xl items-center justify-center hidden md:flex text-xl"
                  style={{ background: bg }}>{emoji ?? '💼'}</div>
                <div className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = color; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border)'; }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <p className="text-sm font-semibold" style={{ color }}>{exp.organization}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full self-start shrink-0" style={{ background: bg, color }}>{exp.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                  {exp.bullets && (
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
