'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Headset, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FAQS = [
  {
    id: '01',
    category: 'LOCATION & ACCESS',
    question: 'What is the location of NOVA City?',
    answer: 'NOVA City is strategically located near the M-14 Motorway (Hakla-Yarik Interchange) right off the CPEC route, offering fast and direct access to Islamabad, Rawalpindi, and surrounding major hubs.',
  },
  {
    id: '02',
    category: 'INVENTORY & SIZES',
    question: 'What plot sizes are available?',
    answer: 'NOVA City offers a versatile range of residential plots including 3.5 Marla, 5 Marla, 8 Marla, 10 Marla, and 1 Kanal, as well as prime commercial plots designed for retail and office developments.',
  },
  {
    id: '03',
    category: 'FINANCE & SCHEDULING',
    question: 'What is the payment plan?',
    answer: 'Flexible 3.5 to 4-year installment plans are available with a down payment starting at just 10% to 20%. Convenient monthly and quarterly installments make ownership smooth and structured.',
  },
  {
    id: '04',
    category: 'OVERSEAS INVESTORS',
    question: 'Can overseas Pakistanis invest?',
    answer: 'Yes! NOVA City features dedicated Overseas Blocks with elevated amenities and streamlined online booking processes, document processing, and international bank transfers for overseas buyers.',
  },
  {
    id: '05',
    category: 'LEGAL & NOC',
    question: 'Is NOVA City approved?',
    answer: 'Yes, NOVA City is NOC approved by the relevant legal authority (PHATA/TMA), ensuring legal safety, secure land ownership, and fast-tracked infrastructure development.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-[#070707] text-[#E5E5E5] relative overflow-hidden border-t border-b border-white/5">
      {/* Visual Break: Deep Atmospheric Ambient Light (No Grid Lines) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C8A261]/40 to-transparent" />
      <div className="absolute top-1/2 left-[-10%] w-[550px] h-[550px] bg-[#C8A261]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Detached & Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A261]/40 bg-[#C8A261]/10 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A261]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A261] font-bold">
                  COMMON QUESTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6">
                Frequently Asked <span className="text-[#C8A261] font-semibold block">Questions</span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed mb-8">
                Got questions about booking, site location, or legal documentation? Here are direct answers to help you make an informed investment decision.
              </p>
            </div>

            {/* Live Support Box */}
            <div className="relative p-6 bg-[#0E0E0E] border border-white/10 rounded-sm shadow-2xl backdrop-blur-xl group hover:border-[#C8A261]/70 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C8A261]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C8A261]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C8A261]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C8A261]" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#151515] border border-white/10 group-hover:border-[#C8A261]/50 rounded-sm text-[#C8A261] transition-all duration-300">
                  <Headset className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <div className="flex items-center gap-2 px-2.5 py-1 bg-[#151515] border border-white/10 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-emerald-400 font-bold">
                    24/7 ADVISORS ONLINE
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-base font-semibold text-white group-hover:text-[#C8A261] transition-colors">
                  Have a specific question?
                </h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Connect with our dedicated real estate consultants for instant guidance & custom quote details.
                </p>
              </div>

              <Button
                asChild
                className="w-full bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase h-12 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(200,162,97,0.2)] group"
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  <span>TALK TO AN EXPERT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4"
          >
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`group relative border transition-all duration-500 rounded-sm overflow-hidden ${
                    isOpen
                      ? 'bg-[#121212] border-[#C8A261]/80 shadow-[0_15px_35px_rgba(0,0,0,0.8)]'
                      : 'bg-[#0E0E0E] border-white/10 hover:border-[#C8A261]/40 hover:bg-[#121212]'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isOpen ? 'bg-[#C8A261]' : 'bg-transparent group-hover:bg-[#C8A261]/40'
                    }`}
                  />

                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none pl-7"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold transition-colors ${isOpen ? 'text-[#C8A261]' : 'text-gray-500'}`}>
                          {faq.id}
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A261]/80">
                          {faq.category}
                        </span>
                      </div>
                      
                      <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-[#C8A261]' : 'text-white group-hover:text-[#C8A261]'}`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${
                      isOpen 
                        ? 'border-[#C8A261] text-[#C8A261] bg-[#C8A261]/15 rotate-180' 
                        : 'border-white/10 text-gray-400 bg-white/5 group-hover:border-[#C8A261]/50 group-hover:text-white'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 font-normal pl-7">
                          <p className="pt-4">{faq.answer}</p>
                          <div className="mt-4 flex items-center gap-2 text-[10px] text-[#C8A261] font-semibold uppercase tracking-wider">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verified Official Information</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="pt-4 flex justify-start">
              <Button
                asChild
                variant="outline"
                className="border-[#C8A261]/50 text-[#C8A261] hover:bg-[#C8A261] hover:text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-8 h-12 rounded-none transition-all duration-300"
              >
                <Link href="#all-faqs" className="flex items-center gap-2">
                  <span>VIEW ALL FAQS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}