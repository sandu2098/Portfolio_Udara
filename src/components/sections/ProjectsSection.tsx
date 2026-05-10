'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Clock } from 'lucide-react';
import { projects } from '@/lib/data';
import type { Project } from '@/types';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeUpVariant } from '@/lib/utils';

const ALL = 'All';

export function ProjectsSection() {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);
  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" alt>
      <SectionHeader label="Projects" title="What I've Built" subtitle="A selection of personal and academic projects spanning web development and cybersecurity." />
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: active === cat ? 'var(--accent)' : 'var(--accent-soft)', color: active === cat ? '#fff' : 'var(--accent)', border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}` }}>
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div key={project.title} variants={fadeUpVariant} layout exit={{ opacity: 0, scale: 0.95 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isUpcoming = project.category === 'Upcoming';
  return (
    <Card className="h-full flex flex-col group">
      <div className="flex items-start justify-between mb-3">
        <div>
          {project.featured && !isUpcoming && (
            <span className="inline-flex items-center gap-1 text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
          {isUpcoming && (
            <span className="inline-flex items-center gap-1 text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
              <Clock size={10} /> Coming Soon
            </span>
          )}
          <h3 className="font-display font-bold text-xl" style={{ color: isUpcoming ? 'var(--text-secondary)' : 'var(--text-primary)' }}>{project.title}</h3>
        </div>
        <span className="tag-pill shrink-0 ml-3">{project.category}</span>
      </div>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
      {!isUpcoming && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono border"
              style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>{tech}</span>
          ))}
        </div>
      )}
      <div className="flex gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        {!isUpcoming && project.githubUrl && (
          <Button variant="outline" href={project.githubUrl} external className="text-xs py-2 px-4">
            <Github size={14} /> Code
          </Button>
        )}
        {isUpcoming && (
          <Button variant="ghost" href={personalInfo_github} external className="text-xs py-2 px-4">
            <Github size={14} /> Visit GitHub
          </Button>
        )}
        {!isUpcoming && project.demoUrl && project.demoUrl !== '#' && (
          <Button variant="primary" href={project.demoUrl} external className="text-xs py-2 px-4">
            <ExternalLink size={14} /> Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
}

const personalInfo_github = 'https://github.com/sandu2098';
