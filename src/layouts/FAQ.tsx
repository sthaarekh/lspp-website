import { useState } from 'react';
import { faqData } from '../data/questions';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#efefef] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#169948] tracking-tight mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full bg-[#bcc7d8b3] flex items-center justify-between p-6 text-left focus:outline-none group select-none hover:bg-[#bcc7d8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-FC font-bold text-[#111827] tracking-tight pr-4">
                    {item.question}
                  </span>
                  
                  <svg
                    className={`w-4 h-4 text-[#111827] transform transition-transform duration-300 ease-in-out shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-base text-gray-600 bg-white leading-relaxed border-t border-gray-50 pt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}