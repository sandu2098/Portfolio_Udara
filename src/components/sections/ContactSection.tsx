'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, MapPin, MessageSquare } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

const contactLinks = [
  { icon: Mail,     label: 'Email',    value: personalInfo.email,                          href: `mailto:${personalInfo.email}`,  color: '#f472b6', bg: 'rgba(244,114,182,0.1)' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/sandu2098',                      href: personalInfo.github,             color: 'var(--accent)', bg: 'var(--accent-soft)' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/udara-rathnayake-26ba66277', href: personalInfo.linkedin,           color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  { icon: MapPin,   label: 'Location', value: personalInfo.location,                       href: '#',                             color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
];

interface FormState { name: string; email: string; message: string; }

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = { background: 'var(--bg-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border)' };
  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'var(--accent)');
  const blurStyle  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'var(--border)');

  return (
    <Section id="contact">
      <SectionHeader label="Contact" title="Get In Touch" subtitle="Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open." />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
            <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeUpVariant}
              className="flex items-center gap-4 p-4 rounded-2xl border group transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor=color; el.style.boxShadow=`0 10px 30px -5px ${color}30`; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--border)'; el.style.boxShadow='none'; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ background: bg }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</p>
              </div>
            </motion.a>
          ))}
          <motion.div variants={fadeUpVariant} className="mt-2 p-4 rounded-2xl border" style={{ background: 'rgba(52,211,153,0.06)', borderColor: 'rgba(52,211,153,0.3)' }}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: '#34d399' }}>Currently available</strong> for internships, part-time roles, and freelance projects.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="rounded-2xl border p-7" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} style={{ color: 'var(--accent)' }} />
              <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>
            </div>
            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={52} className="mb-4" style={{ color: '#34d399' }} />
                <h4 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[{ id:'name', label:'Your Name', type:'text', placeholder:'Jane Doe' },
                  { id:'email', label:'Email Address', type:'email', placeholder:'jane@example.com' }].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>{label}</label>
                    <input id={id} name={id} type={type} required value={form[id as keyof FormState]} onChange={handleChange}
                      placeholder={placeholder} onFocus={focusStyle} onBlur={blurStyle}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border" style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Message</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Hi, I'd love to connect about..." onFocus={focusStyle} onBlur={blurStyle}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none border" style={inputStyle} />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center py-3" disabled={loading}>
                  {loading ? (<><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</>) : (<><Send size={15} />Send Message</>)}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
