'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Home, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <section className="min-h-screen bg-[#070707] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A261]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#dd9b2a]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="p-8 sm:p-12 bg-[#0E0E0E] border border-white/10 rounded-sm relative overflow-hidden shadow-2xl"
                >
                    {/* Top Gold Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A261] to-transparent" />

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dd9b2a]/10 border border-[#C8A261]/30 mb-6">
                        <Compass className="w-3.5 h-3.5 text-[#f5ac2e] animate-spin-slow" />
                        <span className="text-[10px] font-bold text-[#f5ac2e] uppercase tracking-[0.2em]">
                            DESTINATION UNMAPPED
                        </span>
                    </div>

                    {/* Big 404 Display */}
                    <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-white/20 tracking-tighter mb-2">
                        404
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight mb-3">
                        Page <span className="text-[#f5ac2e] font-semibold">Not Found</span>
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
                        The parcel or page you are searching for does not exist or may have been relocated within our VIP network.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                        <Button
                            asChild
                            className="relative overflow-hidden w-full sm:w-auto bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase px-7 h-12 rounded-none transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            <Link href="/">
                                {/* Sweep Shine Effect */}
                                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                <Home className="w-4 h-4 relative z-10" />
                                <span className="relative z-10">RETURN HOME</span>
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto border-white/15 hover:border-[#C8A261]/50 bg-transparent text-white hover:text-[#f5ac2e] hover:bg-white/5 font-semibold text-xs tracking-[0.18em] uppercase px-7 h-12 rounded-none transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>GO BACK</span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}