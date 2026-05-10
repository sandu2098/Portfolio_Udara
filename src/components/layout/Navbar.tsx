'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '@/lib/data';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(id); }, { threshold: 0.4 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'backdrop-blur-xl border-b py-3' : 'py-5')}
        style={{ background: scrolled ? 'var(--bg-primary)' : 'transparent', borderColor: scrolled ? 'var(--border)' : 'transparent', opacity: scrolled ? 0.97 : 1 }}
      >
        <nav className="section-container flex items-center justify-between">
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
              {personalInfo.firstName}<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button key={link.href} onClick={() => handleNavClick(link.href)}
                  className={cn('px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200', isActive ? 'font-semibold' : 'opacity-70 hover:opacity-100')}
                  style={{ color: isActive ? 'var(--accent)' : 'var(--text-primary)', background: isActive ? 'var(--accent-soft)' : 'transparent' }}>
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobileOpen ? 'x' : 'menu'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden border-b" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ color: activeSection === link.href.replace('#','') ? 'var(--accent)' : 'var(--text-primary)', background: activeSection === link.href.replace('#','') ? 'var(--accent-soft)' : 'transparent' }}>
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
