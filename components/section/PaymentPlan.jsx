'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, ArrowRight, ShieldCheck, Calculator, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PAYMENT_STEPS = [
  {
    step: '01',
    percentage: '10%',
    title: 'BOOKING',
    subtitle: 'Down Payment',
    description: 'Secure your preferred plot instantly with a minimal initial down payment.',
    badge: 'Step 1'
  },
  {
    step: '02',
    percentage: '10%',
    title: 'CONFIRMATION',
    subtitle: 'Within 30 Days',
    description: 'Formal confirmation and documentation allocation paid within 30 days.',
    badge: 'Step 2'
  },
  {
    step: '03',
    percentage: '60%',
    title: 'INSTALLMENTS',
    subtitle: '3 - 4 Years Schedule',
    description: 'Flexible quarterly or monthly installments tailored for continuous ease.',
    badge: 'Step 3'
  },
  {
    step: '04',
    percentage: '20%',
    title: 'POSSESSION',
    subtitle: 'Handover Milestone',
    description: 'Final payment clear upon physical plot allotment and site handover.',
    badge: 'Final Step'
  },
];

export default function PaymentPlan() {
  const [activeCategory, setActiveCategory] = useState('residential');

  return (
    <section id="payment-plan" className="py-28 bg-[#090909] text-[#E5E5E5] relative overflow-hidden">
      {/* Visual Break: Horizontal Rays Pattern (No Box Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100%_2.5rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C8A261]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A261]/40 bg-[#C8A261]/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A261]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A261] font-bold">
                FLEXIBLE FINANCING
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15]">
              Structured <span className="text-[#C8A261] font-semibold">Payment Roadmap</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-[#121212] p-1.5 border border-white/10 rounded-sm self-start md:self-auto"
          >
            <button
              onClick={() => setActiveCategory('residential')}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'residential'
                  ? 'bg-[#C8A261] text-[#0B0B0B] shadow-[0_0_15px_rgba(200,162,97,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Residential Plots
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'commercial'
                  ? 'bg-[#C8A261] text-[#0B0B0B] shadow-[0_0_15px_rgba(200,162,97,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Commercial Plots
            </button>
          </motion.div>
        </div>

        {/* Milestone Steps Roadmap Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PAYMENT_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative bg-[#111111] border border-white/10 p-7 rounded-sm backdrop-blur-xl hover:border-[#C8A261]/80 hover:bg-[#141414] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A261]/0 to-transparent group-hover:via-[#C8A261] transition-all duration-700" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#C8A261] bg-[#C8A261]/10 px-2.5 py-1 border border-[#C8A261]/30 rounded-xs">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-600 group-hover:text-[#C8A261]/60 transition-colors">
                    PHASE {item.step}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#C8A261] transition-colors duration-300 tracking-tight font-serif">
                    {item.percentage}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-wider uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#C8A261] font-medium tracking-wide uppercase mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A261]" />
                  <span>Guaranteed Rate</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8A261] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-[#C8A261]/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#181818] border border-white/10 rounded-sm text-[#C8A261]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">
                Looking for the exact price breakdown per size?
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Download official PDF payment schedules for 3.5, 5, 8, 10 Marla & 1 Kanal plots.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-[#C8A261]/50 text-[#C8A261] hover:bg-[#C8A261] hover:text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-6 h-12 rounded-none transition-all duration-300"
            >
              <Link href="#calculator" className="flex items-center justify-center gap-2">
                <Calculator className="w-4 h-4" />
                <span>CALCULATE INSTALLMENT</span>
              </Link>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-6 h-12 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(200,162,97,0.2)] group"
            >
              <a href="/nova-city-payment-plan.pdf" download className="flex items-center justify-center gap-2">
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>DOWNLOAD PDF PLAN</span>
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}