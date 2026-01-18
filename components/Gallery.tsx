import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { X, MagnifyingGlassPlus } from 'phosphor-react';
import { GalleryItem } from '../types';

const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', imageUrl: '/photo_2025-12-08_16-27-50.jpg', title: 'UI Concept: Dashboard' },
  { id: '2', imageUrl: '/Screenshot 2026-01-18 194731.png', title: 'Mobile App Login' },
  { id: '3', imageUrl: '/Screenshot 2026-01-18 194824.png', title: 'Landing Page Hero' },
  { id: '4', imageUrl: 'https://picsum.photos/600/600?random=4', title: '3D Asset Render' },
];

export const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = GALLERY_ITEMS.find(item => item.id === selectedId);

  return (
    <Section id="gallery">
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Design Gallery</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/5"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <MagnifyingGlassPlus size={32} className="text-accent" />
              <span className="text-white font-medium text-sm">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-3xl bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-accent/20 text-white transition-colors"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title} 
                className="w-full h-auto max-h-[80vh] object-contain bg-black" 
              />
              <div className="p-6 bg-[#05060f]">
                <h3 className="text-xl font-bold text-accent">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};
