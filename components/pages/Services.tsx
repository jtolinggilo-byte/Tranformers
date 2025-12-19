
import React, { useState } from 'react';
import { 
  BarChart3, 
  Settings2, 
  SearchCode, 
  Users, 
  FileCheck, 
  Sun, 
  BookOpenCheck,
  Zap,
  Check,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Globe2,
  PieChart,
  Lightbulb,
  Award,
  ClipboardCheck
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  h2: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  features: string[];
  standards?: string[];
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "s1",
    title: "Project Management",
    h2: "Manajemen Proyek, Program, dan Portofolio",
    shortDesc: "Perancangan, perencanaan, dan pengendalian implementasi program pembangunan berbasis riset kuat.",
    longDesc: "Transformers Plus Indonesia memiliki keahlian dalam manajemen proyek, program, and portofolio pembangunan dengan pendekatan menyeluruh, mulai dari tahap perancangan, perencanaan, hingga pengendalian implementasi. Layanan ini didukung oleh riset yang kuat serta pelibatan aktif para pemangku kepentingan (stakeholders) untuk memastikan keberlanjutan dan efektivitas program.\n\nKami memfasilitasi inisiatif pembangunan yang bersumber dari donor internasional, perusahaan multinasional, pemerintah, hingga tingkat desa, dengan mengedepankan praktik baik internasional dan prinsip pembangunan berkelanjutan yang kontekstual.",
    icon: <Settings2 />,
    features: ["Perancangan & Perencanaan Strategis", "Pengendalian Implementasi Proyek", "Pelibatan Stakeholder Aktif", "Manajemen Donor Internasional"]
  },
  {
    id: "s2",
    title: "Social Governance",
    h2: "Tata Kelola Sosial & Safeguards",
    shortDesc: "Uji tuntas dan penyusunan kerangka kerja sosial selaras dengan standar World Bank, ADB, dan IRMA.",
    longDesc: "Kami memiliki spesialisasi dalam Tata Kelola Sosial dan berkomitmen untuk memfasilitasi uji tuntas serta penyusunan kerangka kerja sosial yang selaras dengan standar internasional. Pendekatan kami memprioritaskan isu-isu kunci seperti pengelolaan influx, perlindungan hak masyarakat adat, kesejahteraan sosial, pelestarian warisan budaya, tata guna lahan, serta pemulihan mata pencaharian.\n\nSeluruh inisiatif dirancang sesuai konteks lokal dan diperkuat melalui evaluasi lingkungan dan sosial strategis (SESA) untuk memastikan dampak yang berkelanjutan.",
    icon: <ShieldCheck />,
    standards: ["World Bank ESS (Environmental and Social Framework)", "ADB SPS (Safeguard Policy Statement)", "IRMA (Initiative for Responsible Mining Assurance)"],
    features: ["Pengelolaan Influx & Migrasi", "Perlindungan Hak Masyarakat Adat", "Pelestarian Warisan Budaya", "Pemulihan Mata Pencaharian"]
  },
  {
    id: "s3",
    title: "Social Impact Assessment",
    h2: "Penilaian Dampak Sosial (SIA)",
    shortDesc: "Proses penilaian dampak sosial sesuai protokol internasional untuk memastikan manfaat adil bagi masyarakat.",
    longDesc: "Penilaian Dampak Sosial (SIA) merupakan salah satu layanan unggulan kami. Proses SIA dilaksanakan sesuai dengan protokol dan praktik baik internasional serta regulasi lokal yang berlaku. Kami memastikan setiap proyek memberikan dampak sosial yang positif, adil, dan berkelanjutan bagi masyarakat terdampak.",
    icon: <BarChart3 />,
    features: ["Penapisan & Pelingkupan Komprehensif", "Pelibatan Bermakna Pemangku Kepentingan", "Analisis Dampak Berbasis Data", "Mitigasi Risiko Sosial Strategis"]
  },
  {
    id: "s4",
    title: "Social Mapping",
    h2: "Pemetaan Sosial",
    shortDesc: "Analisis mendalam dinamika sosial, struktur kelembagaan, dan relasi kekuasaan sebagai dasar strategis.",
    longDesc: "Layanan Pemetaan Sosial kami dirancang berdasarkan metodologi akademik dan prinsip tata kelola internasional. Kami menghasilkan wawasan strategis berbasis data empiris yang dapat diimplementasikan untuk mendukung pengambilan keputusan dalam tata kelola sosial dan pembangunan berkelanjutan.",
    icon: <SearchCode />,
    features: ["Analisis Dinamika Sosial Masyarakat", "Pemetaan Struktur Kelembagaan", "Analisis Relasi Kekuasaan", "Identifikasi Kepentingan Stakeholder"]
  },
  {
    id: "s5",
    title: "CSR & ESG",
    h2: "CSR: Desain, Implementasi, Monitoring, dan Evaluasi",
    shortDesc: "Pengelolaan program CSR strategis menggunakan metode SROI, DEA, dan standar OECD.",
    longDesc: "Kami mendukung perusahaan dalam perancangan dan pengelolaan program Corporate Social Responsibility (CSR) yang strategis, berdampak, dan selaras dengan agenda pembangunan berkelanjutan. Kami menggunakan metode evaluasi canggih untuk memastikan kualitas dampak yang dihasilkan.",
    icon: <PieChart />,
    features: ["Desain Roadmap CSR Berbasis KPI", "Monitoring Prinsip PMD (Project Management for Development)", "Analisis SROI (Social Return on Investment)", "Evaluasi Berbasis OECD & Analisis DEA"]
  },
  {
    id: "s6",
    title: "Youth Empowerment",
    h2: "Pemberdayaan Pemuda",
    shortDesc: "Meningkatkan adaptabilitas dan inovasi generasi muda dengan standar International Youth Foundation (IYF).",
    longDesc: "Transformers Plus Indonesia memiliki komitmen kuat dalam pemberdayaan pemuda di tengah disrupsi teknologi dan tantangan ketahanan iklim. Program kami didukung oleh Master Trainer bersertifikasi International Youth Foundation (IYF), sehingga seluruh inisiatif memenuhi standar internasional dan relevan dengan kebutuhan pembangunan masa depan.",
    icon: <Sun />,
    features: ["Pelatihan Adaptabilitas & Inovasi", "Kesiapan Menghadapi Disrupsi Teknologi", "Ketahanan Iklim Pemuda", "Standardisasi IYF Global"]
  },
  {
    id: "s7",
    title: "RIPPM",
    h2: "Perumusan Rencana Induk Pengembangan dan Pemberdayaan Masyarakat",
    shortDesc: "Penyusunan RIPPM strategis sesuai Kepmen ESDM No. 1824 untuk keberlanjutan jangka panjang.",
    longDesc: "Kami menyediakan layanan perumusan RIPPM yang disusun secara strategis dan komprehensif sesuai dengan Kepmen ESDM No. 1824 K/30/MEM/2018. Setiap RIPPM dirancang untuk menjawab kebutuhan lokal, mencakup aspek sosial, ekonomi, lingkungan, dan kelembagaan.",
    icon: <BookOpenCheck />,
    features: ["Kepatuhan Kepmen ESDM 1824", "Analisis Kebutuhan Lokal Komprehensif", "Integrasi Aspek Ekonomi & Lingkungan", "Roadmap Keberlanjutan Jangka Panjang"]
  },
  {
    id: "s8",
    title: "Training & Workshop",
    h2: "Pelatihan dan Lokakarya Peningkatan Kapasitas",
    shortDesc: "Lokakarya sistematis dan aplikatif mengenai ESG, manajemen CSR, dan pengelolaan stakeholder.",
    longDesc: "Transformers Plus Indonesia menyelenggarakan pelatihan peningkatan kapasitas yang aplikatif dan berbasis praktik lapangan. Materi disusun secara sistematis agar peserta memperoleh pengetahuan strategis sekaligus keterampilan praktis.",
    icon: <Zap />,
    features: ["Tata Kelola Sosial Berbasis ESG", "Manajemen CSR Strategis", "Mobilisasi Sumber Daya", "Engagement & Pengelolaan Stakeholder"]
  },
  {
    id: "s9",
    title: "Tailor-Made Services",
    h2: "Layanan Khusus (Tailor-Made Services)",
    shortDesc: "Solusi cerdas dan spesifik untuk tantangan unik setiap proyek, komunitas, dan konteks lokal.",
    longDesc: "Kami memahami bahwa setiap proyek dan komunitas memiliki tantangan yang unik. Transformers Plus Indonesia menyediakan layanan khusus yang dapat disesuaikan dengan kebutuhan spesifik Anda untuk solusi yang cerdas, efektif, and berkelanjutan.",
    icon: <Lightbulb />,
    features: ["Pemetaan Stakeholder Khusus", "Perancangan Sustainable Livelihood", "Aksi Adaptasi & Mitigasi Perubahan Iklim", "Riset Kebijakan Strategis"]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const renderDetail = (s: ServiceDetail) => (
    <div className="animate-fade-in-up">
      <button 
        onClick={() => setSelectedService(null)}
        className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 text-xs font-bold uppercase tracking-widest transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Layanan
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500">
              {React.isValidElement(s.icon) ? React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 }) : s.icon}
            </div>
            <div>
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest block mb-1">Layanan Utama</span>
              <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight">{s.title}</h1>
            </div>
          </div>

          <div className="prose prose-invert prose-neutral max-w-none font-light leading-relaxed text-neutral-400 space-y-12">
            <div>
              <h2 className="text-white text-xl md:text-2xl font-medium mb-6 leading-tight">
                <span className="text-silver-gradient">{s.h2}</span>
              </h2>
              {s.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-lg mb-6 leading-relaxed">{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                  <ClipboardCheck size={18} className="text-amber-500" /> Komponen Layanan
                </h3>
                <ul className="space-y-4">
                  {s.features.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <Check size={16} className="text-amber-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {s.standards && (
                <div>
                  <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                    <Award size={18} className="text-amber-500" /> Standar Internasional
                  </h3>
                  <ul className="space-y-4">
                    {s.standards.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <Globe2 size={16} className="text-neutral-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-3xl shadow-xl">
              <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-8">Karakteristik Layanan</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><Check size={16} /></div>
                  <p className="text-xs text-neutral-400 leading-relaxed">Hasil terukur and berdampak sosial positif.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><Check size={16} /></div>
                  <p className="text-xs text-neutral-400 leading-relaxed">Selaras dengan konteks lokal Indonesia.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><Check size={16} /></div>
                  <p className="text-xs text-neutral-400 leading-relaxed">Berbasis standar global dan praktik terbaik.</p>
                </div>
              </div>
              <button 
                onClick={() => window.location.hash = 'contact'}
                className="w-full mt-10 py-4 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg"
              >
                Konsultasi Layanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in pt-32 pb-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedService ? (
          <>
            <section className="mb-24">
              <div className="relative w-full aspect-[21/7] rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl group">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=386,fit=crop/YyvX1Wk072ty3P48/20230723_112447-Awvj3zg3G7fo0ayn.jpg" 
                  alt="Field Activity" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-neutral-950/60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-12 text-center">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 mb-6 uppercase tracking-[0.3em]">
                    <Globe2 size={12} /> Expertise & Solutions
                  </div>
                  <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 leading-tight">
                    <span className="text-silver-gradient">Layanan Pembangunan</span> <br/>
                    <span className="text-amber-gradient font-serif italic">Berkelanjutan</span>
                  </h1>
                </div>
              </div>
              <p className="text-xl text-neutral-400 max-w-4xl font-light leading-relaxed">
                Transformers Plus Indonesia menyediakan layanan multidisipliner dalam pembangunan berkelanjutan, tata kelola sosial, dan penguatan kelembagaan melalui pendekatan holistik dan standar internasional.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {SERVICES_DATA.map((s, i) => (
                <div 
                  key={s.id} 
                  onClick={() => {
                    setSelectedService(s);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-8 cursor-pointer hover:bg-neutral-900/60 hover:border-amber-500/30 transition-all flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 text-neutral-500 group-hover:text-amber-400 transition-colors">
                    {s.icon}
                  </div>
                  <div className="mb-8">
                    <span className="text-[9px] font-bold text-neutral-700 uppercase tracking-widest mb-2 block">{s.id.toUpperCase()}</span>
                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-silver-gradient transition-all">{s.title}</h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed line-clamp-3 italic">
                      {s.shortDesc}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-white transition-colors">
                    Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <section className="bg-neutral-900 p-12 rounded-3xl border border-white/5 text-center">
              <h2 className="text-3xl font-medium text-white mb-6">
                <span className="text-silver-gradient">Tailor-made Services</span>
              </h2>
              <div className="text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed mb-10 text-lg">
                <p className="mb-2">Layanan Pembangunan Berkelanjutan, CSR & ESG | Transformers Plus Indonesia</p>
                <p>Transformers Plus Indonesia menyediakan layanan pembangunan berkelanjutan meliputi manajemen proyek, tata kelola sosial, CSR, ESG, social impact assessment, dan pemberdayaan masyarakat berbasis standar internasional.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium"><Check className="text-amber-400" size={16} /> Konteks Lokal</div>
                <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium"><Check className="text-amber-400" size={16} /> Pendekatan Personal</div>
                <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium"><Check className="text-amber-400" size={16} /> Hasil Terukur</div>
              </div>
            </section>
          </>
        ) : (
          renderDetail(selectedService)
        )}
      </div>
    </div>
  );
};

export default Services;
