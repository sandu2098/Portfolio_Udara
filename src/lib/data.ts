import type { Project, SkillCategory, Experience, Certification, NavLink } from '@/types';

export const personalInfo = {
  name: 'Udara Rathnayake',
  firstName: 'Udara',
  lastName: 'Rathnayake',
  title: 'Software Engineering Undergraduate',
  subtitle: 'Full-Stack Developer | Cybersecurity Enthusiast',
  bio: `Passionate Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka, 
  driven by a curiosity for building robust web applications and exploring the depths of cybersecurity. 
  I thrive at the intersection of elegant code and real-world impact — whether architecting 
  full-stack systems with Laravel or diving into network security challenges.`,
  email: 'srathnayake237@gmail.com',
  github: 'https://github.com/sandu2098',
  linkedin: 'https://www.linkedin.com/in/udara-rathnayake-26ba66277/',
  location: 'Sri Lanka',
  university: 'Sabaragamuwa University of Sri Lanka',
  degree: 'B.Sc. (Hons) in Software Engineering',
  graduationYear: '2027',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'React', level: 65 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Laravel (PHP)', level: 85 },
      { name: 'Node.js', level: 55 },
      { name: 'REST APIs', level: 75 },
      { name: 'Express.js', level: 50 },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 55 },
      { name: 'Database Design', level: 70 },
    ],
  },
  {
    name: 'Tools & Security',
    icon: '🛡️',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 65 },
      { name: 'Linux', level: 60 },
      { name: 'Network Security', level: 55 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Sport Management System',
    description:
      'A web-based application developed to streamline university sports activities and enhance student engagement. The system allows students to register, explore sports teams, share achievements through a community platform, and purchase sports merchandise via an integrated online store. It includes role-based access for admins to manage teams, users, and store items efficiently.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'JavaScript'],
    githubUrl: 'https://github.com/kAveeShA161/Sport_Management_System_WebProject',
    demoUrl: '#',
    featured: true,
    category: 'Full-Stack Web App',
  },
  {
    title: 'Smart Urban Parking System',
    description:
      'A web-based solution that allows users to view real-time parking availability, register vehicles, and make online payments through an easy-to-use interface. Follows a hybrid approach combining digital features with on-site parking attendants for better flexibility. Includes an admin panel for managing users, vehicles, parking slots, and transactions, along with email notifications for confirmations and alerts.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
    githubUrl: 'https://github.com/viyash-24/MiniProject-SP',
    demoUrl: '#',
    featured: true,
    category: 'MERN Stack',
  },
  {
    title: 'Coming Soon — Next Project',
    description:
      'A new project is currently in the works. Check back soon or visit my GitHub to see what I\'m building next.',
    techStack: ['TBD'],
    githubUrl: 'https://github.com/sandu2098',
    demoUrl: '#',
    featured: false,
    category: 'Upcoming',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Captain — University Tennis Team',
    organization: 'Sabaragamuwa University of Sri Lanka',
    period: 'Present',
    type: 'leadership',
    description:
      'Currently serving as the Captain of the SUSL University Tennis Team, leading the team in inter-university competitions and training sessions.',
    bullets: [
      'Leading and motivating the university tennis team in tournaments and practice sessions',
      'Coordinating training schedules and team strategy for inter-university competitions',
      'Representing the university in national-level university sports events',
    ],
  },
  {
    role: 'Secretary Team Lead',
    organization: 'IndustriX 2026 — IEEE Student Branch, SUSL',
    period: 'April 2026',
    type: 'leadership',
    description:
      'IndustriX 2026 is a flagship session organised by the IEEE Student Branch of SUSL. Led the secretary team responsible for all official documentation and communication.',
    bullets: [
      'Led the secretary team handling proposals, captions, and official emails',
      'Coordinated internal communications across organising committees',
      'Ensured all documentation was completed accurately and on time',
    ],
  },
  {
    role: 'Committee Member',
    organization: 'WIE Affinity Group — SUSL (2025/2026)',
    period: '2025 – 2026',
    type: 'leadership',
    description:
      'Representing my batch as a committee member of the Women in Engineering (WIE) Affinity Group at SUSL for the 2025/2026 term.',
    bullets: [
      'Serving as the batch representative for WIE Affinity Group',
      'Contributing to initiatives promoting diversity in engineering',
      'Participating in WIE events and awareness programmes',
    ],
  },
  {
    role: 'Student Volunteer',
    organization: 'International Conference on Advanced Research in Computing (ICARC) 2025',
    period: 'February 18–19, 2025',
    type: 'volunteer',
    description:
      'Volunteered at ICARC 2025, one of the premier computing research conferences in Sri Lanka.',
    bullets: [
      'Assigned as a volunteer for the Inauguration Ceremony',
      'Assisted with delegate management and event logistics',
      'Supported smooth execution of conference sessions',
    ],
  },
  {
    role: 'Technical Volunteer',
    organization: 'International Conference of Management Researchers (ICMR) 2024',
    period: 'November 28–29, 2024',
    type: 'volunteer',
    description:
      'Handled the technical background operations for conference rooms during ICMR 2024.',
    bullets: [
      'Managed video conferencing setup and operation for conference rooms',
      'Provided real-time technical support during research presentations',
      'Ensured seamless A/V and connectivity throughout the event',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'GitHub Copilot in Action',
    issuer: 'KodeKloud',
    date: 'September 20, 2025',
    credentialUrl: 'https://www.linkedin.com/posts/udara-rathnayake-26ba66277_1-activity-7389020140006359041-vP2s',
    icon: '🤖',
  },
  {
    title: 'Amazon API Gateway for Serverless Applications',
    issuer: 'Amazon Web Services',
    date: 'March 14, 2026',
    credentialUrl: 'https://drive.google.com/file/d/1al70gBJHGozfgPSWNgi3_4A13X-5rnJE/view',
    icon: '☁️',
  },
  {
    title: 'Foundation of Project Management',
    issuer: 'University of Moratuwa',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/udara-rathnayake-26ba66277_foundation-of-project-management-activity-7291158492092985344-6--U',
    icon: '📋',
  },
  {
    title: 'Project Scope and Schedule Management',
    issuer: 'University of Moratuwa',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/udara-rathnayake-26ba66277_project-scope-and-schedule-management-activity-7293317968883552257-AJYP',
    icon: '📅',
  },
  {
    title: 'Agile Project Management in ICT Projects',
    issuer: 'University of Moratuwa',
    date: '2025',
    credentialUrl: 'https://www.linkedin.com/posts/udara-rathnayake-26ba66277_agile-project-management-activity-7329787447372840960-F5PZ',
    icon: '🔄',
  },
];

