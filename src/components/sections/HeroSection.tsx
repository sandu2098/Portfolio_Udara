'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { fadeUpVariant, staggerContainer } from '@/lib/utils';
import Image from 'next/image';

export function HeroSection() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="glow-orb w-[500px] h-[500px] -top-40 -right-40 opacity-30" style={{ background: 'var(--accent)' }} />
      <div className="glow-orb w-[400px] h-[400px] -bottom-20 -left-40 opacity-20" style={{ background: '#818cf8', animationDelay: '-3s' }} />
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={fadeUpVariant}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold border"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                <Sparkles size={12} /> Available for opportunities
              </span>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.05]">
                Hi, I&apos;m <span className="gradient-text block">{personalInfo.firstName}</span>
              </h1>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <div className="flex items-start gap-3">
                <Terminal size={18} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                <p className="text-lg lg:text-xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {personalInfo.title}<span style={{ color: 'var(--accent)' }}> | </span>{personalInfo.subtitle}
                </p>
              </div>
            </motion.div>
            <motion.p variants={fadeUpVariant} className="text-base leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              Building robust web applications and exploring the frontiers of cybersecurity.
              Based in Sri Lanka 🇱🇰, studying at <span style={{ color: 'var(--accent)' }}>SUSL</span>.
              Also proud Captain of the University Tennis Team 🎾
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-3 pt-2">
              <Button onClick={() => scrollTo('#projects')}>View Projects <ArrowDown size={14} /></Button>
              <Button variant="outline" onClick={() => scrollTo('#contact')}>Contact Me <Mail size={14} /></Button>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(var(--accent) 0deg,transparent 120deg,#818cf8 240deg,transparent 360deg)', padding: '2px', borderRadius: '50%', margin: '-4px' }} />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg,var(--bg-card),var(--bg-secondary))', border: '2px solid var(--border)' }}>
                <div className="text-center">
                  <Image src="/profile.jpg" alt="Udara Rathnayake" fill className="object-cover" />
                </div>
              </div>
              <motion.div animate={{ y: [-4,4,-4] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-2xl text-xs font-semibold shadow-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                🎓 SUSL, Sri Lanka
              </motion.div>
              <motion.div animate={{ y: [4,-4,4] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 px-4 py-2 rounded-2xl text-xs font-semibold shadow-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                🎾 Tennis Captain
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Scroll</span>
          <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} style={{ color: 'var(--accent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
