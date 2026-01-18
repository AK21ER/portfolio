import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'phosphor-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Spline */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/thresholddarkambientuicopy-rx865K4Bt54scXGOL1bPb2RQ/' 
          
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full pointer-events-auto"
          title="Spline 3D Model"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 mt-60 z-10 flex flex-col items-center justify-center pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center px-4"
        >
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white text-glow tracking-tight">
            Rekik Girma <span className="text-accent opacity-80 font-light">(AK21ER)</span>
          </h1> */}
          <p className="text-lg md:text-2xl  text-gray-300 max-w-2xl mx-auto leading-relaxed glass-card p-6  rounded-2xl border-none bg-black/30 backdrop-blur-sm">
            “I’m a passionate full-stack developer building high-impact digital experiences.”
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={32} className="text-accent opacity-70" />
        </motion.div>
      </motion.div>

      {/* Particle Effects (Simulated with simple CSS divs for lightweight approach) */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-20" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse opacity-10 duration-700" />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse opacity-30 duration-1000" />
      </div>
    </section>
  );
};
