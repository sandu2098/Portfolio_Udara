import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
            {personalInfo.firstName}<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </div>
        <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
          Built with <Heart size={12} className="inline" style={{ color: 'var(--accent)' }} /> by {personalInfo.name} · © {year}
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
