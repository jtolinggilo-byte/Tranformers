import React from 'react';
import { History, Target, Users2, ScrollText, Globe2, Mail, Phone, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Hero */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-12">
            <span className="text-silver-gradient">Transformers Plus</span> <br/>
            <span className="text-amber-gradient italic font-serif">Indonesia</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl font-light leading-relaxed">
            Konsultan dan fasilitator pembangunan berkelanjutan yang berfokus pada transformasi sosial berkeadilan di Indonesia sejak 2019.
          </p>
        </section>

        {/* Story & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <section>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-neutral-500 uppercase mb-8">
              <History size={16} /> Organization Story
            </div>
            <h2 className="text-3xl font-medium text-white mb-8 leading-tight">
              <span className="text-silver-gradient">Konsultan pembangunan Indonesia yang berpengalaman.</span>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-6">
              Didirikan pada 1 Oktober 2019, Transformers Plus Indonesia menghimpun para profesional dengan pengalaman nasional dan internasional dalam pembangunan berkelanjutan.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Kami lahir dari kebutuhan akan fasilitator yang mampu menjembatani aspirasi teknis dengan realitas sosial di lapangan.
            </p>
          </section>
          <section>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-neutral-500 uppercase mb-8">
              <Target size={16} /> Role & Identity
            </div>
            <h2 className="text-3xl font-medium text-white mb-8 leading-tight">
              <span className="text-silver-gradient">Fasilitator transformasi sosial.</span>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-6">
              Sebagai fasilitator transformasi sosial, kami menggabungkan pendekatan teknis, sosial, dan tata kelola untuk menciptakan dampak berkelanjutan.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">10+</div>
                <div className="text-[10px] text-neutral-600 font-bold tracking-widest uppercase">Tahun Pengalaman Kolektif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">Nationwide</div>
                <div className="text-[10px] text-neutral-600 font-bold tracking-widest uppercase">Jangkauan Operasional</div>
              </div>
            </div>
          </section>
        </div>

        {/* Key Contacts Section */}
        <section className="mb-32 border-t border-white/5 pt-24">
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-white mb-4">Leadership & Contacts</h2>
            <p className="text-neutral-500 font-light">Hubungi spesialis kami sesuai dengan sektor kebutuhan Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <User size={24} />
              </div>
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Corporate & Private Sector</p>
              <h3 className="text-xl font-medium text-white mb-6">Jati Prastyanto</h3>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Phone size={14} className="text-neutral-600" />
                  <span>+62 81227431148</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Mail size={14} className="text-neutral-600" />
                  <span>prast@transformersplus.id</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <User size={24} />
              </div>
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">Community, SMEs & NGOs</p>
              <h3 className="text-xl font-medium text-white mb-6">Nugie L Kristian</h3>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Phone size={14} className="text-neutral-600" />
                  <span>+62 85643219999</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Mail size={14} className="text-neutral-600" />
                  <span>nugie@transformersplus.id</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-neutral-900/40 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <User size={24} />
              </div>
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-2">International Partnership</p>
              <h3 className="text-xl font-medium text-white mb-6">W Roni</h3>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Phone size={14} className="text-neutral-600" />
                  <span>+62 8777-7272-357</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Mail size={14} className="text-neutral-600" />
                  <span>roni@transformersplus.id</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Standards */}
        <section className="bg-neutral-900/40 border border-white/5 rounded-3xl p-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-medium text-white mb-6">Budaya & Tata Kelola Sosial</h2>
              <p className="text-neutral-400 font-light leading-relaxed">
                Budaya kerja Transformers Plus Indonesia berlandaskan kolaborasi, integritas, dan keberlanjutan untuk memastikan solusi pembangunan yang kontekstual dan inklusif.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white mb-6">Standar Internasional</h2>
              <p className="text-neutral-400 font-light leading-relaxed">
                Setiap inisiatif dirancang menggunakan standar internasional seperti ESG, SDGs, FPIC, dan praktik terbaik tata kelola sosial global.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Kolaborasi", icon: <Users2 />, text: "Membangun kemitraan strategis antar stakeholder." },
            { title: "Integritas", icon: <ScrollText />, text: "Transparansi dan akuntabilitas dalam setiap program." },
            { title: "Keberlanjutan", icon: <Globe2 />, text: "Dampak jangka panjang bagi lingkungan dan masyarakat." }
          ].map((v, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-2xl bg-neutral-950 hover:bg-neutral-900 transition-colors group">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-neutral-300 group-hover:text-amber-400 transition-colors">{v.icon}</div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-silver-gradient transition-all">{v.title}</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;