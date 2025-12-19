
import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How is the content delivered?", a: "Our content is delivered through a mix of pre-recorded video modules, live webinar sessions, and written reports available via our Circle platform." },
  { q: "Is this suitable for beginners?", a: "Yes, we have a foundational track designed specifically for those new to macroeconomics, which builds up to more advanced concepts gradually." },
  { q: "What is the cancellation policy?", a: "Subscriptions can be cancelled at any time via your account settings. Consultations require 24-hour notice for rescheduling." }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-neutral-950 border-t border-white/5 z-20 relative">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-white/5 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown size={16} className="text-neutral-500" />
                </span>
              </summary>
              <div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2 font-light">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
