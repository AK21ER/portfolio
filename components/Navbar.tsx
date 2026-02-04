import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, GithubLogo, Users, BookBookmark } from 'phosphor-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [githubStats, setGithubStats] = useState({ followers: 0, public_repos: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/AK21ER')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          followers: data.followers,
          public_repos: data.public_repos
        });
      })
      .catch(err => console.error('Failed to fetch GitHub stats', err));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#05060f]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-accent text-glow shrink-0 z-50">
          Rekik Girma
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-400 hover:text-accent transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full box-shadow-glow" />
            </a>
          ))}
        </div>

        {/* GitHub Stats - Right Aligned */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/AK21ER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xs font-medium text-gray-400 hover:text-accent transition-all group"
          >
            <div className="flex items-center gap-1.5">
              <BookBookmark size={16} />
              <span>{githubStats.public_repos} Repos</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Users size={16} />
              <span>{githubStats.followers} Followers</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <GithubLogo size={22} className="text-white group-hover:text-accent transition-colors" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#05060f]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-accent hover:text-glow transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/AK21ER"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-accent hover:text-glow transition-all"
              >
                <GithubLogo size={24} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
