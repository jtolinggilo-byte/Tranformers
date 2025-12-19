
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Globe from './Globe';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-neutral-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <Globe />

      <div className="container mx-auto px-6 text-center z-10 animate-fade-in-up">
        <div className="inline-flex gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-10 py-1.5 px-4 shadow-lg backdrop-blur-sm items-center">
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase">
            Cope · Adapt · Grow
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
          <span className="text-silver-gradient">Fasilitator Pembangunan</span> <br />
          <span className="text-amber-gradient font-serif italic pr-2">Berkelanjutan</span> <span className="text-silver-gradient">Indonesia</span>
        </h1>

        <p className="text-sm md:text-lg text-neutral-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Transformers Plus Indonesia mendukung transformasi sosial berkeadilan melalui tata kelola sosial, CSR, dan pendekatan standar internasional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#contact" className="group relative px-10 py-4 bg-white text-black rounded-full font-bold tracking-widest text-[11px] uppercase overflow-hidden transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="relative z-10 flex items-center gap-2">
              Mulai Kolaborasi
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#about" className="px-10 py-4 text-neutral-300 border border-neutral-800 rounded-full font-bold tracking-widest text-[11px] uppercase hover:bg-neutral-900 hover:text-white transition-all bg-black/30 backdrop-blur-sm">
            Tentang Kami
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600 z-20">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
