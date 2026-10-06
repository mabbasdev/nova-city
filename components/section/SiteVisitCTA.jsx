'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Compass,
    Car,
    MapPin,
    Calendar,
    ArrowRight,
    X,
    Sparkles,
    Clock,
    Building2,
    CheckCircle2,
    PhoneCall
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SiteVisitCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        transport: 'self',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setIsModalOpen(false);
            setFormData({ name: '', phone: '', date: '', transport: 'self' });
        }, 2200);
    };

    return (
        <>
            <section className="relative py-32 overflow-hidden bg-[#070707] text-[#E5E5E5]">
                {/* Background Image Container with Parallax Zoom & Vignette */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 2.5, ease: 'easeOut' }}
                        className="w-full h-full bg-[url('/nova-city-gate.jpg')] bg-cover bg-center opacity-35 filter grayscale-[20%] brightness-[0.7]"
                    />
                    {/* Gradients for smooth section transitions and readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]" />
                    <div className="absolute inset-0 bg-radial-vignette opacity-80" />
                </div>

                {/* Dynamic Light Beam Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#dd9b2a]/15 blur-[170px] rounded-full pointer-events-none z-0" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    {/* Center Floating Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 sm:p-14 bg-[#0D0D0D]/85 border border-white/10 rounded-sm backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] group hover:border-[#C8A261]/60 transition-all duration-700"
                    >
                        {/* Gold Corner Frame Accents */}
                        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#C8A261]" />
                        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#C8A261]" />
                        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#C8A261]" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#C8A261]" />

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A261]/40 bg-[#dd9b2a]/10 mb-6">
                            <Compass className="w-3.5 h-3.5 text-[#f5ac2e] animate-spin-slow" />
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#f5ac2e] font-bold">
                                BOOK A SITE VISIT
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12] mb-6">
                            See <span className="text-[#f5ac2e] font-semibold">NOVA City</span> For Yourself
                        </h2>

                        {/* Subtext */}
                        <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-10">
                            Visit our development site and sales office — experience the rapid ground progress, grand entrance gate, and road infrastructure firsthand. Let the development speak for itself.
                        </p>

                        {/* CTAs Group */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase px-9 h-14 rounded-none transition-all duration-300 shadow-[0_0_25px_rgba(200,162,97,0.3)] hover:shadow-[0_0_35px_rgba(200,162,97,0.5)] group flex items-center justify-center gap-3"
                            >
                                <span>BOOK SITE VISIT NOW</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full sm:w-auto border-white/20 hover:border-[#C8A261] text-white hover:text-[#f5ac2e] hover:bg-white/5 font-semibold text-xs tracking-[0.18em] uppercase px-8 h-14 rounded-none transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <a href="tel:+923000000000">
                                    <PhoneCall className="w-4 h-4 text-[#f5ac2e]" />
                                    <span>CALL ADVISOR DIRECT</span>
                                </a>
                            </Button>
                        </div>

                        {/* Feature Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left">
                            <div className="flex items-center gap-3 p-3 bg-[#121212]/80 border border-white/5 rounded-xs">
                                <div className="p-2 bg-[#1A1A1A] text-[#f5ac2e] rounded-xs">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-white">Guided VIP Tour</h4>
                                    <p className="text-[10px] text-gray-400">Personalized site walk</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-[#121212]/80 border border-white/5 rounded-xs">
                                <div className="p-2 bg-[#1A1A1A] text-[#f5ac2e] rounded-xs">
                                    <Car className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-white">Pickup Service</h4>
                                    <p className="text-[10px] text-gray-400">Free transport option</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-[#121212]/80 border border-white/5 rounded-xs">
                                <div className="p-2 bg-[#1A1A1A] text-[#f5ac2e] rounded-xs">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-white">Site Office Briefing</h4>
                                    <p className="text-[10px] text-gray-400">Map & NOC review</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* Interactive Booking Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-lg bg-[#0F0F0F] border border-[#C8A261]/40 p-6 sm:p-8 rounded-sm shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-sm border border-white/10 hover:border-white/30"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-6">
                                <span className="text-[10px] font-mono font-bold tracking-widest text-[#f5ac2e] uppercase">
                                    OFFICIAL SITE VISIT APPOINTMENT
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-1">Schedule Your Inspection</h3>
                                <p className="text-xs text-gray-400 mt-1">
                                    Our sales executive will reserve your slot and provide site coordinates.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                                    <CheckCircle2 className="w-12 h-12 text-[#f5ac2e] animate-bounce" />
                                    <h4 className="text-lg font-semibold text-white">Site Visit Scheduled!</h4>
                                    <p className="text-xs text-gray-400 max-w-xs">
                                        Our team will contact you shortly to confirm your slot and timing details.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. Muhammad Abbas"
                                            className="w-full bg-[#161616] border border-white/15 focus:border-[#C8A261] text-white text-xs px-4 py-3 rounded-none focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                                            Phone / WhatsApp Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+92 300 0000000"
                                            className="w-full bg-[#161616] border border-white/15 focus:border-[#C8A261] text-white text-xs px-4 py-3 rounded-none focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full bg-[#161616] border border-white/15 focus:border-[#C8A261] text-white text-xs px-4 py-3 rounded-none focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                                            Transport Preference
                                        </label>
                                        <select
                                            value={formData.transport}
                                            onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                                            className="w-full bg-[#161616] border border-white/15 focus:border-[#C8A261] text-white text-xs px-4 py-3 rounded-none focus:outline-none transition-colors"
                                        >
                                            <option value="self">Self Drive / Own Car</option>
                                            <option value="pickup">Request Complimentary Site Pickup</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#dd9b2a] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-xs tracking-[0.18em] uppercase h-12 rounded-none transition-all duration-300 mt-4"
                                    >
                                        CONFIRM APPOINTMENT
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}