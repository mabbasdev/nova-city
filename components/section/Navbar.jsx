'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    ChevronDown,
    Menu,
    X,
    Phone,
    ArrowRight,
    Building2,
    ShieldCheck,
    Sparkles,
    Trees,
    MapPin,
    Layers,
    CheckCircle2
} from 'lucide-react';

const NAV_ITEMS = [
    {
        name: 'About',
        href: '#about',
        isMega: true,
        columns: [
            {
                title: 'Overview & Vision',
                items: [
                    { name: 'About Nova City', href: '#about-nova-city', desc: 'Master-planned housing community' },
                    { name: "Chairman's Message", href: '#chairmans-message', desc: 'Leadership vision & commitment' },
                    { name: 'Vision & Mission', href: '#vision-mission', desc: 'Benchmark standards in real estate' },
                ]
            },
            {
                title: 'Key Information',
                items: [
                    { name: 'Location & Accessibility', href: '#location', desc: 'Direct access to Ring Road & CPEC' },
                    { name: 'Our Leadership Team', href: '#team', desc: 'Experienced engineering experts' },
                    { name: "Frequently Asked FAQs", href: '#faqs', desc: 'Quick answers for buyers' },
                ]
            }
        ]
    },
    {
        name: 'Amenities',
        href: '#amenities',
        isMega: true,
        columns: [
            {
                title: 'Community Features',
                items: [
                    { name: 'Gated Security & Surveillance', href: '#security', desc: '24/7 high-tech smart security' },
                    { name: 'Botanical Parks & Open Spaces', href: '#parks', desc: 'Serene green eco-living' },
                    { name: 'Grand Central Mosque', href: '#mosque', desc: 'Spiritual architecture' },
                ]
            },
            {
                title: 'Neighborhood & Lifestyle',
                items: [
                    { name: 'Commercial Malls & Towers', href: '#commercial-hub', desc: 'Prime business & retail centers' },
                    { name: 'International Standard Schools', href: '#education', desc: 'Top-tier educational facilities' },
                    { name: 'Healthcare & Medical City', href: '#healthcare', desc: '24/7 emergency care facilities' },
                ]
            }
        ]
    },
    {
        name: 'Projects',
        href: '#projects',
        isMega: true,
        columns: [
            {
                title: 'Flagship Developments',
                items: [
                    { name: 'Designer Villas', href: '#designer-villas', desc: 'Luxury pre-built smart homes' },
                    { name: 'Nova One High-Rise', href: '#nova-one', desc: 'Iconic business & luxury suits' },
                ]
            },
            {
                title: 'Plots & Extensions',
                items: [
                    { name: 'Residential Plots', href: '#residential', desc: '3.5, 5, 8, 10, 14 Marla & 1 Kanal' },
                    { name: 'Commercial Plots', href: '#commercial-plots', desc: 'High ROI commercial avenues' },
                ]
            }
        ]
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
                isScrolled
                    ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                    : 'bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3.5 group">
                        <div className="relative w-10 h-10 rounded bg-[#141414] border border-[#C8A261]/50 flex items-center justify-center group-hover:border-[#C8A261] transition-all duration-300">
                            <span className="font-bold text-[#C8A261] text-base tracking-widest">NC</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-white tracking-[0.22em] text-lg leading-tight group-hover:text-[#C8A261] transition-colors">
                                NOVA CITY
                            </span>
                            <span className="text-[10px] text-[#C8A261]/80 tracking-[0.3em] font-medium uppercase mt-0.5">
                                ISLAMABAD
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {NAV_ITEMS.map((item, idx) => (
                            <div key={item.name} className="flex items-center">
                                {idx > 0 && (
                                    <span className="text-white/10 px-2.5 text-xs font-light select-none">|</span>
                                )}

                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1.5 text-[13px] uppercase tracking-widest font-medium text-gray-300 hover:text-[#C8A261] transition-colors px-3 py-2 rounded-md group"
                                    >
                                        <span>{item.name}</span>
                                        {item.columns && (
                                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C8A261] group-hover:rotate-180 transition-transform duration-200" />
                                        )}
                                    </Link>

                                    {/* Multi-Column Mega Dropdown Menu */}
                                    {item.columns && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[#121212]/95 border border-white/10 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-5 backdrop-blur-2xl z-50 grid grid-cols-2 gap-6"
                                                >
                                                    {item.columns.map((col, cIdx) => (
                                                        <div key={cIdx} className="space-y-3">
                                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8A261] border-b border-white/10 pb-2">
                                                                {col.title}
                                                            </div>
                                                            <div className="space-y-1">
                                                                {col.items.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        className="block p-2.5 rounded-lg hover:bg-[#dd9b2a]/10 border border-transparent hover:border-[#C8A261]/20 transition-all duration-200 group/sub"
                                                                    >
                                                                        <div className="text-xs font-semibold text-gray-200 group-hover/sub:text-[#C8A261] transition-colors tracking-wide">
                                                                            {subItem.name}
                                                                        </div>
                                                                        <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1 font-normal">
                                                                            {subItem.desc}
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Right CTA */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Button
                            asChild
                            className="relative overflow-hidden bg-[#f5ac2e] hover:bg-[#dd9b2a] text-[#0B0B0B] font-semibold text-[11px] uppercase tracking-[0.15em] px-6 h-10 rounded transition-all duration-300 group"
                        >
                            <Link href="#book" className="flex items-center gap-2">
                                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                <span className="relative z-10">Book Site Visit</span>
                                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:hidden text-white bg-[#141414] border border-white/10 p-2.5 rounded-md hover:text-[#C8A261] transition-colors"
                        aria-label="Open Navigation Drawer"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Right Sliding Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Dark Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
                        />

                        {/* Right Drawer Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-[#0E0E0E] border-l border-white/10 p-6 z-50 lg:hidden flex flex-col justify-between overflow-y-auto"
                        >
                            <div className="space-y-6">
                                {/* Drawer Header */}
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-[#141414] border border-[#C8A261]/50 flex items-center justify-center">
                                            <span className="font-bold text-[#C8A261] text-xs tracking-widest">NC</span>
                                        </div>
                                        <span className="font-semibold text-white tracking-[0.18em] text-sm uppercase">
                                            NOVA CITY
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-gray-400 hover:text-white p-2 rounded-md bg-white/5"
                                        aria-label="Close Navigation Drawer"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Drawer Nav Items */}
                                <nav className="space-y-4">
                                    {NAV_ITEMS.map((item) => (
                                        <div key={item.name} className="space-y-2 border-b border-white/5 pb-3">
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-sm font-bold uppercase tracking-wider text-[#C8A261] flex items-center justify-between"
                                            >
                                                <span>{item.name}</span>
                                            </Link>

                                            {/* Accordion List for Mega Menu Items on Mobile */}
                                            {item.columns && (
                                                <div className="pl-3 space-y-3 pt-1 border-l border-[#C8A261]/20">
                                                    {item.columns.map((col, cIdx) => (
                                                        <div key={cIdx} className="space-y-1.5">
                                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                                {col.title}
                                                            </div>
                                                            {col.items.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="block text-xs text-gray-300 hover:text-white py-1"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Drawer Footer Actions */}
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <a
                                    href="tel:+923111114480"
                                    className="flex items-center gap-3 text-xs text-gray-300 hover:text-[#C8A261]"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Phone className="w-3.5 h-3.5 text-[#C8A261]" />
                                    </div>
                                    <span className="font-mono">+92 311 111 4480</span>
                                </a>

                                <Button
                                    asChild
                                    className="relative overflow-hidden w-full bg-[#f5ac2e] hover:bg-[#dd9b2a] text-[#0B0B0B] font-bold text-xs tracking-wider uppercase h-11 group"
                                >
                                    <Link href="#book" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                                        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                                        <span className="relative z-10">Book Site Visit</span>
                                        <ArrowRight className="w-4 h-4 relative z-10" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}