
import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  ArrowLeft, 
  Calendar, 
  User, 
  MapPin, 
  CheckCircle2, 
  Target, 
  Activity,
  Briefcase,
  Zap
} from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  status: 'Berhasil Diselesaikan' | 'Sedang Berjalan';
  client: string;
  duration: string;
  location?: string;
  category: string;
  summary: string;
  focusTitle: string;
  focusItems: string[];
  impactTitle?: string;
  impacts: string[];
  relatedServices: string[];
}

const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "p1",
    title: "Kesiapan Kerja Soft-Skill",
    subtitle: "Pengembangan Modul Soft-Skill Pemuda",
    status: "Berhasil Diselesaikan",
    client: "ChildFund",
    duration: "2019",
    category: "Youth Empowerment",
    summary: "Transformers bermitra dengan ChildFund untuk mengembangkan Modul Kesiapan Kerja Soft-Skill yang dirancang khusus untuk mempersiapkan generasi muda memasuki dunia kerja melalui kurikulum komprehensif dan praktis.",
    focusTitle: "Fokus Program",
    focusItems: [
      "Pengembangan Komunikasi Efektif di lingkungan profesional",
      "Problem-Solving & Critical Thinking untuk analisis masalah",
      "Teamwork & Collaboration dalam setting organisasi",
      "Workplace Readiness untuk mentalitas kerja praktis"
    ],
    impactTitle: "Dampak & Hasil",
    impacts: [
      "Meningkatkan employability peserta secara signifikan",
      "Membekali keterampilan esensial navigasi dunia kerja modern",
      "Memperkuat portofolio inisiatif berkelanjutan pemberdayaan pemuda"
    ],
    relatedServices: ["Pemberdayaan Pemuda", "Pengembangan SDM"]
  },
  {
    id: "p2",
    title: "Mata Pencaharian Berkelanjutan",
    subtitle: "Sustainable Livelihood Masyarakat Adat",
    status: "Berhasil Diselesaikan",
    client: "Samdhana Institute",
    duration: "2020 – 2021",
    location: "Indonesia (Nasional)",
    category: "Community Development",
    summary: "Program community-driven yang menempatkan masyarakat lokal sebagai pengambil keputusan utama dalam mengelola sumber daya alam secara bertanggung jawab.",
    focusTitle: "Pendekatan & Metodologi",
    focusItems: [
      "Community-Driven Approach bersama stakeholder lokal",
      "Sustainable Agriculture berbasis kearifan lokal",
      "Natural Resource Management yang bertanggung jawab",
      "Local Enterprise Development yang ekonomis"
    ],
    impactTitle: "Dampak Jangka Panjang",
    impacts: [
      "Memperkuat resiliensi ekonomi komunitas adat",
      "Mempertahankan nilai budaya dan praktik tradisional",
      "Menciptakan framework pemberdayaan generasi mendatang"
    ],
    relatedServices: ["Livelihood Development", "Pemberdayaan Masyarakat Adat"]
  },
  {
    id: "p3",
    title: "Business Plan Masyarakat Adat",
    subtitle: "Penyusunan Rencana Bisnis Viable",
    status: "Berhasil Diselesaikan",
    client: "Samdhana Institute",
    duration: "2022",
    category: "Indigenous People Empowerment",
    summary: "Menyediakan pelatihan khusus dan asistensi teknis kepada komunitas adat dalam menyusun rencana bisnis yang viable, beretika ekologis, dan sesuai budaya.",
    focusTitle: "Cakupan Pelatihan",
    focusItems: [
      "Business Plan Development yang realistis dan terukur",
      "Financial Management usaha berkelanjutan",
      "Market Access Strategy yang efektif",
      "Sustainable Business Practices ramah lingkungan"
    ],
    impacts: [
      "Merangsang ekonomi lokal berbasis warisan budaya",
      "Mengamankan masa depan ekonomi melalui kapasitas mandiri",
      "Membangun bisnis yang selaras dengan ekosistem alami"
    ],
    relatedServices: ["Capacity Building", "Business Development"]
  },
  {
    id: "p4",
    title: "Sistem Manajemen BUMDes",
    subtitle: "Penguatan Koperasi dan BUMDes",
    status: "Berhasil Diselesaikan",
    client: "PT. Ganda Alam Makmur",
    duration: "2023",
    location: "Area Terpilih, Indonesia",
    category: "Local Economy",
    summary: "Inisiatif pengembangan tata kelola dan efisiensi operasional Koperasi dan BUMDes menuju keberlanjutan dan skalabilitas bisnis di tingkat akar rumput.",
    focusTitle: "Komponen Program",
    focusItems: [
      "Skill-Building Workshops untuk pengelola",
      "Technical Assistance operasional dan manajerial",
      "Strategic Planning jangka menengah-panjang",
      "Best Practices Implementation standar internasional"
    ],
    impacts: [
      "Keberlanjutan operasional dan finansial lembaga desa",
      "Tata kelola yang transparan dan akuntabel",
      "Daya saing pasar yang lebih luas untuk produk lokal"
    ],
    relatedServices: ["Penguatan BUMDes", "Tata Kelola Organisasi"]
  },
  {
    id: "p5",
    title: "Evaluasi CSR Adaro",
    subtitle: "Analisis Dampak 22 Desa Terdampak",
    status: "Berhasil Diselesaikan",
    client: "Adaro Metcoal Companies",
    duration: "Juli – September 2023",
    location: "Kabupaten Murung Raya",
    category: "Audit & ESG",
    summary: "Evaluasi komprehensif menggunakan kerangka pedoman OECD dan analisis SROI (Social Return on Investment) periode 2018-2023.",
    focusTitle: "Metodologi Evaluasi",
    focusItems: [
      "OECD Guidelines Framework untuk standar CSR",
      "SROI Analysis detail periode 5 tahun",
      "Multi-Stakeholder Approach pelibatan pemangku kepentingan",
      "22 Direct Affected Villages (DAV) coverage"
    ],
    impacts: [
      "Insight mendalam efektivitas program CSR",
      "Data kuantitatif tingkat pengembalian investasi sosial",
      "Rekomendasi strategis alignment dengan SDGs"
    ],
    relatedServices: ["Evaluasi CSR", "SROI Analysis"]
  },
  {
    id: "p6",
    title: "Social Mapping Adaro",
    subtitle: "Pemetaan Sosial Terintegrasi ESG",
    status: "Berhasil Diselesaikan",
    client: "Adaro Group",
    duration: "Kuartal IV 2023",
    location: "Kutai Barat & Mahakam Hulu",
    category: "Strategy & Research",
    summary: "Memfasilitasi pemetaan sosial komprehensif di 23 desa dengan mengintegrasikan SDGs Desa dan prinsip Environmental, Social, and Governance (ESG).",
    focusTitle: "Kerangka Kerja Terintegrasi",
    focusItems: [
      "Comprehensive Social Mapping Framework",
      "SDGs Integration & Village SDGs Alignment",
      "ESG Best Practices application",
      "Analisis demografi dan potensi aset lokal"
    ],
    impacts: [
      "Dasar perencanaan program tepat sasaran",
      "Strategi engagement komunitas yang efektif",
      "Monitoring dampak sosial berkelanjutan berbasis data"
    ],
    relatedServices: ["Social Mapping", "Social Impact Assessment"]
  },
  {
    id: "p7",
    title: "Blueprint Mata Pencaharian",
    subtitle: "Roadmap Livelihood 2024-2028",
    status: "Berhasil Diselesaikan",
    client: "Samdhana Institute",
    duration: "2023 – Q1 2024",
    location: "Masakoda, Yen, Yec, dan Ogoney",
    category: "Planning & Policy",
    summary: "Perumusan Livelihood Blueprint 5 tahun yang menerapkan prinsip FPIC secara penuh untuk komunitas adat di wilayah Papua.",
    focusTitle: "Prinsip FPIC",
    focusItems: [
      "Perspektif komunitas otentik & spesifik",
      "Traditional Institutions Integration",
      "AFOLU Practices (Agriculture, Forestry, Land Use)",
      "Penguatan hak atas tanah wilayah adat"
    ],
    impacts: [
      "Roadmap 5 tahun dengan indikator terukur",
      "Keseimbangan modernisasi dan pelestarian tradisi",
      "Outcome standar internasional preservasi indigenous"
    ],
    relatedServices: ["Livelihood Planning", "Indigenous Empowerment"]
  },
  {
    id: "p8",
    title: "Pembangunan Smart Aggregator",
    subtitle: "Inovasi Rantai Pasok Koperasi",
    status: "Berhasil Diselesaikan",
    client: "PT. Ganda Alam Makmur",
    duration: "2024 (Fase 1-2)",
    location: "Kaubun, Kutai Timur",
    category: "Market Innovation",
    summary: "Meningkatkan kapasitas Koperasi Pemasaran Bersama menjadi aggregator inovatif yang menghubungkan produk BUMDes/UKM ke pasar luas.",
    focusTitle: "Integrasi Prinsip ESG",
    focusItems: [
      "Environmental: Praktik ramah lingkungan operasional",
      "Social: Inklusi sosial & pemberdayaan",
      "Governance: Tata kelola transparan & akuntabel",
      "Digital Platform manajemen agregasi"
    ],
    impacts: [
      "Efisiensi rantai pasok dari produsen ke konsumen",
      "Akses pasar yang lebih luas dan diversifikasi",
      "Pertumbuhan ekonomi lokal yang inklusif"
    ],
    relatedServices: ["Pengembangan Koperasi", "Market Linkage"]
  },
  {
    id: "p9",
    title: "Riset Pasar Teluk Bintuni",
    subtitle: "Analisis Pasar Produk Lokal Papua",
    status: "Berhasil Diselesaikan",
    client: "Samdhana Institute",
    duration: "Agustus 2024",
    location: "Teluk Bintuni, Papua Barat",
    category: "Market Research",
    summary: "Memahami dinamika pasar produk turunan pala, nanas, dan buah merah untuk mendukung keberlanjutan ekonomi masyarakat Papua.",
    focusTitle: "Tahapan Riset",
    focusItems: [
      "Literature Review baseline data",
      "Enumerator Training tim lokal",
      "Value Chain Analysis pala & buah merah",
      "Workshop Konsolidasi Pemda Bintuni"
    ],
    impacts: [
      "Dukungan infrastruktur dari Pemerintah Daerah",
      "Rencana operasional siap implementasi",
      "Jaminan keberlanjutan pasar produk lokal"
    ],
    relatedServices: ["Market Research", "Operational Planning"]
  },
  {
    id: "p10",
    title: "Program REAP Agrowisata",
    subtitle: "Revitalisasi Lingkungan & Wisata Sawah",
    status: "Sedang Berjalan",
    client: "PT. Ganda Alam Makmur",
    duration: "2024 – Ongoing",
    location: "Desa Bumi Rapak",
    category: "Agrotourism",
    summary: "Pengembangan desa wisata berbasis pertanian (REAP) yang berkelanjutan untuk meningkatkan pendapatan petani dan pelestarian ekosistem.",
    focusTitle: "Komponen Program",
    focusItems: [
      "Land Landscaping konsep estetis & tracking",
      "Tourism Awareness Group (Pokdarwis) training",
      "Digital Marketing destinasi wisata sawah",
      "Innovative Tourist Attractions paket edukasi"
    ],
    impacts: [
      "Peningkatan pendapatan kelompok tani Bhuana Sari",
      "Pelestarian tradisi bertani melalui ekonomi kreatif",
      "Model replikasi pembangunan desa berkelanjutan"
    ],
    relatedServices: ["Agrotourism Development", "Sustainable Development"]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const renderDetail = (p: ProjectDetail) => (
    <div className="animate-fade-in-up">
      <button 
        onClick={() => setSelectedProject(null)}
        className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 text-xs font-bold uppercase tracking-widest transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Portofolio
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
             <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${p.status === 'Berhasil Diselesaikan' ? 'border-green-500/20 bg-green-500/10 text-green-500' : 'border-amber-500/20 bg-amber-500/10 text-amber-500'}`}>
              {p.status}
            </span>
            <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{p.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 leading-tight">
            {p.title}
            <span className="block text-2xl md:text-3xl text-neutral-500 mt-2 font-light italic font-serif">{p.subtitle}</span>
          </h1>

          <div className="prose prose-invert prose-neutral max-w-none font-light leading-relaxed text-neutral-400 space-y-12">
            <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl">
              <h2 className="text-white text-xl font-medium mb-6 flex items-center gap-2">
                <Target size={20} className="text-amber-500" /> Ringkasan Proyek
              </h2>
              <p className="text-lg leading-relaxed">{p.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-amber-500" /> {p.focusTitle}
                </h3>
                <ul className="space-y-4">
                  {p.focusItems.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.impacts.length > 0 && (
                <div>
                  <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-amber-500" /> {p.impactTitle || 'Hasil & Dampak'}
                  </h3>
                  <ul className="space-y-4">
                    {p.impacts.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-neutral-500 shrink-0 mt-1" />
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
          <div className="sticky top-32 space-y-8">
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-3xl shadow-xl">
              <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-8">Metadata Proyek</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 shrink-0"><Briefcase size={18} /></div>
                  <div>
                    <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Klien / Mitra</p>
                    <p className="text-sm text-neutral-200 font-medium">{p.client}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 shrink-0"><Calendar size={18} /></div>
                  <div>
                    <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Durasi Proyek</p>
                    <p className="text-sm text-neutral-200 font-medium">{p.duration}</p>
                  </div>
                </div>
                {p.location && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 shrink-0"><MapPin size={18} /></div>
                    <div>
                      <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Lokasi</p>
                      <p className="text-sm text-neutral-200 font-medium">{p.location}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-4">Layanan Terkait</p>
                <div className="flex flex-wrap gap-2">
                  {p.relatedServices.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-neutral-400 font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-3xl">
              <p className="text-sm text-neutral-400 font-light italic">
                "Proyek ini mencerminkan dedikasi Transformers Plus Indonesia dalam mendukung transformasi sosial yang berkelanjutan."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in pt-32 pb-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedProject ? (
          <>
            <section className="mb-24">
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 mb-6 uppercase tracking-[0.3em]">
                <Layers size={12} /> Portofolio Pembangunan
              </div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-tight">
                <span className="text-silver-gradient">Proyek & Impact</span> <br/>
                <span className="text-amber-gradient font-serif italic">Sustainability</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl font-light leading-relaxed">
                Transformers Plus Indonesia menghadirkan solusi pembangunan berkelanjutan melalui data-driven planning dan pendekatan sosial yang inklusif.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              {PROJECTS_DATA.map((p) => (
                <div 
                  key={p.id} 
                  className="group relative bg-neutral-900/30 border border-white/5 rounded-3xl p-10 overflow-hidden hover:bg-neutral-900/60 transition-all flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neutral-500 group-hover:text-amber-400 transition-colors">
                        <Layers size={20} />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${p.status === 'Berhasil Diselesaikan' ? 'border-green-500/20 text-green-500' : 'border-amber-500/20 text-amber-500'}`}>
                          {p.status === 'Berhasil Diselesaikan' ? 'Success' : 'Ongoing'}
                        </span>
                        <div className="text-[10px] font-bold tracking-[0.3em] text-neutral-700 uppercase">{p.category}</div>
                      </div>
                    </div>
                    <h2 className="text-xs font-bold text-neutral-800 uppercase tracking-widest mb-4">{p.duration}</h2>
                    <h3 className="text-2xl font-medium text-white mb-4 leading-tight group-hover:text-silver-gradient transition-all">{p.title}</h3>
                    <p className="text-neutral-400 font-light leading-relaxed mb-8 max-w-lg line-clamp-3 italic">
                      {p.subtitle} — {p.summary.substring(0, 100)}...
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedProject(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase group-hover:gap-4 group-hover:text-amber-400 transition-all mt-auto"
                  >
                    Lihat Detail <ArrowUpRight size={14} />
                  </button>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <section className="text-center py-24 border-t border-white/5">
              <p className="text-neutral-700 text-sm font-bold mb-4 uppercase tracking-[0.4em]">Partnering for Impact</p>
              <h2 className="text-2xl font-medium text-white max-w-xl mx-auto mb-12">
                <span className="text-silver-gradient">Siap merancang proyek pembangunan berkelanjutan berikutnya?</span>
              </h2>
              <button 
                onClick={() => window.location.hash = 'contact'}
                className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Mulai Diskusi
              </button>
            </section>
          </>
        ) : (
          renderDetail(selectedProject)
        )}
      </div>
    </div>
  );
};

export default Projects;
