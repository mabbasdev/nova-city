'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hammer, Home, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ComingSoon() {
    const [subscribed, setSubscribed] = useState(false);

    const handleNotify = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 4500);
    };

    return (
        <section className="min-h-screen bg-[#070707] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
            {/* Ambient Gold Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A261]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#dd9b2a]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="p-8 sm:p-12 lg:p-16 bg-[#0E0E0E] border border-white/10 rounded-sm relative overflow-hidden shadow-2xl"
                >
                    {/* Top Gold Gradient Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A261] to-transparent" />

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dd9b2a]/10 border border-[#C8A261]/30 mb-8">
                        <Hammer className="w-3.5 h-3.5 text-[#f5ac2e]" />
                        <span className="text-[10px] sm:text-xs font-bold text-[#f5ac2e] uppercase tracking-[0.22em]">
                            EXECUTIVE PORTAL UNDER DEVELOPMENT
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
                        Something <span className="text-[#f5ac2e] font-semibold">Exclusive</span> is on the Horizon
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
                        We are currently fine-tuning this module to bring you interactive master plans, live inventory tracking, and VIP member features.
                    </p>

                    {/* Notify Form / Success Animation */}
                    <div className="max-w-md mx-auto mb-10">
                        {subscribed ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-2.5 text-[#f5ac2e] text-xs sm:text-sm font-semibold bg-[#dd9b2a]/10 border border-[#C8A261]/60 px-6 py-3.5 rounded-none shadow-[0_0_25px_rgba(200,162,97,0.2)]"
                            >
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                <span>You will be notified as soon as launch goes live!</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-2 w-full">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full sm:flex-1 bg-[#141414] border border-white/15 focus:border-[#C8A261] text-white text-sm px-4 h-12 rounded-none focus:outline-none transition-colors placeholder:text-gray-500 font-normal"
                                />
                                <Button
                                    type="submit"
                                    className="relative overflow-hidden w-full sm:w-auto bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase px-6 h-12 rounded-none transition-all duration-300 flex items-center justify-center gap-2 group flex-shrink-0"
                                >
                                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                    <span className="relative z-10">NOTIFY ME</span>
                                    <Send className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Navigation Back */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-center">
                        <Button
                            asChild
                            variant="ghost"
                            className="text-gray-400 hover:text-white hover:bg-white/5 text-xs tracking-[0.15em] uppercase gap-2 rounded-none"
                        >
                            <Link href="/">
                                <Home className="w-4 h-4" />
                                <span>Return to Main Website</span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}