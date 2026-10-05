'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Trees, Wifi, Landmark, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    id: '01',
    icon: ShieldCheck,
    title: 'Gated Security & Surveillance',
    description: '24/7 multi-tier security featuring RFID automated gates, biometric checkpoint access, and high-definition CCTV coverage across all sectors.',
    tag: 'MAXIMUM PROTECTION',
    metric: '24/7 MONITORED',
    colSpan: 'md:col-span-2 lg:col-span-8',
    gradient: 'from-[#C8A261]/15 via-transparent to-transparent',
  },
  {
    id: '02',
    icon: Zap,
    title: '100% Underground Utilities',
    description: 'Zero overhead wires. Modern underground electricity grids, gas pipelines, water distribution, and high-speed fiber-optic lines.',
    tag: 'INFRASTRUCTURE',
    metric: 'ZERO OVERHEAD WIRES',
    colSpan: 'md:col-span-1 lg:col-span-4',
    gradient: 'from-[#C8A261]/10 via-transparent to-transparent',
  },
  {
    id: '03',
    icon: Landmark,
    title: '150 FT Main Boulevards',
    description: 'Wide, multi-lane carpeted boulevards engineered with dedicated pedestrian walkways, cycling tracks, and lush green central medians.',
    tag: 'ACCESSIBILITY',
    metric: 'UP TO 150 FT WIDE',
    colSpan: 'md:col-span-1 lg:col-span-4',
    gradient: 'from-[#C8A261]/10 via-transparent to-transparent',
  },
  {
    id: '04',
    icon: Trees,
    title: 'Lush Green Parks & Eco-Zones',
    description: 'Extensive eco-planning with tree-lined avenues, landscaped sector parks, botanical gardens, and dedicated family leisure zones.',
    tag: 'ECO LIFESTYLE',
    metric: 'CENTRAL PARKS',
    colSpan: 'md:col-span-1 lg:col-span-4',
    gradient: 'from-[#C8A261]/10 via-transparent to-transparent',
  },
  {
    id: '05',
    icon: Building2,
    title: 'Prime Commercial Hubs',
    description: 'Dedicated business avenues designed for premium retail outlets, corporate towers, dining arcades, and financial institutions.',
    tag: 'BUSINESS DISTRICT',
    metric: 'RETAIL & DINING',
    colSpan: 'md:col-span-1 lg:col-span-4',
    gradient: 'from-[#C8A261]/10 via-transparent to-transparent',
  },
  {
    id: '06',
    icon: Wifi,
    title: 'Smart City Infrastructure',
    description: 'Future-ready community tech including automated street lighting, smart energy metering, and an integrated mobile app for residents.',
    tag: 'SMART LIVING',
    metric: 'TECH-ENABLED',
    colSpan: 'md:col-span-2 lg:col-span-12',
    gradient: 'from-[#C8A261]/15 via-transparent to-transparent',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-[#090909] text-[#E5E5E5] relative overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C8A261]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C8A261]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A261]/40 bg-[#C8A261]/10 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A261] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A261] font-bold">
              COMMUNITY FEATURES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight"
          >
            Why Choose <span className="text-[#C8A261] font-semibold">NOVA City?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base mt-4 font-normal leading-relaxed"
          >
            Master-planned to set new benchmarks in modern luxury living, built with world-class urban infrastructure.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`${feature.colSpan} group relative bg-[#111111] border border-white/10 hover:border-[#C8A261]/70 p-7 sm:p-8 rounded-sm transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_15px_35px_rgba(200,162,97,0.12)]`}
              >
                {/* Subtle Hover Gradient Fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top Corner Frame Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C8A261]/0 group-hover:border-[#C8A261]/80 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#181818] border border-white/10 group-hover:border-[#C8A261]/50 group-hover:bg-[#C8A261]/10 rounded-sm text-[#C8A261] transition-all duration-300 shadow-inner">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gray-400 border border-white/10 px-2 py-0.5 rounded-xs bg-white/5">
                        {feature.metric}
                      </span>
                      <span className="text-xs font-mono text-gray-500 group-hover:text-[#C8A261] transition-colors font-bold">
                        {feature.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="mb-3">
                    <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#C8A261] mb-1 block">
                      {feature.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#C8A261] transition-colors duration-300 flex items-center justify-between">
                      <span>{feature.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#C8A261]" />
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Card Footer Bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 group-hover:text-white transition-colors font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A261]" />
                    <span>Included in Master Plan</span>
                  </div>
                  <div className="w-10 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-[#C8A261] transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}