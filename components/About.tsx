
import React from 'react';
import { TrendingUp, Target, Globe as GlobeIcon, Users, Linkedin, Twitter, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 mb-16 uppercase tracking-[0.3em]">
          <span className="text-neutral-300">About Us</span>
          <span className="text-neutral-700">/</span>
          <span>Role & Identity</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
              Fasilitator <span className="text-neutral-600">transformasi sosial</span> multidisipliner.
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-base font-light">
              <p>
                Didirikan pada 1 Oktober 2019, Transformers Plus Indonesia menghimpun para profesional dengan pengalaman nasional dan internasional dalam pembangunan berkelanjutan.
              </p>
              <p>
                Sebagai fasilitator transformasi sosial, kami menggabungkan pendekatan teknis, sosial, dan tata kelola untuk menciptakan dampak berkelanjutan berbasis konteks lokal dan praktik terbaik internasional.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
              <div>
                <div className="text-3xl font-light text-white mb-2">2019</div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Berdiri Sejak</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-2">SDGs</div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Fokus Global</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neutral-600/10 to-neutral-900/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] bg-neutral-900/80 h-[450px] border-white/5 border rounded-2xl p-10 relative shadow-2xl backdrop-blur-md justify-between">
              <div className="z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Tata Kelola Sosial</h3>
                <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-light">
                  Budaya kerja kami berlandaskan kolaborasi, integritas, dan keberlanjutan untuk solusi pembangunan yang kontekstual.
                </p>
              </div>
              <div className="flex w-full h-32 mt-8 px-2 gap-3 items-end">
                <div className="w-full bg-neutral-800/50 h-[40%] rounded-t-sm"></div>
                <div className="bg-neutral-800/50 w-full h-[60%] rounded-t-sm"></div>
                <div className="w-full bg-neutral-800/50 h-[30%] rounded-t-sm"></div>
                <div className="w-full bg-neutral-800/50 h-[80%] rounded-t-sm"></div>
                <div className="w-full bg-white h-[95%] rounded-t-sm opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FeatureCard 
            icon={<Target size={24} />} 
            title="Visi Kami" 
            desc="Mewujudkan transformasi sosial berkeadilan dan memperkuat sinergi komunitas melalui pembangunan berkelanjutan." 
          />
          <FeatureCard 
            icon={<GlobeIcon size={24} />} 
            title="Standar Global" 
            desc="Setiap inisiatif dirancang menggunakan standar ESG, SDGs, FPIC, dan praktik terbaik tata kelola internasional." 
          />
          <FeatureCard 
            icon={<Heart size={24} />} 
            title="Konteks Lokal" 
            desc="Menghargai kearifan lokal dalam setiap perencanaan, implementasi, dan evaluasi program pembangunan." 
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
    <div className="text-white mb-6 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
      {icon}
    </div>
    <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
    <p className="text-neutral-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

export default About;
