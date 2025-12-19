
import React from 'react';
import { 
  BarChart, 
  Users, 
  Settings, 
  Search, 
  UserCheck, 
  Sun, 
  FileText, 
  GraduationCap, 
  Briefcase,
  Check
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceItems = [
    { icon: <Briefcase size={20} />, title: "Project Management", desc: "Perancangan, perencanaan, dan implementasi program pembangunan yang terukur." },
    { icon: <Settings size={20} />, title: "Social Governance", desc: "Tata kelola sosial berbasis standar ESS World Bank, SPS ADB, dan IRMA." },
    { icon: <BarChart size={20} />, title: "Social Impact Assessment", desc: "Penilaian dampak sosial untuk memastikan manfaat positif bagi masyarakat terdampak." },
    { icon: <Search size={20} />, title: "Social Mapping", desc: "Analisis mendalam mengenai struktur sosial dan stakeholder sebagai dasar strategis." },
    { icon: <UserCheck size={20} />, title: "CSR & ESG", desc: "Desain, implementasi, dan evaluasi CSR berbasis OECD, SROI, dan prinsip ESG." },
    { icon: <Sun size={20} />, title: "Youth Empowerment", desc: "Pemberdayaan pemuda untuk ketahanan iklim dan tantangan pembangunan masa depan." },
    { icon: <FileText size={20} />, title: "RIPPM", desc: "Perumusan RIPPM sesuai Kepmen ESDM No.1824 untuk pemberdayaan masyarakat." },
    { icon: <GraduationCap size={20} />, title: "Training & Workshop", desc: "Pelatihan peningkatan kapasitas dalam tata kelola sosial dan CSR." }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/5 pb-10">
          <div>
            <span className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">Service Expertise</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Layanan Profesional</h2>
          </div>
          <p className="mt-6 md:mt-0 text-neutral-400 max-w-md text-sm leading-relaxed font-light">
            Menyediakan jasa konsultansi dan fasilitasi pembangunan berkelanjutan dengan pendekatan komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-2 tracking-tight uppercase group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-neutral-900/20 border border-white/5 text-center">
          <h3 className="text-lg font-medium text-white mb-4">Tailor-made Services</h3>
          <p className="text-neutral-400 text-sm font-light max-w-2xl mx-auto mb-6">
            Kami juga menyediakan layanan khusus yang disesuaikan dengan kebutuhan proyek, komunitas, dan konteks lokal yang unik.
          </p>
          <a href="#contact" className="text-xs font-bold tracking-widest text-white border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-all uppercase">
            Hubungi Spesialis Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
