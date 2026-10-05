'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewsletterSection() {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 4000);
    };

    return (
        <section className="bg-[#070707] py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-8 sm:p-12 bg-[#0E0E0E] border border-white/10 rounded-sm relative overflow-hidden shadow-2xl group hover:border-[#C8A261]/50 transition-colors"
                >
                    {/* Top Gold Gradient Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A261] to-transparent" />

                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="space-y-2 max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A261]/10 border border-[#C8A261]/30">
                                <Sparkles className="w-3.5 h-3.5 text-[#C8A261]" />
                                <span className="text-[10px] font-bold text-[#C8A261] uppercase tracking-[0.2em]">
                                    EXECUTIVE DISPATCH
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                                Get <span className="text-[#C8A261] font-semibold">VIP Priority</span> Plot Releases & Map Updates
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Be the first to receive revised installment schedules, balloting schedules, and RDA / NOC approvals directly to your inbox.
                            </p>
                        </div>

                        <div className="w-full lg:w-auto">
                            {subscribed ? (
                                <div className="flex items-center gap-2 text-[#C8A261] text-xs font-semibold bg-[#C8A261]/10 border border-[#C8A261]/40 px-6 py-3.5 rounded-none">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Your email is registered for VIP announcements.</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2 w-full lg:w-[420px]">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter official email address"
                                        className="flex-1 bg-[#141414] border border-white/15 focus:border-[#C8A261] text-white text-xs px-4 py-3.5 rounded-none focus:outline-none transition-colors placeholder:text-gray-500"
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase px-7 h-[46px] rounded-none transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <span>JOIN VIP</span>
                                        <Send className="w-3.5 h-3.5" />
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}