import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GithubLogo, LinkedinLogo, TwitterLogo, TelegramLogo, PaperPlaneRight, EnvelopeSimple } from 'phosphor-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent (simulation)!');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socials = [
    { icon: <GithubLogo size={32} />, href: 'https://github.com/AK21ER', label: 'GitHub' },
    { icon: <LinkedinLogo size={32} />, href: 'https://www.linkedin.com/in/rekik-girma', label: 'LinkedIn' },
    { icon: <TwitterLogo size={32} />, href: '#', label: 'Twitter' },
    { icon: <TelegramLogo size={32} />, href: 'https://t.me/ak21er', label: 'Telegram' },
  ];

  return (
    <Section id="contact">
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-5xl">
        {/* Socials / Info Side */}
        <div className="w-full md:w-1/3 flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
            <p className="text-gray-400">Have a project in mind? Reach out.</p>
          </div>

          <div className="flex flex-col gap-6">
            {socials.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10, color: '#D8ECF8' }}
                className="flex items-center gap-4 text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors group-hover:shadow-[0_0_15px_rgba(216,236,248,0.2)]">
                  {social.icon}
                </div>
                <span className="text-lg font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
             <div className="flex items-center gap-3 text-gray-400">
               <EnvelopeSimple size={24} className="text-accent" />
               <span>rekik21girma@gmail.com</span>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-2/3">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-10 rounded-2xl space-y-6"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
              <motion.input
                 whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <motion.textarea
                 whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent text-background font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(216,236,248,0.4)] hover:shadow-[0_0_30px_rgba(216,236,248,0.6)] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <PaperPlaneRight weight="bold" />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};
