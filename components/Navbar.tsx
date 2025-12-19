
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  navigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPath }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Services', path: 'services' },
    { label: 'Projects', path: 'projects' },
    { label: 'Blog', path: 'blog' },
    { label: 'Careers', path: 'careers' },
    { label: 'Contact', path: 'contact' },
  ];

  const Logo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="white" />
      <g transform="translate(-8, 0) rotate(-2, 50, 50)">
        <path 
          d="M25 20 C35 40 45 50 75 80" 
          stroke="black" 
          strokeWidth="19" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M75 20 C65 40 55 50 25 80" 
          stroke="black" 
          strokeWidth="19" 
          strokeLinecap="round" 
          fill="none" 
        />
      </g>
    </svg>
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/90 backdrop-blur-xl">
      <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
        <button onClick={() => navigate('home')} className="flex items-center gap-4 group text-left">
          <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
            <Logo />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-sm font-bold tracking-tighter text-white uppercase group-hover:text-neutral-400 transition-colors">
              transformers plus indonesia
            </span>
            <span className="text-[10px] font-medium tracking-[0.1em] text-neutral-500 lowercase">
              cope, adapt, and grow.
            </span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-neutral-400">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`hover:text-white transition-colors pb-1 border-b-2 ${currentPath === link.path ? 'text-white border-white' : 'border-transparent'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('contact')}
            className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest hover:bg-neutral-200 transition-all uppercase"
          >
            Kolaborasi
          </button>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-neutral-950 border-b border-white/5 py-8 px-6 animate-fade-in">
          <div className="flex flex-col gap-6 text-[12px] font-bold tracking-widest uppercase text-neutral-400">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => { navigate(link.path); setIsOpen(false); }}
                className={`text-left hover:text-white transition-colors ${currentPath === link.path ? 'text-white' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { navigate('contact'); setIsOpen(false); }}
              className="bg-white text-black px-6 py-3 rounded-full text-center"
            >
              Kolaborasi
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
