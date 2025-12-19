import React from 'react';
import { Twitter, Linkedin, Instagram, MapPin, ChevronRight, User, Mail, Phone } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const Logo = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="white" />
      <path 
        d="M25 20 C35 40 45 50 75 80" 
        stroke="black" 
        strokeWidth="18" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M75 20 C65 40 55 50 25 80" 
        stroke="black" 
        strokeWidth="18" 
        strokeLinecap="round" 
        fill="none" 
      />
    </svg>
  );

  const contactPersons = [
    {
      sector: "Corporate & Private Sector",
      name: "Jati Prastyanto",
      phone: "+62 812 2743 1148",
      email: "prast@transformersplus.id"
    },
    {
      sector: "Community, SMEs & NGOs",
      name: "Nugie L Kristian",
      phone: "+62 856 4321 9999",
      email: "nugie@transformersplus.id"
    },
    {
      sector: "International Partnership",
      name: "W Roni",
      phone: "+62 877 7727 2357",
      email: "roni@transformersplus.id"
    }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <button 
              onClick={() => navigate('home')} 
              className="flex items-center gap-3 mb-6 group text-left"
            >
              <div className="w-10 h-10 shrink-0">
                <Logo />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tighter text-white uppercase group-hover:text-neutral-400 transition-colors">
                  transformers plus
                </span>
                <span className="text-[9px] font-medium tracking-widest text-neutral-500 uppercase mt-1">
                  Cope · Adapt · Grow
                </span>
              </div>
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-light max-w-xs">
              Fasilitator pembangunan berkelanjutan yang mendukung transformasi sosial berkeadilan di seluruh Indonesia melalui standar tata kelola internasional.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate(item.toLowerCase())} 
                    className="text-neutral-500 text-xs hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Persons Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">Key Contacts</h4>
            <div className="grid grid-cols-1 gap-y-6">
              {contactPersons.map((person, idx) => (
                <div key={idx} className="group">
                  <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2 group-hover:text-neutral-400 transition-colors">
                    {person.sector}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-300 text-xs font-medium">
                      <User size={12} className="text-amber-600" />
                      {person.name}
                    </div>
                    <div className="flex flex-col text-[11px] text-neutral-500 ml-5 font-light">
                      <span className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors">
                        <Phone size={10} /> {person.phone}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors">
                        <Mail size={10} /> {person.email}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Column */}
          <div className="md:col-span-12 lg:col-span-3">
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">Headquarters</h4>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-neutral-500" />
              </div>
              <div className="text-[12px] text-neutral-400 leading-relaxed font-light">
                <p className="font-medium text-neutral-200 mb-1">Transformers Plus Indonesia</p>
                Ayodya Permai A1, Sidorejo,<br />
                Kota Salatiga, Central Java,<br />
                Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="text-[10px] text-neutral-600 uppercase tracking-[0.2em] font-medium">
              © 2019-2024 Transformers Plus Indonesia
            </span>
            <div className="hidden md:block h-3 w-[1px] bg-neutral-800"></div>
            <div className="flex gap-4">
              <a href="#" className="text-[10px] text-neutral-700 hover:text-neutral-400 transition-colors uppercase tracking-widest">Privacy Policy</a>
              <a href="#" className="text-[10px] text-neutral-700 hover:text-neutral-400 transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>
          <div className="text-[10px] text-neutral-800 font-bold tracking-[0.4em] uppercase select-none">
            Cope · Adapt · Grow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;