
import React from 'react';
import Hero from '../Hero';
import TrustedBy from '../TrustedBy';
import { ArrowRight, CheckCircle2, Globe, Users, Shield } from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustedBy />

      {/* Intro Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                <span className="text-silver-gradient">Konsultan</span> <span className="text-amber-gradient italic font-serif">pembangunan sosial</span> <span className="text-silver-gradient">multidisipliner.</span>
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                Transformers Plus Indonesia memfasilitasi perencanaan, implementasi, dan evaluasi program pembangunan berbasis konteks lokal dan praktik terbaik internasional.
              </p>
              <button 
                onClick={() => navigate('about')}
                className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase group hover:text-amber-400 transition-colors"
              >
                Pelajari Lebih Lanjut <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-950"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield size={64} className="text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="text-silver-gradient">Transformasi Sosial Berkeadilan</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Berkomitmen memperkuat sinergi komunitas, pemerintah, swasta, akademia, dan media untuk pembangunan berkelanjutan melalui visi transformasi sosial berkeadilan.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Visi", icon: <Globe />, text: "Menjadi katalisator transformasi sosial berkeadilan di seluruh penjuru Indonesia." },
            { title: "Misi", icon: <Users />, text: "Memperkuat kapasitas kelembagaan lokal dan sinergi lintas sektor." },
            { title: "Nilai", icon: <CheckCircle2 />, text: "Integritas, Inklusivitas, dan Keberlanjutan dalam setiap langkah." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-amber-400 transition-colors">{item.icon}</div>
              <h3 className="text-xl font-medium text-white mb-4 group-hover:text-silver-gradient transition-all">{item.title}</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            <span className="text-silver-gradient">Kolaborasi Pembangunan</span>
          </h2>
          <p className="text-neutral-400 mb-12 text-lg font-light leading-relaxed">
            Membuka peluang kolaborasi lintas sektor untuk merancang dan mengimplementasikan inisiatif pembangunan berkelanjutan yang berdampak, inklusif, dan terukur.
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="px-10 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Mulai Diskusi
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
