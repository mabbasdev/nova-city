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
    Building,
    Sparkles,
    MapPin,
    ShieldCheck,
} from 'lucide-react';

const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    {
        name: 'About',
        href: '#about',
        dropdown: [
            { name: 'Project Overview', href: '#about', desc: 'Master-planned housing community' },
            { name: 'Developer Profile', href: '#developers', desc: 'Nova City Developers vision' },
            { name: 'NOC & Legal Approvals', href: '#noc', desc: 'Verified legal status' },
        ],
    },
    {
        name: 'Amenities',
        href: '#amenities',
        dropdown: [
            { name: 'Gated Security', href: '#amenities', desc: '24/7 high-tech surveillance' },
            { name: 'Parks & Recreation', href: '#amenities', desc: 'Serene botanical grounds' },
            { name: 'Commercial Hub', href: '#amenities', desc: 'Shopping malls & business towers' },
        ],
    },
    {
        name: 'Projects',
        href: '#projects',
        dropdown: [
            { name: 'Residential Plots', href: '#projects', desc: '3.5, 5, 8, 10, 14 Marla & 1 Kanal' },
            { name: 'Commercial Plots', href: '#projects', desc: 'Prime business locations' },
            { name: 'Nova One', href: '#projects', desc: 'Iconic high-rise tower' },
        ],
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${isScrolled
                    ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                    : 'bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3.5 group">
                        <div className="relative w-10 h-10 rounded bg-[#141414] border border-[#C8A261]/50 flex items-center justify-center group-hover:border-[#C8A261] transition-all duration-300 shadow-[0_0_15px_rgba(200,162,97,0.15)]">
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

                    {/* Navigation Links */}
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
                                        {item.dropdown && (
                                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C8A261] group-hover:rotate-180 transition-transform duration-200" />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                    transition={{ duration: 0.18, ease: 'easeOut' }}
                                                    className="absolute left-0 mt-2 w-64 bg-[#121212]/95 border border-white/10 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2 backdrop-blur-2xl z-50"
                                                >
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block p-3 rounded-md hover:bg-[#C8A261]/10 border border-transparent hover:border-[#C8A261]/20 transition-all duration-200 group/sub"
                                                        >
                                                            <div className="text-xs font-semibold text-gray-200 group-hover/sub:text-[#C8A261] transition-colors uppercase tracking-wider">
                                                                {subItem.name}
                                                            </div>
                                                            <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1 font-normal">
                                                                {subItem.desc}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Right Action Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a
                            href="tel:+923111114480"
                            className="flex items-center gap-2.5 text-xs tracking-wider text-gray-300 hover:text-[#C8A261] transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover:border-[#C8A261]/50 transition-colors">
                                <Phone className="w-3.5 h-3.5 text-[#C8A261]" />
                            </div>
                            <span className="font-medium">+92 311 111 4480</span>
                        </a>

                        <Button
                            asChild
                            className="bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-[11px] uppercase tracking-[0.15em] px-6 h-10 rounded transition-all duration-300 shadow-[0_0_20px_rgba(200,162,97,0.2)] hover:shadow-[0_0_25px_rgba(200,162,97,0.4)] group"
                        >
                            <Link href="#book" className="flex items-center gap-2">
                                <span>Book Site Visit</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white bg-[#141414] border border-white/10 p-2.5 rounded-md hover:text-[#C8A261] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Animated Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-[#121212] border-b border-white/10 px-6 pt-4 pb-6 mt-3 shadow-2xl space-y-4"
                    >
                        <nav className="flex flex-col space-y-1">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.name} className="py-2 border-b border-white/5 last:border-0">
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-sm font-medium uppercase tracking-wider text-gray-200 hover:text-[#C8A261] transition-colors flex items-center justify-between"
                                    >
                                        <span>{item.name}</span>
                                        {item.dropdown && <ChevronDown className="w-4 h-4 text-gray-500" />}
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        <div className="pt-3 flex flex-col gap-3">
                            <a
                                href="tel:+923111114480"
                                className="flex items-center gap-2.5 text-sm text-gray-300"
                            >
                                <Phone className="w-4 h-4 text-[#C8A261]" />
                                <span>+92 311 111 4480</span>
                            </a>
                            <Button
                                asChild
                                className="w-full bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-xs tracking-wider uppercase h-11"
                            >
                                <Link href="#book" onClick={() => setMobileMenuOpen(false)}>
                                    Book Site Visit
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}