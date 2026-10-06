'use client';

import { useState, useEffect } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ChevronRight,
    ArrowUp,
    MessageCircle,
    Building2,
    ShieldCheck,
    Code,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';

// Custom Social Icons
const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const YoutubeIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const TikTokIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.33V9.05a8.16 8.16 0 004.92 1.62V7.22a4.85 4.85 0 01-1-.53z" />
    </svg>
);

export default function Footer() {
    const [isOpenNow, setIsOpenNow] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();

            if (day >= 1 && day <= 5) {
                setIsOpenNow(hour >= 10 && hour < 18);
            } else if (day === 6) {
                setIsOpenNow(hour >= 11 && hour < 17);
            } else {
                setIsOpenNow(false);
            }
        };

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        checkStatus();
        window.addEventListener('scroll', handleScroll);
        const interval = setInterval(checkStatus, 60000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#050505] text-[#E5E5E5] relative border-t border-white/10 pt-20 pb-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Main Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-[#C8A261] flex items-center justify-center transform rotate-45 bg-[#dd9b2a]/10">
                                <span className="transform -rotate-45 font-mono text-sm font-bold text-[#f5ac2e]">NC</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-[0.2em] text-white uppercase font-serif group-hover:text-[#f5ac2e] transition-colors">
                                    NOVA CITY
                                </span>
                                <span className="text-xs tracking-[0.4em] text-[#f5ac2e] font-semibold uppercase">
                                    ISLAMABAD
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                            A modern master-planned luxury destination setting benchmark standards directly adjacent to the CPEC Route and Rawalpindi Ring Road interchanges.
                        </p>

                        {/* Social Connect Icons */}
                        <div className="pt-2">
                            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                                OFFICIAL CONNECT
                            </span>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: FacebookIcon, href: '#', label: 'Facebook' },
                                    { icon: InstagramIcon, href: '#', label: 'Instagram' },
                                    { icon: TikTokIcon, href: '#', label: 'TikTok' },
                                    { icon: MessageCircle, href: 'https://wa.me/923000000000', label: 'WhatsApp' },
                                    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
                                ].map((social, i) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="p-2 rounded-full text-gray-400 bg-white/5 border border-white/10 hover:border-[#C8A261]/60 hover:text-[#f5ac2e] hover:bg-[#dd9b2a]/10 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-out flex items-center justify-center"
                                        >
                                            <IconComponent className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* EXPLORE COLUMN */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5ac2e] mb-4">
                            EXPLORE
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'About Nova City', href: '#about' },
                                { label: 'Location & Accessibility', href: '#location' },
                                { label: 'Master Plan & Features', href: '#amenities' },
                                { label: 'Payment Schedule', href: '#payment-plan' },
                                { label: 'Development Progress', href: '#gallery' },
                                { label: 'Contact Advisory Desk', href: '#contact' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors font-medium"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-[#f5ac2e] shrink-0" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* PORTALS COLUMN */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5ac2e] mb-4">
                            PORTALS
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Customer Portal', href: '#customer-portal' },
                                { label: 'Dealer Portal', href: '#dealer-portal' },
                                { label: 'NOC Verification', href: '#noc' },
                                { label: 'E-File Verification', href: '#verification' },
                                { label: 'Frequently Asked FAQs', href: '#faq' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-gray-200 hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors font-medium"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-[#f5ac2e] shrink-0" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HEAD OFFICE COLUMN */}
                    <div className="lg:col-span-3 space-y-3">
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5ac2e] flex items-center gap-2">
                                <Building2 className="w-3.5 h-3.5" />
                                <span>HEAD OFFICE</span>
                            </h4>

                            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                <span className={`h-1.5 w-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                                <span className={isOpenNow ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                                    {isOpenNow ? 'OFFICE OPEN' : 'AFTER HOURS'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#f5ac2e] shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider block">
                                        LOCATION
                                    </span>
                                    <p className="text-xs sm:text-[13px] text-gray-200 leading-snug">
                                        Razia Sharif Plaza, Block F, G 7/3 Blue Area, Islamabad.
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#f5ac2e] shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider block">
                                        PHONE UAN
                                    </span>
                                    <a
                                        href="tel:0511111116682"
                                        className="text-xs sm:text-[13px] font-mono text-gray-200 hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors font-medium"
                                    >
                                        051 111 111 66 82
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#f5ac2e] shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider block">
                                        EMAIL ENQUIRIES
                                    </span>
                                    <a
                                        href="mailto:info@novacity.pk"
                                        className="text-xs sm:text-[13px] text-gray-200 hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors font-medium"
                                    >
                                        info@novacity.pk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Operating Hours & RDA Strip */}
                <div className="py-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
                        <Clock className="w-4 h-4 text-[#f5ac2e] shrink-0" />
                        <span className="font-bold uppercase tracking-wider text-xs text-gray-400">HOURS (PKT):</span>
                        <span>Mon–Fri: <strong className="text-white font-semibold">10:00 AM — 6:00 PM</strong></span>
                        <span className="text-gray-600 hidden sm:inline">•</span>
                        <span>Sat: <strong className="text-white font-semibold">11:00 AM — 5:00 PM</strong></span>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f5ac2e] uppercase tracking-wider">
                        <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                        <span>PHATA & RDA APPROVED MASTER PLAN</span>
                    </div>
                </div>

                {/* Copyright & Legal Links */}
                <div className="pt-6 pb-3 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                        <span>© 2026 NOVA City.</span>
                        <span className="text-gray-600">•</span>
                        <span>A <strong className="text-white font-semibold">NOVA Group</strong> Project.</span>
                        <span className="text-gray-600">•</span>
                        <span>All Rights Reserved.</span>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
                        <Link href="#privacy" className="hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors">Privacy Policy</Link>
                        <span className="text-gray-600">•</span>
                        <Link href="#terms" className="hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors">Terms of Service</Link>
                        <span className="text-gray-600">•</span>
                        <Link href="#disclaimer" className="hover:text-[#f5ac2e] hover:underline underline-offset-4 transition-colors">NOC & Legal Disclaimer</Link>
                    </div>
                </div>

                {/* Developer Attribution */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#f5ac2e]" />
                        <span>Designed & Engineered for High Performance</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Code className="w-3.5 h-3.5 text-[#f5ac2e]" />
                        <span>Crafted by</span>
                        <a
                            href="https://abbas-portfolio-dev.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f5ac2e] hover:underline underline-offset-2 font-medium hover:text-white transition-colors"
                        >
                            Muhammad Abbas
                        </a>
                    </div>
                </div>

            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                aria-label="Back to Top"
                className={`fixed bottom-6 right-6 z-50 p-3 bg-[#0A0A0A] border border-[#C8A261]/60 text-[#f5ac2e] hover:text-white rounded-full transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>

        </footer>
    );
}