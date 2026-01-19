import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Code, Database, Globe, Cpu, Layout, Terminal } from 'phosphor-react';

const skills = [
  { name: 'NestJS', icon: <Database size={24} /> },
  { name: 'Express', icon: <Terminal size={24} /> },
  { name: 'Node.js', icon: <Cpu size={24} /> },
  { name: 'React', icon: <Code size={24} /> },  
  { name: 'Vite', icon: <Code size={24} /> },
  { name: 'Next.js', icon: <Globe size={24} /> },
  { name: 'Docker', icon: <Layout size={24} /> },
  { name: 'Django', icon: <Database size={24} /> },
  { name: 'Tailwind', icon: <Layout size={24} /> },
  { name: 'Shadcn UI', icon: <Layout size={24} /> },
  { name: 'React Native', icon: <Code size={24} /> },
];

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse shadow-[0_0_50px_rgba(216,236,248,0.2)]" />
            <div className="absolute inset-4 rounded-full border border-accent/40" />
            
            {/* Image Container */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900 border-4 border-accent/10">
              <img 
                src="/profile.jpg" 
                alt="Rekik" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
              />
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
            Behind the Code
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm Rekik (AK21ER), a developer with 4 years of experience crafting robust digital solutions.
            Currently, I'm diving deep into <span className="text-accent font-medium">Natural Language Processing</span> systems
            for Machine Learning and AI research at AAU, pushing the boundaries of how machines understand human interaction.
          </p>

          <div className="pt-4">
            <a
              href="https://flowcv.com/resume/mkadmfttn4wn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300 text-accent font-medium"
            >
              View Resume
            </a>
          </div>

          <div className="pt-4">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Tech</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-accent/10 transition-colors border border-white/5"
                >
                  <span className="text-accent">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
