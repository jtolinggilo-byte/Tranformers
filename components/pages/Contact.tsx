import React from 'react';
import { MapPin, Mail, Phone, Send, Globe, User } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-tight">
            <span className="text-silver-gradient">Konsultan</span> <br/>
            <span className="text-amber-gradient font-serif italic pr-2">CSR Indonesia</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl font-light leading-relaxed">
            Hubungi Transformers Plus Indonesia untuk kolaborasi pembangunan berkelanjutan, tata kelola sosial, dan penguatan komunitas.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <section>
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-white mb-8">Alamat Kantor</h2>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neutral-600 flex-shrink-0 group-hover:text-amber-500 transition-colors"><MapPin /></div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-neutral-700 uppercase mb-2 group-hover:text-neutral-300 transition-colors">Headquarters</h3>
                  <p className="text-neutral-400 font-light text-lg">Ayodya Permai A1, Sidorejo,<br/>Kota Salatiga, Central Java,<br/>Indonesia</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium text-white mb-8">Informasi Kontak</h2>
            <div className="space-y-10">
              {/* Jati Prastyanto */}
              <div className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl group transition-all hover:bg-neutral-900/60">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Jati Prastyanto</h3>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Corporate & Private Sector</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Phone size={14} className="text-neutral-600" />
                    <span>+62 81227431148</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Mail size={14} className="text-neutral-600" />
                    <span>prast@transformersplus.id</span>
                  </div>
                </div>
              </div>

              {/* Nugie L Kristian */}
              <div className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl group transition-all hover:bg-neutral-900/60">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Nugie L Kristian</h3>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Community, SMEs & NGOs</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Phone size={14} className="text-neutral-600" />
                    <span>+62 85643219999</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Mail size={14} className="text-neutral-600" />
                    <span>nugie@transformersplus.id</span>
                  </div>
                </div>
              </div>

              {/* W Roni */}
              <div className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl group transition-all hover:bg-neutral-900/60">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-amber-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">W Roni</h3>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">International Partnership & Cooperation</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Phone size={14} className="text-neutral-600" />
                    <span>+62 8777-7272-357</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Mail size={14} className="text-neutral-600" />
                    <span>roni@transformersplus.id</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-neutral-950/50 border border-white/5 rounded-2xl">
              <h4 className="flex items-center gap-2 text-white font-medium mb-4"><Globe size={18} className="text-amber-500" /> Global Communication</h4>
              <p className="text-neutral-600 text-sm font-light">Kami melayani jalur komunikasi khusus untuk sektor korporasi global dan kemitraan pembangunan internasional di seluruh zona waktu.</p>
            </div>
          </section>

          <section className="bg-neutral-900 border border-white/5 rounded-3xl p-10 shadow-2xl h-fit sticky top-32">
            <h2 className="text-2xl font-medium text-white mb-8">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-700 uppercase tracking-widest">Nama Lengkap</label>
                  <input type="text" className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 text-sm text-white focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-700 uppercase tracking-widest">Email Bisnis</label>
                  <input type="email" className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 text-sm text-white focus:outline-none focus:border-amber-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-700 uppercase tracking-widest">Subjek Kolaborasi</label>
                <select className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 text-sm text-white focus:outline-none focus:border-amber-500 transition-all appearance-none">
                  <option>Konsultasi CSR/ESG</option>
                  <option>Tata Kelola Sosial</option>
                  <option>Pemberdayaan Komunitas</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-700 uppercase tracking-widest">Pesan Anda</label>
                <textarea rows={6} className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 text-sm text-white focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-bold tracking-widest text-[11px] uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Kirim Pesan <Send size={16} />
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;