'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, MapPin, Compass, Sparkles, Building } from 'lucide-react';

const STATS = [
  { label: 'TOTAL AREA', value: '10,000+ Kanals' },
  { label: 'PLOT SIZES', value: '5M – 1 Kanal' },
  { label: 'PHASES', value: 'Phase I & II' },
  { label: 'LOCATION', value: 'Main GT Road' },
];

const LOCATIONS = ['ISLAMABAD', 'RAWALPINDI', 'CPEC ROUTE', 'PESHAWAR'];

const HIGHLIGHTS = [
  { icon: Compass, title: 'M-14 INTERCHANGE', subtitle: 'Direct Access Point' },
  { icon: Sparkles, title: 'MODERN AMENITIES', subtitle: 'World-Class Standard' },
  { icon: Building, title: '120 FT MAIN BOULEVARD', subtitle: 'Carpeted Roads' },
];

function AnimatedCounter({ target = 5000, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0B0B0B] text-[#E5E5E5] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dd9b2a]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Balanced Height Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex flex-col justify-between"
          >
            {/* Top Bar: Strategic Connectivity Locations */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f5ac2e]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#f5ac2e] font-semibold">
                  STRATEGIC CONNECTIVITY
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium tracking-[0.18em]">
                {LOCATIONS.map((loc, idx) => (
                  <span key={loc} className="flex items-center gap-2">
                    <span>{loc}</span>
                    {idx < LOCATIONS.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-[#dd9b2a]/60" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* PREVIOUSLY RED EMPTY AREA: Luxury Architectural Highlight Bar Grid */}
            <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-[#121212]/80 border border-white/10 rounded-sm backdrop-blur-md">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start p-2 sm:p-2.5 border-r border-white/5 last:border-r-0"
                  >
                    <Icon className="w-4 h-4 text-[#f5ac2e] mb-1" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-wider uppercase leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[8px] text-gray-400 font-medium tracking-wide mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Main Image Frame aligned cleanly with right column */}
            <div className="relative p-3 sm:p-4">
              {/* Outer Wireframe Borders & Gold Accent Corners */}
              <div className="absolute inset-0 border border-[#C8A261]/30 rounded-sm pointer-events-none bg-gradient-to-br from-[#C8A261]/5 via-transparent to-transparent" />
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C8A261]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C8A261]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C8A261]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C8A261]" />

              {/* Main Image */}
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group z-10">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                  alt="Nova City Entrance Gate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-transparent to-black/20" />

                {/* NOC Status Pill */}
                <div className="absolute top-4 left-4 bg-[#0B0B0B]/85 border border-[#C8A261]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f5ac2e]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                    NOC APPROVED
                  </span>
                </div>
              </div>

              {/* Inset Detail Image */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-5 left-7 w-40 sm:w-48 aspect-[4/3] rounded border border-[#C8A261]/40 shadow-2xl overflow-hidden z-20 hidden sm:block group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Nova City Modern Villa"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>

              {/* Dynamic Counter Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 right-6 sm:right-8 bg-[#121212]/95 border border-[#C8A261]/60 px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] rounded-sm backdrop-blur-xl z-30"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#f5ac2e] tracking-tight flex items-center">
                  <AnimatedCounter target={5000} duration={2.5} />
                  <span>+</span>
                </div>
                <div className="text-[10px] text-gray-300 font-semibold uppercase tracking-[0.22em] mt-0.5">
                  PLOTS RESERVED
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[1px] w-8 bg-[#dd9b2a]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f5ac2e] font-semibold">
                ABOUT NOVA CITY
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6">
              Pakistan&apos;s Most Anticipated{' '}
              <span className="text-[#f5ac2e] font-semibold block sm:inline">Community</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-8">
              <p>
                NOVA City is a meticulously master-planned residential community on Main GT Road, offering an unparalleled standard of living within easy reach of Pakistan&apos;s capital.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                NOVA City combines premium residential and commercial plots with complete infrastructure, gated security, and essential lifestyle amenities across thousands of kanals.
              </p>
            </div>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-6 py-6 border-y border-white/10 mb-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-[#C8A261] pl-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button
                asChild
                className="bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-8 h-12 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(200,162,97,0.2)] hover:shadow-[0_0_25px_rgba(200,162,97,0.35)] group"
              >
                <Link href="#about" className="flex items-center gap-2">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}