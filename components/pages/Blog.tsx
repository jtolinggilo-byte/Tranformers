
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  ChevronRight, 
  Tag, 
  ArrowLeft,
  List,
  Settings,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  ShieldAlert,
  Save,
  FileText,
  BarChart2,
  Lock,
  LayoutDashboard,
  Activity,
  TrendingUp,
  Type,
  Image as ImageIcon,
  X,
  Globe
} from 'lucide-react';

// --- DATA STRUCTURES ---
interface Cluster {
  id: string;
  title: string;
  content: string;
  views: number;
  status: 'published' | 'draft';
  headerImage?: string;
}

interface Pillar {
  id: string;
  title: string;
  keyword: string;
  description: string;
  views: number;
  clusters: Cluster[];
}

// Data awal dengan 6 pilar utama
const INITIAL_PILLARS: Pillar[] = [
  {
    id: "p1",
    title: "Pembangunan Berkelanjutan & Transformasi Sosial",
    keyword: "pembangunan berkelanjutan indonesia",
    description: "Panduan komprehensif mengenai strategi pembangunan berkelanjutan di Indonesia dan transformasi sosial.",
    views: 1240,
    clusters: [
      { id: "c1-1", title: "Transformasi Sosial Berkeadilan", content: "Transformasi sosial merupakan inti dari keberlanjutan...", views: 450, status: 'published', headerImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" },
      { id: "c1-2", title: "SDGs Indonesia: Target & Tantangan", content: "Pencapaian SDGs di Indonesia memerlukan kolaborasi...", views: 320, status: 'published' }
    ]
  },
  {
    id: "p2",
    title: "Tata Kelola Sosial, ESG & Standar Internasional",
    keyword: "tata kelola sosial esg",
    description: "Eksplorasi tata kelola sosial dan ESG berdasarkan standar World Bank, ADB, dan IRMA.",
    views: 890,
    clusters: [
      { id: "c2-1", title: "Implementasi ESG di Indonesia", content: "Standar LST (Lingkungan, Sosial, Tata Kelola) kini menjadi...", views: 560, status: 'published', headerImage: "https://images.unsplash.com/photo-1454165833767-131f42695971?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  {
    id: "p3",
    title: "CSR, Evaluasi & Dampak Sosial",
    keyword: "csr berkelanjutan",
    description: "Merancang CSR yang berkelanjutan dengan evaluasi dampak menggunakan metode SROI.",
    views: 650,
    clusters: []
  },
  {
    id: "p4",
    title: "Social Mapping & Social Impact Assessment",
    keyword: "social impact assessment indonesia",
    description: "Metodologi SIA dan pemetaan sosial untuk meminimalisir risiko pembangunan.",
    views: 430,
    clusters: []
  },
  {
    id: "p5",
    title: "Komunitas Adat & Mata Pencaharian Berkelanjutan",
    keyword: "mata pencaharian berkelanjutan",
    description: "Pemberdayaan masyarakat adat melalui penguatan mata pencaharian berkelanjutan.",
    views: 520,
    clusters: []
  },
  {
    id: "p6",
    title: "Pemuda, BUMDes & Pembangunan Lokal",
    keyword: "pemberdayaan masyarakat desa",
    description: "Mendorong pembangunan dari desa melalui pemuda dan penguatan BUMDes.",
    views: 780,
    clusters: []
  }
];

type ViewState = 'index' | 'pillar' | 'cluster-detail' | 'login' | 'admin';
type AdminTab = 'overview' | 'manage-pillars' | 'manage-clusters' | 'seo';

const Blog: React.FC = () => {
  // --- STATES ---
  const [view, setView] = useState<ViewState>('index');
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [pillars, setPillars] = useState<Pillar[]>(INITIAL_PILLARS);
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [activeCluster, setActiveCluster] = useState<Cluster | null>(null);
  
  // Auth
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Pillar Editor
  const [isEditingPillar, setIsEditingPillar] = useState(false);
  const [pillarForm, setPillarForm] = useState({ title: '', keyword: '', description: '' });

  // Cluster Editor
  const [isEditingCluster, setIsEditingCluster] = useState(false);
  const [clusterForm, setClusterForm] = useState({ title: '', content: '', headerImage: '', status: 'published' as 'published' | 'draft' });

  // --- HANDLERS ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAdmin(true);
      setView('admin');
      setLoginError('');
      setPassword('');
    } else {
      setLoginError('Password salah.');
    }
  };

  // --- PILLAR CRUD ---
  const openPillarEditor = (pillar?: Pillar) => {
    if (pillar) {
      setIsEditingPillar(true);
      setPillarForm({ title: pillar.title, keyword: pillar.keyword, description: pillar.description });
    } else {
      setIsEditingPillar(false);
      setPillarForm({ title: '', keyword: '', description: '' });
    }
    setActiveTab('manage-pillars');
  };

  const handleSavePillar = () => {
    if (!pillarForm.title) return;
    let updated: Pillar[];
    if (isEditingPillar && selectedPillar) {
      updated = pillars.map(p => p.id === selectedPillar.id ? { ...p, ...pillarForm } : p);
    } else {
      const newPillar: Pillar = {
        id: `p-${Date.now()}`,
        ...pillarForm,
        views: 0,
        clusters: []
      };
      updated = [...pillars, newPillar];
    }
    setPillars(updated);
    setIsEditingPillar(false);
    setSelectedPillar(null);
    alert('Pillar berhasil disimpan!');
  };

  const handleDeletePillar = (id: string) => {
    if (window.confirm('Hapus pilar ini beserta seluruh artikel di dalamnya?')) {
      setPillars(pillars.filter(p => p.id !== id));
      setSelectedPillar(null);
    }
  };

  // --- CLUSTER CRUD ---
  const openClusterEditor = (cluster?: Cluster) => {
    if (cluster) {
      setIsEditingCluster(true);
      setClusterForm({ title: cluster.title, content: cluster.content, headerImage: cluster.headerImage || '', status: cluster.status });
    } else {
      setIsEditingCluster(false);
      setClusterForm({ title: '', content: '', headerImage: '', status: 'published' });
    }
  };

  const handleSaveCluster = () => {
    if (!clusterForm.title || !selectedPillar) return;
    const updatedPillars = pillars.map(p => {
      if (p.id === selectedPillar.id) {
        let updatedClusters;
        if (isEditingCluster && activeCluster) {
          updatedClusters = p.clusters.map(c => c.id === activeCluster.id ? { ...c, ...clusterForm } : c);
        } else {
          updatedClusters = [...p.clusters, { id: `c-${Date.now()}`, ...clusterForm, views: 0 }];
        }
        return { ...p, clusters: updatedClusters };
      }
      return p;
    });
    setPillars(updatedPillars);
    setSelectedPillar(updatedPillars.find(p => p.id === selectedPillar.id) || null);
    setIsEditingCluster(false);
    setActiveCluster(null);
    alert('Artikel Cluster berhasil disimpan!');
  };

  const handleDeleteCluster = (clusterId: string) => {
    if (window.confirm('Hapus artikel ini?')) {
      const updated = pillars.map(p => {
        if (p.id === selectedPillar?.id) {
          return { ...p, clusters: p.clusters.filter(c => c.id !== clusterId) };
        }
        return p;
      });
      setPillars(updated);
      setSelectedPillar(updated.find(p => p.id === selectedPillar?.id) || null);
    }
  };

  // --- VIEWS ---
  return (
    <div className="min-h-screen pt-32 pb-24 text-neutral-300 relative bg-neutral-950">
      
      {/* Floating Admin Button */}
      <button 
        onClick={() => isAdmin ? setView('admin') : setView('login')}
        className={`fixed bottom-6 left-6 z-[110] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all ${isAdmin ? 'bg-amber-500 text-black' : 'bg-neutral-900 border border-white/5 text-neutral-600 hover:text-white'}`}
      >
        {isAdmin ? <LayoutDashboard size={20} /> : <Lock size={18} />}
      </button>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* LOGIN VIEW */}
        {view === 'login' && (
          <div className="max-w-md mx-auto py-24 animate-fade-in text-center">
            <div className="bg-neutral-900/50 border border-white/5 p-10 rounded-3xl backdrop-blur-md">
              <ShieldAlert size={48} className="mx-auto mb-8 text-amber-500" />
              <h2 className="text-2xl font-medium text-white mb-8">Admin Access</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="password" placeholder="Admin Password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none"
                />
                {loginError && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{loginError}</p>}
                <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-neutral-200 transition-all">Unlock</button>
                <button type="button" onClick={() => setView('index')} className="text-neutral-600 text-[10px] font-bold uppercase mt-4">Cancel</button>
              </form>
            </div>
          </div>
        )}

        {/* PUBLIC INDEX VIEW */}
        {view === 'index' && (
          <div className="animate-fade-in">
            <header className="mb-20">
              <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 mb-6 uppercase tracking-[0.3em]"><Tag size={12} /> Knowledge Center</div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-tight">
                <span className="text-silver-gradient">Sustainability</span> <br/>
                <span className="text-amber-gradient font-serif italic">Insights Hub</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl font-light leading-relaxed">Authority source for social governance, CSR, and sustainable development in Indonesia.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.id} onClick={() => { setSelectedPillar(p); setView('pillar'); }} className="group p-8 border border-white/5 bg-neutral-900/20 rounded-3xl hover:bg-neutral-900/40 hover:border-amber-500/30 transition-all cursor-pointer flex flex-col justify-between h-80">
                  <div>
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-500 mb-8 group-hover:text-amber-500 transition-colors"><BookOpen size={24} /></div>
                    <h2 className="text-2xl font-medium text-white mb-4 group-hover:text-silver-gradient transition-all">{p.title}</h2>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{p.clusters.filter(c => c.status === 'published').length} Articles</span>
                    <ChevronRight size={18} className="text-neutral-700 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PUBLIC PILLAR VIEW */}
        {view === 'pillar' && selectedPillar && (
          <div className="animate-fade-in-up">
            <button onClick={() => setView('index')} className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 mb-12 text-xs font-bold uppercase tracking-widest transition-colors"><ArrowLeft size={16} /> Kembali ke Hub</button>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <h1 className="text-4xl md:text-6xl font-medium text-white mb-12 leading-tight">{selectedPillar.title}</h1>
                <div className="prose prose-invert prose-neutral max-w-none font-light leading-relaxed text-neutral-400 space-y-12">
                  <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl">
                    <h3 className="text-white font-medium mb-6 flex items-center gap-2"><List size={18} className="text-amber-500" /> Jelajahi Artikel Cluster</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedPillar.clusters.filter(c => c.status === 'published').length > 0 ? (
                        selectedPillar.clusters.filter(c => c.status === 'published').map(c => (
                          <div 
                            key={c.id} 
                            onClick={() => { setActiveCluster(c); setView('cluster-detail'); }}
                            className="p-5 bg-neutral-950/50 border border-white/5 rounded-2xl hover:border-amber-500/40 transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{c.title}</span>
                            <ArrowRight size={16} className="text-neutral-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        ))
                      ) : (
                        <p className="text-neutral-600 text-xs italic">Belum ada artikel publikasi dalam pilar ini.</p>
                      )}
                    </div>
                  </div>
                  <h2 className="text-3xl font-medium text-white border-t border-white/5 pt-12">Panduan Otoritas</h2>
                  <p className="text-lg">Transformers Plus Indonesia menggabungkan metodologi global dengan kearifan lokal untuk memastikan keberlanjutan program pembangunan di pilar {selectedPillar.title}.</p>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="sticky top-32 p-8 bg-neutral-900 border border-white/5 rounded-3xl shadow-xl">
                  <h3 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-8">Pillar Context</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><CheckCircle size={16} /></div>
                      <p className="text-xs text-neutral-400 leading-relaxed">Berbasis Standar Internasional (ESG, OECD, World Bank ESS).</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><Globe size={16} /></div>
                      <p className="text-xs text-neutral-400 leading-relaxed">Implementasi Nasional & Lokal di Seluruh Indonesia.</p>
                    </div>
                  </div>
                  <button className="w-full mt-10 py-4 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-all">Konsultasi Khusus</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PUBLIC CLUSTER DETAIL VIEW */}
        {view === 'cluster-detail' && activeCluster && selectedPillar && (
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <button 
              onClick={() => { setView('pillar'); setActiveCluster(null); }}
              className="flex items-center gap-2 text-neutral-500 hover:text-white mb-12 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Kembali ke {selectedPillar.title}
            </button>

            {activeCluster.headerImage && (
              <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
                <img src={activeCluster.headerImage} alt={activeCluster.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="mb-12">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4 block">{selectedPillar.title}</span>
              <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">{activeCluster.title}</h1>
            </div>

            <div className="prose prose-invert prose-neutral max-w-none text-neutral-400 font-light leading-relaxed text-lg space-y-8">
              {activeCluster.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* --- ADMIN DASHBOARD VIEW --- */}
        {view === 'admin' && isAdmin && (
          <div className="animate-fade-in-up">
            <header className="mb-12 flex justify-between items-center border-b border-white/5 pb-8">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 mb-4 uppercase tracking-[0.3em]"><ShieldAlert size={12} /> CMS Workspace</div>
                <h1 className="text-4xl font-medium text-white tracking-tight">Authority Content Hub</h1>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setView('index')} className="bg-neutral-900 border border-white/10 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Preview Live</button>
                <button onClick={() => { setIsAdmin(false); setView('index'); }} className="bg-red-500/10 text-red-500 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Logout</button>
              </div>
            </header>

            {/* Admin Tabs */}
            <div className="flex gap-8 mb-12 border-b border-white/5 overflow-x-auto pb-px">
              {[
                { id: 'overview', label: 'Overview', icon: <TrendingUp size={14} /> },
                { id: 'manage-pillars', label: 'Pillars', icon: <BookOpen size={14} /> },
                { id: 'manage-clusters', label: 'Clusters', icon: <FileText size={14} /> },
                { id: 'seo', label: 'SEO Audit', icon: <BarChart2 size={14} /> }
              ].map(tab => (
                <button 
                  key={tab.id} onClick={() => { setActiveTab(tab.id as AdminTab); setIsEditingPillar(false); setIsEditingCluster(false); }}
                  className={`flex items-center gap-2 py-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all shrink-0 ${activeTab === tab.id ? 'border-amber-500 text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* 1. OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
                  <StatCard label="Total Views" val="4,520" trend="+14%" />
                  <StatCard label="Pillars" val={pillars.length.toString()} />
                  <StatCard label="Total Clusters" val={pillars.reduce((acc, p) => acc + p.clusters.length, 0).toString()} />
                  <StatCard label="Drafts" val={pillars.reduce((acc, p) => acc + p.clusters.filter(c => c.status === 'draft').length, 0).toString()} />
                  
                  <div className="md:col-span-3 p-8 bg-neutral-900 border border-white/5 rounded-3xl">
                    <h3 className="text-lg font-medium text-white mb-6">Top Pillar Performance</h3>
                    <div className="space-y-4">
                      {pillars.sort((a,b) => b.views - a.views).slice(0,3).map(p => (
                        <div key={p.id} className="flex items-center justify-between p-4 bg-neutral-950/50 rounded-2xl border border-white/5">
                          <span className="text-sm font-medium">{p.title}</span>
                          <span className="text-xs text-amber-500 font-bold">{p.views} views</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 bg-neutral-900 border border-white/5 rounded-3xl flex flex-col items-center justify-center text-center">
                    <Activity size={32} className="text-amber-500 mb-4" />
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Health Score</p>
                    <p className="text-4xl font-light text-white mt-2">92%</p>
                  </div>
                </div>
              )}

              {/* 2. MANAGE PILLARS */}
              {activeTab === 'manage-pillars' && (
                <div className="lg:col-span-12 space-y-8 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-medium text-white">Manajemen Pilar</h2>
                    {!isEditingPillar && (
                      <button onClick={() => openPillarEditor()} className="flex items-center gap-2 bg-amber-500 text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <Plus size={14} /> Pilar Baru
                      </button>
                    )}
                  </div>

                  {isEditingPillar ? (
                    <div className="p-8 bg-neutral-900 border border-white/10 rounded-3xl space-y-6">
                      <h3 className="text-lg font-medium text-white">{isEditingPillar ? 'Edit Pilar' : 'Buat Pilar Baru'}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Judul Pilar" value={pillarForm.title} onChange={e => setPillarForm({...pillarForm, title: e.target.value})} />
                        <Input label="Target Keyword SEO" value={pillarForm.keyword} onChange={e => setPillarForm({...pillarForm, keyword: e.target.value})} />
                      </div>
                      <Textarea label="Deskripsi Pilar" value={pillarForm.description} onChange={e => setPillarForm({...pillarForm, description: e.target.value})} />
                      <div className="flex gap-4">
                        <button onClick={handleSavePillar} className="bg-white text-black px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest"><Save size={14} className="inline mr-2" /> Simpan Pilar</button>
                        <button onClick={() => setIsEditingPillar(false)} className="text-neutral-500 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:text-white">Batal</button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pillars.map(p => (
                        <div key={p.id} className="p-6 bg-neutral-900/50 border border-white/5 rounded-2xl flex items-center justify-between group">
                          <div className="truncate pr-4">
                            <p className="text-sm font-medium text-white mb-1">{p.title}</p>
                            <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">{p.keyword}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setSelectedPillar(p); openPillarEditor(p); }} className="p-2 text-neutral-600 hover:text-white"><Edit3 size={16} /></button>
                            <button onClick={() => handleDeletePillar(p.id)} className="p-2 text-neutral-600 hover:text-red-500"><Trash2 size={16} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 3. MANAGE CLUSTERS */}
              {activeTab === 'manage-clusters' && (
                <>
                  <div className="lg:col-span-4 space-y-4 animate-fade-in">
                    <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
                      <h3 className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-6">Select Pillar</h3>
                      <div className="space-y-2">
                        {pillars.map(p => (
                          <button 
                            key={p.id} onClick={() => { setSelectedPillar(p); setIsEditingCluster(false); }}
                            className={`w-full text-left p-4 rounded-xl border text-[11px] font-medium transition-all ${selectedPillar?.id === p.id ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-neutral-950 border-white/5 text-neutral-500 hover:border-white/10'}`}
                          >
                            {p.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-8 animate-fade-in">
                    {selectedPillar ? (
                      <>
                        <div className="flex justify-between items-center">
                          <h2 className="text-xl font-medium text-white">Clusters di: <span className="text-amber-500">{selectedPillar.title}</span></h2>
                          <button onClick={() => openClusterEditor()} className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            <Plus size={14} /> Cluster Baru
                          </button>
                        </div>

                        {isEditingCluster && (
                          <div className="p-8 bg-neutral-900 border border-white/10 rounded-3xl space-y-6">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-medium text-white">{isEditingCluster && activeCluster ? 'Edit Artikel Cluster' : 'Buat Artikel Baru'}</h3>
                              <button onClick={() => setIsEditingCluster(false)} className="text-neutral-600 hover:text-white"><X size={20} /></button>
                            </div>
                            <Input label="Judul Cluster" value={clusterForm.title} onChange={e => setClusterForm({...clusterForm, title: e.target.value})} />
                            <Input label="Header Image URL (Opsional)" placeholder="https://..." value={clusterForm.headerImage} onChange={e => setClusterForm({...clusterForm, headerImage: e.target.value})} />
                            {clusterForm.headerImage && (
                              <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/10 bg-black">
                                <img src={clusterForm.headerImage} alt="Preview" className="w-full h-full object-cover" />
                              </div>
                            )}
                            <Textarea label="Isi Konten" rows={8} value={clusterForm.content} onChange={e => setClusterForm({...clusterForm, content: e.target.value})} />
                            <div className="flex gap-4">
                              <button onClick={handleSaveCluster} className="bg-amber-500 text-black px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <Save size={14} /> Simpan Cluster
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 gap-4">
                          {selectedPillar.clusters.length > 0 ? selectedPillar.clusters.map(c => (
                            <div key={c.id} className="p-4 bg-neutral-900/50 border border-white/5 rounded-2xl flex items-center justify-between group">
                              <div className="flex items-center gap-4">
                                {c.headerImage ? (
                                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
                                    <img src={c.headerImage} alt={c.title} className="w-full h-full object-cover" />
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-600 shrink-0"><ImageIcon size={18} /></div>
                                )}
                                <div>
                                  <p className="text-sm font-medium text-white">{c.title}</p>
                                  <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">{c.views} views · {c.status}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button onClick={() => { setActiveCluster(c); openClusterEditor(c); }} className="p-2 text-neutral-600 hover:text-white"><Edit3 size={16} /></button>
                                <button onClick={() => handleDeleteCluster(c.id)} className="p-2 text-neutral-600 hover:text-red-500"><Trash2 size={16} /></button>
                              </div>
                            </div>
                          )) : (
                            <div className="h-40 border border-dashed border-white/5 rounded-3xl flex items-center justify-center text-neutral-700 text-sm">Belum ada cluster di pilar ini.</div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="h-full min-h-[400px] border border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-neutral-700">
                        <Type size={48} className="mb-4 opacity-20" />
                        <p className="text-sm">Pilih Pilar dari sidebar untuk mulai mengelola cluster.</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* 4. SEO AUDIT */}
              {activeTab === 'seo' && (
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                  {pillars.map(p => (
                    <div key={p.id} className="p-8 bg-neutral-900 border border-white/5 rounded-3xl">
                      <h3 className="text-lg font-medium text-white mb-6">{p.title}</h3>
                      <div className="space-y-3">
                        <SEOCheck label="Target Keyword in Pillar" done={true} />
                        <SEOCheck label="Min. 5 Cluster Articles" done={p.clusters.length >= 5} />
                        <SEOCheck label="Header Images for Clusters" done={p.clusters.some(c => !!c.headerImage)} />
                        <SEOCheck label="Internal Links Optimized" done={true} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---
const StatCard = ({ label, val, trend }: { label: string, val: string, trend?: string }) => (
  <div className="p-6 bg-neutral-900 border border-white/5 rounded-2xl">
    <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-4">{label}</p>
    <div className="flex items-end gap-2">
      <span className="text-3xl font-light text-white">{val}</span>
      {trend && <span className="text-[10px] text-green-500 font-bold mb-1">{trend}</span>}
    </div>
  </div>
);

const Input = ({ label, value, onChange, placeholder }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{label}</label>
    <input 
      type="text" value={value} onChange={onChange} placeholder={placeholder}
      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 outline-none" 
    />
  </div>
);

const Textarea = ({ label, value, onChange, rows = 4 }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{label}</label>
    <textarea 
      rows={rows} value={value} onChange={onChange}
      className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 outline-none resize-none" 
    />
  </div>
);

const SEOCheck = ({ label, done }: { label: string, done: boolean }) => (
  <div className="flex items-center justify-between p-4 bg-neutral-950/50 border border-white/5 rounded-xl">
    <span className="text-xs text-neutral-400">{label}</span>
    {done ? <CheckCircle size={16} className="text-green-500" /> : <X size={16} className="text-red-500" />}
  </div>
);

export default Blog;
