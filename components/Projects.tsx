import { useEffect, useState, FC, TouchEvent, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { ArrowUpRight, GithubLogo, X, Link, CaretLeft, CaretRight, Play, Pause } from 'phosphor-react';
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
    isGithub: false,
    detailedDescription: `
      ELDCP (Ethiopian Language Data Collection Platform) is a full-scale data collection and validation system built to support the development of Ethiopian-language-focused AI models. Developed by a team of five, the platform is designed for universities and research institutions that require high-quality, verified voice datasets. The platform supports structured project management (e.g., Amharic datasets), where contributors receive unique links containing prompts and submit voice recordings directly through the system. Each submission passes through a two-stage validation pipeline: automatic audio validation to ensure clarity and quality, followed by a human-based review process. Human validation is handled by multiple validators. If two validators disagree, the submission is automatically escalated to a tie-breaker to ensure fairness and data accuracy. Once validated, the system generates invoices for both contributors and validators and allows administrators to export structured datasets (audio files, prompts, and metadata) for AI model training. ELDCP features role-based access control with four distinct roles: Super Admin, Project Manager, Contributor, and Validator. The application exposes over 65 RESTful endpoints and is built using Next.js, Prisma, and PostgreSQL, secured with JWT authentication. The platform is fully containerized with Docker, optimized behind Nginx, and integrated with GitHub Actions for CI/CD. It demonstrates strong backend architecture, scalable workflow design, and real-world problem solving in AI data engineering and system automation.
    `,
    category: 'Fullstack'
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
    isGithub: false,
    detailedDescription: `
      Streamify is a robust real-time communication infrastructure designed to bridge the physical gap between remote students by replicating a campus collaborative environment in a digital space. The platform facilitates instant peer-to-peer interaction through virtual study rooms and persistent video channels, allowing students to "drop in" and collaborate as if they were in the same physical location. At its core, it leverages WebRTC for low-latency video and high-fidelity audio streaming, ensuring seamless communication even under constrained network conditions. The state management is handled by Zustand, providing a lightweight and transient client-state experience that keeps the UI responsive during active multi-user calls. Synchronization across clients is achieved via MongoDB Change Streams and socket-based events, enabling instant chat updates and real-time online status indicators without resource-intensive polling. Built with Vite and Node.js, Streamify demonstrates a mastery of real-time data handling, efficient websocket implementation, and modern browser APIs like native screen sharing, making it a comprehensive tool for remote academic collaboration.
    `,
    category: 'Fullstack'
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
    isGithub: false,
    detailedDescription: `
      This E-Commerce Platform is a production-grade digital storefront solution architected for high scalability, security, and a seamless user experience. Going beyond simple CRUD operations, it offers a complete ecosystem with a bespoke admin dashboard built in React for real-time sales visualization and inventory management. The system integrates secure, server-side Stripe payment processing, utilizing robust webhook handling to ensure asynchronous payment confirmation and accurate inventory locking to prevent overselling. On the database layer, MongoDB indexing strategies are aggressively optimized to handle sub-millisecond product searches and complex category filtering, ensuring performance remains snappy as the catalog grows. The application implements complex state management for the shopping cart and user sessions, ensuring persistence and reliability. With features like secure authentication, order history tracking, and an intuitive responsive design, this platform represents a full-stack engineering approach to modern e-commerce challenges, focusing on reliability and conversion optimization.
    `,
    category: 'Fullstack'
  },
  {
    id: 'medicine-guider',
    title: 'Medicine Guider',
    description:
      'Medicine Guide is an AI-powered web application designed to help people understand medicines safely and clearly. Users can upload a photo of a medicine or provide its name to receive an easy-to-understand explanation, usage guidance, and safety information, making medical knowledge more accessible to everyone.',
    techStack: ['Next.js', 'Django', 'Sql', 'Open-ai'],
    images: ['/Screenshot 2026-01-18 194852.png', '/Screenshot 2026-01-18 194731.png'],
    demoUrl: 'https://medicine-guider.vercel.app/',
    repoUrl: 'https://github.com/AK21ER/Medicine-guider',
    isGithub: false,
    detailedDescription: `
      Medicine Guider is an innovative health-tech application designed to democratize medical information by leveraging advanced AI to interpret complex medical data for the average user. Sitting at the intersection of healthcare and artificial intelligence, the platform integrates OpenAI's GPT-4 Vision API to analyze uploaded images of prescriptions or pill bottles, identifying medication types and extracting dosage instructions with high accuracy. The backend, built with Django, implements a rigorous prompt engineering layer that enforces safety protocols, adding localized disclaimers and verifying output against safety guidelines to prevent misinformation. Designed with accessibility in mind, the UI features high-contrast elements and simplified language outputs to assist elderly or visually impaired users. This project highlights the practical application of Large Multimodal Models (LMMs) in solving real-world accessibility problems, wrapping state-of-the-art AI in a secure, compliant, and user-centric web interface.
    `,
    category: 'Fullstack'
  },
  {
    id: 'gebiguabe',
    title: '6 Kilo Gibi Gubae',
    description:
      'A university-focused spiritual and social community platform featuring a real-time feed, multilingual support (English and Amharic), an AI-powered spiritual guide chatbot, and a comprehensive admin panel for content management.',
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'React Router',
      'i18next',
      'Lucide'
    ],
    images: ['https://picsum.photos/seed/gebiguabe/800/600'],
    demoUrl: '',
    repoUrl: 'https://github.com/AK21ER/gebiguabe-front',
    isGithub: true,
    detailedDescription: `
      6 Kilo Gibi Gubae is a specialized, community-driven social platform tailored to the unique spiritual and social fabric of university campus life. It serves as a digital hub for students, featuring a real-time social feed, event management, and community discussions. Built with performance in mind using Vite and React, the frontend delivers a highly responsive experience with optimized bundle sizes. A key technical feature is its deep localization support via i18next, enabling seamless runtime switching between English and Amharic, complete with cultural context adaptations. The platform also integrates an advanced RAG (Retrieval-Augmented Generation) chatbot that acts as an AI spiritual guide, referencing a curated vector database of spiritual texts to provide accurate, context-aware answers to student inquiries. This project demonstrates the integration of modern frontend framework capabilities with specific cultural localization requirements and AI-driven content retrieval systems.
    `,
    category: 'Frontend'
  },
  {
    id: 'telegram-job-bot',
    title: 'Telegram Job Bot',
    description:
      'An automated Telegram bot designed to fetch and notify users about the latest job opportunities based on their preferences and skills.',
    techStack: ['Node.js', 'Telegraf', 'API integration'],
    images: ['https://picsum.photos/seed/jobbot/800/600'],
    demoUrl: '',
    repoUrl: 'https://github.com/AK21ER/telegram_job_bot',
    isGithub: true,
    detailedDescription: `
      The Telegram Job Bot is a high-concurrency automation tool acting as a personalized career assistant for thousands of users. It employs a hybrid architecture, utilizing webhooks for instant user interactivity and cron-job based polling for scraping external job boards. The core of the system is a lightweight but efficient Node.js matching engine that filters job opportunities against user-defined skill tags and preferences, ensuring that alerts are highly relevant and low-noise. To handle the scale of broadcasting to massive channels and individual users, the bot implements robust token bucket rate-limiting algorithms, strictly adhering to Telegram's API limits while maintaining high throughput. This project showcases backend system design focused on automation, third-party API integration, and efficient data processing at scale, solving the problem of information overload in job hunting.
    `,
    category: 'Telegram Bot'
  },
  {
    id: 'payment-logic',
    title: 'Payment Processing Logic',
    description: 'A robust backend system for handling complex payment workflows, order processing, and transaction lifecycle management.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Serverless'],
    images: ['https://picsum.photos/seed/payment/800/600'],
    demoUrl: '',
    repoUrl: 'https://github.com/AK21ER/payment-order-processing-backend-logic',
    isGithub: true,
    detailedDescription: `
      This project focuses on the core backend architecture for a scalable payment and order processing system. Built using a serverless approach with Next.js and Prisma, it handles the intricate logic of transaction states, idempotent payment processing, and secure order lifecycle management. 
      The system is designed to be highly resilient, implementing sophisticated error handling and retry mechanisms to ensure data consistency across multiple services. It demonstrates proficiency in architecting financial logic, managing relational database schemas with Prisma, and building type-safe APIs in a modern TypeScript environment.
    `,
    category: 'Backend'
  },
  {
    id: 'share-it',
    title: 'Share It',
    description: 'A modern, dynamic social sharing platform designed for seamless content distribution and community interaction.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Vercel'],
    images: ['https://picsum.photos/seed/shareit/800/600'],
    demoUrl: '',
    repoUrl: 'https://github.com/AK21ER/share_it',
    isGithub: true,
    detailedDescription: `
      Share It is a full-stack social application bootstrapped with the latest Next.js features. It provides a platform for users to share content, engage with their community, and enjoy a high-performance, responsive user experience. 
      The project leverages Prisma for efficient database management and type-safety, while Tailwind CSS ensures a sleek, modern aesthetic throughout the application. 
      Key technical highlights include the use of App Router for optimized routing, server actions for efficient data mutations, and a highly responsive design that works flawlessly across all devices. This repository demonstrates expertise in the modern Next.js ecosystem and building interactive, user-focused web applications.
    `,
    category: 'Fullstack'
  },
  {
    id: 'django-ecommerce',
    title: 'Django E-commerce',
    description: 'A full-featured e-commerce marketplace with category-based browsing, star ratings, and advanced user order management.',
    techStack: ['Python', 'Django', 'React', 'Knox', 'Tailwind CSS', 'PostgreSQL'],
    images: ['https://picsum.photos/seed/market/800/600'],
    demoUrl: 'https://django-ecommerce-woad.vercel.app/',
    repoUrl: 'https://github.com/AK21ER/Django-ecommerce',
    isGithub: true,
    detailedDescription: `
      This Django-based E-commerce project is a complete marketplace solution that bridges the gap between a powerful Python backend and a dynamic React frontend. It features a robust storefront where users can browse products by category, view detailed descriptions, and interact with a star-based rating and review system.
      The application implements secure Knox token authentication for user registration and login, ensuring a high level of security for user data and transactions. 
      From a technical standpoint, it showcases the integration of Django REST Framework (DRF) with a modern frontend architecture, managing everything from user profiles and shopping carts to full order history tracking. The UI is built with Tailwind CSS for a clean, responsive, and professional look.
    `,
    category: 'Fullstack'
  }
];

export const Projects: FC = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [rotation, setRotation] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // For image slider
  const [isOrbitPaused, setIsOrbitPaused] = useState(false); // For orbit axis
  const [radius, setRadius] = useState(350);

  // Touch handling state
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Handle responsive radius
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 140 : 500); // 350 -> 500 for massive orbit
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation effect with requestAnimationFrame for smoothness
  useEffect(() => {
    if (isHovering || selectedProject || isOrbitPaused) return;

    let animationFrameId: number;
    const animate = () => {
      setRotation((prev) => prev + 0.005); // Faster speed as requested
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, selectedProject, touchStart, isOrbitPaused]);

  // Image slider auto-play
  useEffect(() => {
    if (!selectedProject || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === (selectedProject.images.length || 1) - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedProject, isPaused]);

  const allProjects = [...FEATURED_PROJECTS, ...githubProjects];
  const filteredProjects = allProjects.filter(project => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Frontend') return project.category === 'Frontend' || project.category === 'Fullstack';
    if (activeCategory === 'Backend') return project.category === 'Backend' || project.category === 'Fullstack';
    return project.category === activeCategory;
  });

  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Telegram Bot'];

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (selectedProject) {
        // Modal Navigation
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedProject(null);
      } else {
        // Carousel Navigation
        const step = (Math.PI * 2) / filteredProjects.length;
        if (e.key === 'ArrowRight') setRotation(prev => prev - step); // Snap Next
        if (e.key === 'ArrowLeft') setRotation(prev => prev + step);  // Snap Prev
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Lock Body Scroll when Modal is Open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Touch Handlers for Swipe Rotation
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsHovering(true); // Pause auto-rotation
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // Sensitivity factor
    setRotation(prev => prev - diff * 0.0005);
    // setTouchStart(currentTouch); // Optional: continuous update vs delta
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsHovering(false); // Resume auto-rotation
  };

  const nextImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };



  // Helper for 3D positioning
  const getProjectStyle = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2 + rotation;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius; // Depth
    const scale = (z + radius * 2) / (radius * 3); // Map z to scale (back items smaller)
    const opacity = (z + radius * 1.5) / (radius * 2.5); // Back items closer to transparent
    const active = z > 0; // Front items

    return {
      x,
      scale: Math.max(0.5, Math.min(1.2, scale)),
      opacity: Math.max(0.3, Math.min(1, opacity)),
      zIndex: Math.floor(z),
      filter: `blur(${Math.max(0, (radius - z) / 100)}px)` // Blur back items
    };
  };

  const rotateNext = () => {
    const step = (Math.PI * 2) / filteredProjects.length;
    setRotation(prev => prev - step);
  };

  const rotatePrev = () => {
    const step = (Math.PI * 2) / filteredProjects.length;
    setRotation(prev => prev + step);
  };

  return (
    <>
      <Section id="projects" className="bg-gradient-to-b from-[#05060f] to-[#0a0c1a] !px-4 md:!px-8">
        <div className="mb-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-600">
              Selected Works
            </span>
          </h2>
          <p className="text-gray-400">Innovation through code.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-0 relative z-10 px-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setRotation(0); // Reset rotation on category change
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-accent text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="relative h-[800px] -mt-28 flex items-center justify-center perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Orbit Center - Adjusted Positioning */}
          <div className="absolute top-[32%] left-1/2 md:left-[35%] w-0 h-0 transition-all duration-500 ease-in-out">
            {filteredProjects.map((project, index) => {
              const style = getProjectStyle(index, filteredProjects.length);

              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.filter
                  }}
                  transition={{ duration: 0 }} // Instant update for smooth rotation
                  className="absolute top-1/2 left-1/2 w-[280px] md:w-[380px] -translate-x-1/2 -translate-y-1/2 cursor-pointer touch-none"
                  style={{
                    transformOrigin: 'center center'
                  }}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                >
                  {/* Redesigned Card */}
                  <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="bg-[#0a0c1a]/90 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl hover:border-accent/40 hover:shadow-accent/10 transition-all duration-300 p-3 flex flex-col gap-3 group"
                  >
                    <div className="w-full h-48 overflow-hidden rounded-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={project.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="px-2 pb-2">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity delay-100">
                        {project.techStack.map(tech => (
                          <span key={tech} className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-accent bg-accent/5 rounded-md border border-accent/10">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        className="mt-4 w-full py-2.5 bg-accent/10 hover:bg-accent text-accent hover:text-black text-[10px] font-bold uppercase tracking-widest rounded-xl border border-accent/20 transition-all duration-500 flex items-center justify-center gap-2 group/btn shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                      >
                        View Details
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Manual Orbit Controls - High Z-Index for clickability and more visibility */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 z-[1001] pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                rotatePrev();
              }}
              className="p-4 bg-accent/20 hover:bg-accent border-2 border-accent/40 rounded-full text-white hover:text-black transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-accent/40 pointer-events-auto backdrop-blur-md"
              aria-label="Rotate Left"
            >
              <CaretLeft size={36} weight="bold" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                rotateNext();
              }}
              className="p-4 bg-accent/20 hover:bg-accent border-2 border-accent/40 rounded-full text-white hover:text-black transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-accent/40 pointer-events-auto backdrop-blur-md"
              aria-label="Rotate Right"
            >
              <CaretRight size={36} weight="bold" />
            </button>
          </div>

          {/* Mobile Fallback / Hint / Orbit Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-4 pointer-events-none">
            <button
              onClick={() => setIsOrbitPaused(!isOrbitPaused)}
              className="p-7 bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full text-accent transition-all active:scale-95 hover:border-accent/50 pointer-events-auto backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              aria-label={isOrbitPaused ? "Play Rotation" : "Pause Rotation"}
            >
              {isOrbitPaused ? <Play size={24} weight="fill" /> : <Pause size={24} weight="fill" />}
            </button>
            <div className="text-gray-500 text-xs md:hidden">
              Swipe to rotate
            </div>
          </div>
        </div>
      </Section>

      {/* Modal Moved Outside Section to Avoid Transform/Z-Index Issues */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 md:bg-black/90 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0c1a] w-full max-w-5xl rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col relative shadow-2xl my-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div
                className="flex-shrink-0 mb-4 md:mb-6 relative group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-32 md:h-60 bg-black/20 rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex]}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                      >
                        <CaretLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                      >
                        <CaretRight size={24} />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 mb-4">
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0 mb-6">
                <p className="text-gray-300 whitespace-pre-line leading-relaxed text-base md:text-lg">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              <div className="flex-shrink-0 flex gap-4 pt-4 border-t border-white/10">
                {selectedProject.demoUrl ? (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors text-center"
                  >
                    View Demo
                  </a>
                ) : (
                  <span className="flex-1 md:flex-none px-6 py-3 bg-gray-800 text-gray-500 rounded-lg text-center cursor-not-allowed">
                    Private Project
                  </span>
                )}
                {selectedProject.repoUrl ? (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                  >
                    <GithubLogo size={20} />
                    Source Code
                  </a>
                ) : null}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 font-medium transition-colors"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
