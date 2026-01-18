import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './ui/Section';
import { Testimonial } from '../types';
import { Quotes } from 'phosphor-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    company: 'TechFlow',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    content: 'Milad transformed our vague requirements into a seamless, high-performance web application. The attention to detail in the UI is unmatched.'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CTO',
    company: 'StartUp Inc',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    content: 'An exceptional developer who understands both the backend complexities and the frontend nuances. The NLP integration was flawless.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    company: 'Creative Studio',
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    content: 'Working with Milad was a breeze. He perfectly captured the cinematic aesthetic we were aiming for.'
  }
];

export const Testimonials: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div className="py-24 overflow-hidden bg-background relative" id="testimonials" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-white">Client Stories</h2>
      </div>
      
      <motion.div 
        style={{ x }}
        className="flex gap-8 px-6 w-max"
      >
        {TESTIMONIALS.map((t) => (
          <div 
            key={t.id}
            className="w-[350px] md:w-[450px] p-8 rounded-2xl glass-card border-l-4 border-l-accent flex flex-col gap-6 relative group hover:bg-white/5 transition-colors"
          >
            <Quotes size={48} weight="duotone" className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-colors" />
            
            <p className="text-gray-300 italic leading-relaxed z-10">"{t.content}"</p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border border-white/20" />
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-sm text-accent/80">{t.role} {t.company && `at ${t.company}`}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
