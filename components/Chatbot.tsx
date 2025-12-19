
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Halo! Saya asisten virtual Transformers Plus Indonesia. Ada yang bisa saya bantu terkait pembangunan berkelanjutan atau layanan kami?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Production Webhook URL
      const response = await fetch('https://n8n-zcajpnj1fifi.uranium.sumopod.my.id/webhook/290fef1a-0ca4-4316-ac0d-731275a3c36a', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          context: 'Transformers Plus Web Chat'
        }),
      });

      // Get text body first to handle empty or malformed responses
      const text = await response.text();

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Layanan asisten tidak ditemukan (404). Silakan coba lagi nanti atau hubungi kami melalui email.');
        }
        throw new Error(`Gangguan Server (${response.status}).`);
      }

      if (!text || text.trim().length === 0) {
        throw new Error('Asisten tidak memberikan respon. Mohon sampaikan pesan Anda kembali.');
      }

      let botReply = '';
      try {
        // Try parsing JSON
        const data = JSON.parse(text);
        const result = Array.isArray(data) ? data[0] : data;
        
        botReply = result?.output || 
                   result?.response || 
                   result?.text || 
                   result?.message || 
                   (typeof result === 'string' ? result : JSON.stringify(result));
      } catch (jsonError) {
        // Fallback: If not JSON, use the raw text
        botReply = text;
      }

      setMessages(prev => [...prev, { role: 'bot', content: botReply }]);
    } catch (error: any) {
      console.error('Chatbot Error Detail:', error);
      
      let friendlyError = error.message;
      if (error.message.includes('Failed to fetch')) {
        friendlyError = 'Gagal menghubungi asisten. Periksa koneksi internet Anda.';
      }

      setMessages(prev => [...prev, { role: 'bot', content: `⚠️ Maaf, terjadi kendala teknis: ${friendlyError}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] sm:w-[400px] h-[500px] bg-neutral-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-neutral-900 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-widest uppercase">Assistant Virtual</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-tighter">Transformers Plus</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-neutral-800' : 'bg-white/10'}`}>
                    {msg.role === 'user' ? <User size={12} className="text-neutral-400" /> : <Bot size={12} className="text-amber-500" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-tr-none' 
                      : 'bg-neutral-900 text-neutral-300 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Loader2 size={12} className="text-amber-500 animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-900 text-neutral-500 text-[10px] italic border border-white/5">
                    Mengetik...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-neutral-900 border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pesan..."
                className="w-full bg-neutral-950 border border-white/10 rounded-full py-3 px-5 pr-12 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-white text-black rounded-full hover:bg-neutral-200 disabled:opacity-50 disabled:hover:bg-white transition-all"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-neutral-800 text-white' : 'bg-white text-black'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
