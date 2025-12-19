
import React from 'react';
import { Briefcase, Heart, Lightbulb, Users } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-tight text-center">
            <span className="text-silver-gradient">Karir Pembangunan</span> <br/>
            <span className="text-amber-gradient font-serif italic">Berkelanjutan</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed text-center">
            Bergabunglah dengan Transformers Plus Indonesia dan berkontribusi dalam proyek transformasi sosial berkeadilan.
          </p>
        </section>

        <section className="mb-32">
          <h2 className="text-xs font-bold tracking-[0.4em] text-neutral-800 uppercase text-center mb-16">Budaya Kerja Berkelanjutan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kolaborasi", icon: <Users />, desc: "Bekerja dalam tim multidisipliner yang saling mendukung." },
              { title: "Pembelajaran", icon: <Lightbulb />, desc: "Kesempatan belajar dari praktisi senior dan ahli internasional." },
              { title: "Dampak Bermakna", icon: <Heart />, desc: "Setiap tugas memberikan dampak nyata bagi masyarakat." }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 group">
                <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-neutral-600 group-hover:text-amber-400 group-hover:border-amber-900 transition-all">{v.icon}</div>
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-silver-gradient transition-all">{v.title}</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-900/40 border border-white/5 rounded-3xl p-12 text-center group">
          <div className="flex justify-center mb-8 text-neutral-800 group-hover:text-amber-500 transition-all"><Briefcase size={48} /></div>
          <h2 className="text-3xl font-medium text-white mb-6">Lowongan Konsultan Pembangunan</h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Saat ini kami sedang mencari talenta profesional yang berkomitmen pada pembangunan berkelanjutan dan keadilan sosial.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full font-bold tracking-widest text-[11px] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">Lihat Posisi Terbuka</button>
          <p className="mt-8 text-[10px] text-neutral-700 font-bold uppercase tracking-widest">Atau kirimkan CV & Portfolio Anda ke career@transformersplus.id</p>
        </section>
      </div>
    </div>
  );
};

export default Careers;
