
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Collaboration: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative bg-neutral-950 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-neutral-950 to-neutral-950"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Kolaborasi Pembangunan</h2>
        <p className="text-neutral-400 mb-12 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Membuka peluang kolaborasi lintas sektor untuk merancang dan mengimplementasikan inisiatif pembangunan berkelanjutan yang berdampak, inklusif, dan terukur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold text-[11px] tracking-widest uppercase rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            Hubungi Kami Sekarang
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-neutral-700 text-white font-bold text-[11px] tracking-widest uppercase rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
            <Mail size={16} />
            Kirim Penawaran
          </button>
        </div>

        <div className="mt-12 text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
          Kami melayani kolaborasi nasional maupun internasional
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
