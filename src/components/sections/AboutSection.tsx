'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Shield, Users, MapPin, Trophy } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

const highlights = [
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. Software Engineering', sub: 'Sabaragamuwa University of Sri Lanka' },
  { icon: Code, label: 'Focus', value: 'Full-Stack Development', sub: 'Laravel · React · Node.js' },
  { icon: Shield, label: 'Interest', value: 'Cybersecurity', sub: 'Network Security · Ethical Hacking' },
  { icon: Users, label: 'Community', value: 'IEEE & WIE Member', sub: 'Event Organizer · Volunteer' },
  { icon: Trophy, label: 'Sports', value: 'Tennis Captain', sub: 'University Tennis Team, SUSL' },
];

export function AboutSection() {
  return (
    <Section id="about" alt>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <SectionHeader label="About Me" title="Who I Am" subtitle="A brief look at my background, passions, and what drives me." />
          <motion.p variants={fadeUpVariant} className="leading-relaxed mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m a passionate Software Engineering undergraduate at{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Sabaragamuwa University of Sri Lanka</strong>,
            specialising in full-stack web development and cybersecurity. I enjoy building systems that are
            not only functional and performant, but also thoughtfully designed.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="leading-relaxed mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
            My journey in tech started with a deep curiosity about how things work under the hood —
            from HTTP request lifecycles to SQL query optimisation. That curiosity has evolved into
            a drive to build impactful software and understand how to defend it.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="leading-relaxed mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
            Beyond code, I&apos;m an active IEEE & WIE member, event coordinator, volunteer, and currently
            serving as <strong style={{ color: 'var(--accent)' }}>Captain of the SUSL University Tennis Team 🎾</strong> —
            believing that great engineers are also great leaders and collaborators.
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <span className="inline-flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              {personalInfo.location} · Graduating {personalInfo.graduationYear}
            </span>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, label, value, sub }) => (
            <motion.div key={label} variants={fadeUpVariant} className={label === 'Sports' ? 'col-span-2' : ''}>
              <Card className="h-full group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: 'var(--accent-soft)' }}>
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{label}</p>
                <p className="font-display font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{value}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{sub}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
