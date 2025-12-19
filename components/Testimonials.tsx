
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { 
    title: "Indigenous Livelihood", 
    desc: "Pengembangan mata pencaharian komunitas adat dengan pendekatan FPIC dan penguatan ekonomi lokal.",
    category: "Community Development"
  },
  { 
    title: "CSR Evaluation", 
    desc: "Evaluasi CSR berbasis OECD dan SROI untuk memastikan efektivitas dan dampak program perusahaan.",
    category: "Audit & ESG"
  },
  { 
    title: "BUMDES & Cooperative", 
    desc: "Penguatan kapasitas kelembagaan BUMDES dan koperasi untuk keberlanjutan ekonomi lokal.",
    category: "Economic Growth"
  },
  { 
    title: "Social Mapping Projects", 
    desc: "Pemetaan sosial untuk mendukung pengambilan keputusan berbasis data dalam proyek pembangunan.",
    category: "Research"
  },
  { 
    title: "Agrotourism", 
    desc: "Pengembangan agrowisata berkelanjutan melalui kolaborasi lintas sektor di tingkat desa.",
    category: "Sustainability"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/5 relative overflow-hidden bg-[#050505] z-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">Portofolio</span>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Proyek Pembangunan Berkelanjutan</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest block mb-4">{p.category}</span>
              <h3 className="text-white text-lg font-medium mb-4 group-hover:text-white transition-colors">{p.title}</h3>
              <p className="text-neutral-400 text-sm mb-8 leading-relaxed font-light">{p.desc}</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 group-hover:text-white transition-colors uppercase tracking-widest">
              Learn More <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
