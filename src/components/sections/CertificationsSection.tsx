'use client';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/Section';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

export function CertificationsSection() {
  return (
    <Section id="certifications" alt>
      <SectionHeader label="Certifications" title="Credentials & Learning" subtitle="Continuous learning through structured courses and industry certifications." />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <motion.div key={cert.title} variants={fadeUpVariant}>
            <div className="rounded-2xl p-5 border flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor='var(--accent)'; el.style.boxShadow='0 20px 60px -10px var(--glow)'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor='var(--border)'; el.style.boxShadow='none'; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover:scale-110" style={{ background: 'var(--accent-soft)' }}>
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-sm leading-tight mb-1" style={{ color: 'var(--text-primary)' }}>{cert.title}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{cert.date}</span>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs transition-opacity opacity-0 group-hover:opacity-100"
                      style={{ color: 'var(--accent)' }}>
                      <ExternalLink size={11} /> View
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border" style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }}>
          <Award size={18} style={{ color: 'var(--accent)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            {certifications.length} Certifications Earned · More in Progress
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
