export interface Project {
  title: string; description: string; techStack: string[];
  githubUrl?: string; demoUrl?: string; featured?: boolean; category: string;
}
export interface Skill { name: string; level: number; icon?: string; }
export interface SkillCategory { name: string; icon: string; skills: Skill[]; }
export interface Experience {
  role: string; organization: string; period: string; description: string;
  type: 'leadership' | 'volunteer' | 'work'; bullets?: string[];
}
export interface Certification { title: string; issuer: string; date: string; credentialUrl?: string; icon?: string; }
export interface NavLink { label: string; href: string; }
