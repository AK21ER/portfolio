// ...existing code...
import React from 'react';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/AK21ER',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .71 2.64.5 3.28.38.1-.3.39-.5.71-.62-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.16-1.45 3.11-1.15 3.11-1.15.61 1.52.23 2.64.11 2.92.73.78 1.16 1.78 1.16 3 0 4.28-2.61 5.22-5.1 5.5.4.35.76 1.05.76 2.12 0 1.54-.01 2.78-.01 3.16 0 .29.2.64.77.53C19.05 20.88 22.25 16.7 22.25 11.76 22.25 5.48 17.27.5 12 .5z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rekik-girma',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98A1.99 1.99 0 0 0 6.96 5.48c0-1.1-.88-1.98-1.98-1.98zM3.5 8.98h3v11.02h-3V8.98zM9 8.98h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v6.46h-3V15.3c0-1.4-.02-3.2-1.96-3.2-1.96 0-2.26 1.53-2.26 3.1v4.82H9V8.98z" />
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'rekik21girma@gmail.com',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
      </svg>
    )
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-[#05060f]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rekik. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4">
            {['Home', 'About', 'Projects', 'Contact', 'Chat'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-accent hover:text-glow transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...