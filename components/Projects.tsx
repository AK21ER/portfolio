import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { ArrowUpRight, GithubLogo, X, Link } from 'phosphor-react';
import { Project } from '../types';

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'eldcp',
    title: 'ELDCP – Ethiopian Language Data Collection Platform',
    description:
      'ELDCP is a university-focused platform designed to collect, validate, and manage high-quality Ethiopian language voice datasets for training AI models. It streamlines contributor submissions, multi-phase validations, and automated payments in a scalable and secure system.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'Docker',
      'Nginx',
      'GitHub Actions'
    ],
    images: ['/photo_2025-12-08_16-27-50 (3).jpg'],
    demoUrl: '',
    repoUrl: '',
    isGithub: false
  },
  {
    id: 'streamify',
    title: 'Streamify',
    description:
      'Streamify was built to help campus students communicate, collaborate, and share knowledge even when they are not physically present in the same location or state. The platform enables real-time video calls, live chat, and video-based discussions, making it easier for students to exchange academic information and collaborate remotely.',
    techStack: [
      'Vite',
      'JavaScript',
      'Tailwind',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'TanStack Query'
    ],
    images: [
      '/Screenshot 2026-01-18 143905.png'
    ],
    demoUrl: 'https://stremify-project-rlai.vercel.app/',
    repoUrl: 'https://github.com/AK21ER/streamify',
    isGithub: false
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'A comprehensive shopping solution with cart management, secure Stripe payments, and an interactive admin dashboard.',
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Zustand',
      'Tailwind CSS',
      'Stripe API'
    ],
    images: ['/Screenshot 2026-01-18 144439.png'],
    demoUrl: 'https://eccomerce-project-g7sl.vercel.app/',
    repoUrl: 'https://github.com/AK21ER/eccomerce-project',
    isGithub: false
  },
  {
    id: 'medicine-guider',
    title: 'Medicine Guider',
    description:
     'Medicine Guide is an AI-powered web application designed to help people understand medicines safely and clearly. Users can upload a photo of a medicine or provide its name to receive an easy-to-understand explanation, usage guidance, and safety information, making medical knowledge more accessible to everyone.'   
     ,
      techStack: ['Next.js', 'Django', 'Sql', 'Open-ai' ],
    images: ['/Screenshot 2026-01-18 194852.png','/Screenshot 2026-01-18 194731.png' ],
    demoUrl: 'https://medicine-guider.vercel.app/',
    repoUrl: 'https://github.com/AK21ER/Medicine-guider',
    isGithub: false
  }
];

export const Projects: React.FC = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const fetchGithub = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://api.github.com/users/AK21ER/repos?sort=updated&per_page=3'
  //       );
  //       if (!response.ok) return;

  //       const data = await response.json();
  //       const mapped: Project[] = data.map((repo: any) => ({
  //         id: repo.id.toString(),
  //         title: repo.name,
  //         description: repo.description || 'No description available',
  //         techStack: [repo.language || 'Code'],
  //         images: [`https://picsum.photos/seed/${repo.name}/800/600`],
  //         repoUrl: repo.html_url,
  //         isGithub: true
  //       }));

  //       setGithubProjects(mapped);
  //     } catch (error) {
  //       console.error('Failed to fetch GitHub repos', error);
  //     }
  //   };

  //   fetchGithub();
  // }, []);

  const allProjects = [...FEATURED_PROJECTS, ...githubProjects];

  return (
    <Section id="projects" className="bg-gradient-to-b from-[#05060f] to-[#0a0c1a]">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-600">
            Selected Works
          </span>
        </h2>
        <p className="text-gray-400">Innovation through code.</p>
      </div>

      <div className="space-y-32">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 md:gap-16 items-center`}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-white/5 shadow-2xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full transform transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs uppercase tracking-wider text-accent border border-accent/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent rounded-lg"
              >
                View Details
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-900 max-w-4xl w-full rounded-xl p-8"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <X size={20} />
              </button>

              <img
                src={selectedProject.images[currentImageIndex]}
                alt=""
                className="w-full h-64 object-contain mb-6"
              />

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex gap-4">
                {selectedProject.demoUrl ?   (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-accent text-black rounded-lg"
                  >
                    View Demo
                  </a>
                ) : <p>private project</p>}
                {selectedProject.repoUrl ? (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-gray-800 rounded-lg flex items-center gap-2"
                  >
                    <GithubLogo size={18} />
                    Source Code
                  </a>
                ): null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
