'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader label="Skills" title="What I Work With" subtitle="Technologies and tools I use to build things — from frontend to security." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillCategories.map((cat) => (
          <motion.div key={cat.name} variants={fadeUpVariant}>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{cat.name}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-14">
        <p className="text-center text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>Also familiar with</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['PHP','JavaScript','TypeScript','Python','C++','Docker','Postman','Kali Linux','Wireshark','OWASP'].map((tech) => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,var(--accent),#818cf8)' }}
          initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22,1,0.36,1], delay: 0.1 }} />
      </div>
    </div>
  );
}
