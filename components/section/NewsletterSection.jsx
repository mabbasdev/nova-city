'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewsletterSection() {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 4500);
    };

    return (
        <section className="bg-[#070707] py-12 sm:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 sm:p-10 lg:p-12 bg-[#0E0E0E] border border-white/10 rounded-sm relative overflow-hidden shadow-2xl transition-colors hover:border-[#C8A261]/50"
                >
                    {/* Top Gold Gradient Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A261] to-transparent" />

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
                        {/* Text Content */}
                        <div className="space-y-2.5 max-w-xl w-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dd9b2a]/10 border border-[#C8A261]/30">
                                <Sparkles className="w-3.5 h-3.5 text-[#f5ac2e]" />
                                <span className="text-[10px] font-bold text-[#f5ac2e] uppercase tracking-[0.2em]">
                                    EXECUTIVE DISPATCH
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white tracking-tight leading-snug">
                                Get <span className="text-[#f5ac2e] font-semibold">VIP Priority</span> Plot Releases & Map Updates
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                Be the first to receive revised installment schedules, balloting schedules, and RDA / NOC approvals directly to your inbox.
                            </p>
                        </div>

                        {/* Subscription Form / Success Message Container */}
                        <div className="w-full lg:w-auto min-w-0">
                            <AnimatePresence mode="wait">
                                {subscribed ? (
                                    /* Success State - Full Responsive Container */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative flex items-center justify-center sm:justify-start gap-3 text-[#f5ac2e] text-xs sm:text-sm font-semibold bg-[#dd9b2a]/10 border border-[#C8A261]/60 px-5 sm:px-7 py-3.5 sm:py-4 rounded-none overflow-hidden shadow-[0_0_30px_rgba(200,162,97,0.25)] text-center sm:text-left w-full lg:max-w-[440px]"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0.8, x: '-100%' }}
                                            animate={{ opacity: 0, x: '100%' }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8A261]/40 to-transparent pointer-events-none"
                                        />

                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.15 }}
                                            className="flex-shrink-0"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-[#f5ac2e]" />
                                        </motion.div>

                                        <span className="tracking-wide">
                                            Your email is registered for VIP announcements.
                                        </span>
                                    </motion.div>
                                ) : (
                                    /* Input & Button Form - Responsive Stack on Mobile, Inline on Desktop */
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubscribe}
                                        className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-2 w-full lg:w-[440px]"
                                    >
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter official email address"
                                            className="w-full sm:flex-1 bg-[#141414] border border-white/15 focus:border-[#C8A261] text-white text-sm sm:text-base px-4 h-12 rounded-none focus:outline-none transition-colors placeholder:text-gray-500 font-normal leading-none"
                                        />
                                        <Button
                                            type="submit"
                                            className="relative overflow-hidden w-full sm:w-auto bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase px-7 h-12 rounded-none transition-all duration-300 flex items-center justify-center gap-2 group flex-shrink-0"
                                        >
                                            {/* Sweep Shine Effect */}
                                            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                            
                                            <span className="relative z-10">JOIN VIP</span>
                                            <Send className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}