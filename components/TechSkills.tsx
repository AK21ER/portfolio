import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import {
  Code,
  Database,
  Terminal,
  GitBranch,
  Wrench,
} from 'phosphor-react';

interface Skill {
  name: string;
  level: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: [
      { name: 'React', level: 'Advanced', description: 'Component-based UI development with hooks and context' },
      { name: 'Next.js', level: 'Intermediate', description: 'Full-stack React framework with SSR and API routes' },
      { name: 'JavaScript', level: 'Advanced', description: 'Versatile programming language for web development' },
      { name: 'TypeScript', level: 'Intermediate', description: 'Type-safe JavaScript development' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first CSS framework' },
      { name: 'Framer Motion', level: 'Intermediate', description: 'Animation library for React' },
      { name: 'Redux', level: 'Intermediate', description: 'State management for complex React applications' },
    ]
  },
  {
    title: 'Backend',
    icon: <Database size={24} />,
    skills: [
      { name: 'Node.js', level: 'Advanced', description: 'Server-side JavaScript runtime' },
      { name: 'NestJS', level: 'Advanced', description: 'Progressive Node.js framework' },
      { name: 'Express', level: 'Advanced', description: 'Minimalist web framework for Node.js' },
      { name: 'Django', level: 'Intermediate', description: 'High-level Python web framework' },
      { name: 'PostgreSQL', level: 'Advanced', description: 'Advanced open source relational database' },
      { name: 'MongoDB', level: 'Advanced', description: 'NoSQL database for modern applications' },
      { name: 'Redis', level: 'Advanced', description: 'In-memory data structure store, used as a database, cache, and message broker' }
    ]
  },
  {
    title: 'DevOps',
    icon: <Terminal size={24} />,
    skills: [
      { name: 'Docker', level: 'Advanced', description: 'Containerization platform' },
      { name: 'Kubernetes', level: 'Beginner', description: 'Container orchestration system' },
      { name: 'AWS', level: 'Intermediate', description: 'Cloud computing platform' },
      { name: 'CI/CD', level: 'Intermediate', description: 'Continuous integration and deployment' },
    ]
  },
  {
    title: 'Version Control',
    icon: <GitBranch size={24} />,
    skills: [
      { name: 'Git', level: 'Advanced', description: 'Distributed version control system' },
      { name: 'GitHub', level: 'Advanced', description: 'Web-based Git repository hosting service' },
      { name: 'GitLab', level: 'Intermediate', description: 'DevOps platform' }
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench size={24} />,
    skills: [
      { name: 'VS Code', level: 'Advanced', description: 'Code editor with extensive extensions' },
      { name: 'Postman', level: 'Advanced', description: 'API development and testing tool' },
      { name: 'Figma', level: 'Intermediate', description: 'Collaborative interface design tool' },
      { name: 'Vite', level: 'Advanced', description: 'Fast build tool for modern web projects' }
    ]
  }
];

export const TechSkills: FC = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Beginner': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <Section id="tech-skills">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent mb-4">
            Tech Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/40 hover:shadow-accent/5 transition-all duration-300 flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-white text-base">{skill.name}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 border border-white/10 ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
