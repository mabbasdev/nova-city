'use client';

import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, Download, ArrowRight, ShieldCheck, Calculator, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Animated Counter Component for Smooth Scroll Number Effect
function AnimatedNumber({ value }) {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    });

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [numericValue, count, rounded]);

  return <span>{displayValue}%</span>;
}

const CATEGORY_DATA = {
  residential: [
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
  ],
  commercial: [
    {
      step: '01',
      percentage: '20%',
      title: 'BOOKING',
      subtitle: 'Down Payment',
      description: 'Lock prime commercial space along main boulevard with down payment.',
      badge: 'Step 1'
    },
    {
      step: '02',
      percentage: '15%',
      title: 'CONFIRMATION',
      subtitle: 'Within 30 Days',
      description: 'Commercial verification, allotment code, and file allocation.',
      badge: 'Step 2'
    },
    {
      step: '03',
      percentage: '50%',
      title: 'INSTALLMENTS',
      subtitle: '3 Years Schedule',
      description: 'Structured commercial installments synchronized with development.',
      badge: 'Step 3'
    },
    {
      step: '04',
      percentage: '15%',
      title: 'POSSESSION',
      subtitle: 'Commercial Handover',
      description: 'Final clearance upon building plan approval and physical handover.',
      badge: 'Final Step'
    },
  ]
};

export default function PaymentPlan() {
  const [activeCategory, setActiveCategory] = useState('residential');

  const paymentSteps = CATEGORY_DATA[activeCategory];

  return (
    <section id="payment-plan" className="py-28 bg-[#090909] text-[#E5E5E5] relative overflow-hidden">
      {/* Visual Break: Horizontal Rays Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100%_2.5rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#dd9b2a]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A261]/40 bg-[#dd9b2a]/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#f5ac2e]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#f5ac2e] font-bold">
                FLEXIBLE FINANCING
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15]">
              Structured <span className="text-[#f5ac2e] font-semibold">Payment Roadmap</span>
            </h2>
          </motion.div>

          {/* Tab Switcher with Sweep Shine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-[#121212] p-1.5 border border-white/10 rounded-sm self-start md:self-auto"
          >
            <button
              onClick={() => setActiveCategory('residential')}
              className={`relative overflow-hidden px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group ${activeCategory === 'residential'
                ? 'bg-[#dd9b2a] text-[#0B0B0B] shadow-[0_0_15px_rgba(200,162,97,0.3)]'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10">Residential Plots</span>
            </button>

            <button
              onClick={() => setActiveCategory('commercial')}
              className={`relative overflow-hidden px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group ${activeCategory === 'commercial'
                ? 'bg-[#dd9b2a] text-[#0B0B0B] shadow-[0_0_15px_rgba(200,162,97,0.3)]'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10">Commercial Plots</span>
            </button>
          </motion.div>
        </div>

        {/* Milestone Steps Roadmap Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {paymentSteps.map((item, index) => (
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
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#f5ac2e] bg-[#dd9b2a]/10 px-2.5 py-1 border border-[#C8A261]/30 rounded-xs">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-600 group-hover:text-[#f5ac2e]/60 transition-colors">
                    PHASE {item.step}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#f5ac2e] transition-colors duration-300 tracking-tight font-serif inline-block min-w-[100px]">
                    <AnimatedNumber value={item.percentage} />
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-wider uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#f5ac2e] font-medium tracking-wide uppercase mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f5ac2e]" />
                  <span>Guaranteed Rate</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f5ac2e] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
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
          /* REMOVED 'group' from this wrapper div so buttons hover independently */
          className="mt-12 bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden hover:border-[#C8A261]/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#181818] border border-white/10 rounded-sm text-[#f5ac2e]">
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

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Secondary CTA Button - Independent Hover */}
            <Button
              asChild
              variant="outline"
              className="relative overflow-hidden w-full sm:w-auto border-white/30 hover:border-[#C8A261] bg-black/40 hover:bg-black/70 text-white hover:text-[#f5ac2e] font-medium text-xs tracking-[0.15em] uppercase px-6 h-12 rounded-none backdrop-blur-sm transition-all duration-300 group"
            >
              <Link href="#calculator" className="flex items-center justify-center gap-2">
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <Calculator className="w-4 h-4 relative z-10" />
                <span className="relative z-10">CALCULATE INSTALLMENT</span>
              </Link>
            </Button>

            {/* Primary CTA Button - Independent Hover */}
            <Button
              asChild
              className="relative overflow-hidden w-full sm:w-auto bg-[#f5ac2e] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-6 h-12 rounded-none transition-all duration-300 group"
            >
              <a href="/nova-city-payment-plan.pdf" download className="flex items-center justify-center gap-2">
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <Download className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
                <span className="relative z-10">DOWNLOAD PDF PLAN</span>
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}