'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        layout: 'left',
        subtitle: 'NOVA CITY FATEH JANG',
        title: 'Live Above Expectations',
        highlightText: 'Expectations',
        description:
            'A master-planned community where premium living meets natural serenity near Pakistan\'s capital.',
        primaryCta: { label: 'Book Site Visit', href: '#book' },
        secondaryCta: { label: 'Discover More', href: '#about' },
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
            // 'https://novacity.pk/wp-content/uploads/2026/07/Gemini_Generated_Image_c7clwtc7clwtc7cl.png',
    },
    {
        id: 2,
        layout: 'center',
        subtitle: 'EXCLUSIVITY & ELEGANCE',
        title: 'Where Architecture Meets Modern Luxury',
        highlightText: 'Modern Luxury',
        description:
            'Experience state-of-the-art infrastructure, world-class amenities, and breathtaking natural views.',
        primaryCta: { label: 'Explore Projects', href: '#projects' },
        secondaryCta: { label: 'Watch Video Tour', href: '#video' },
        image:
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80',
    },
    {
        id: 3,
        layout: 'right',
        subtitle: 'PRIME LOCATION & CONNECTIVITY',
        title: 'Connected to the Heart of Islamabad',
        highlightText: 'Islamabad',
        description:
            'Seamless access via M-14 Motorway Interchange & CPEC Route for ultimate convenience and growth.',
        primaryCta: { label: 'View Location Map', href: '#location' },
        secondaryCta: { label: 'Download Brochure', href: '#brochure' },
        image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    },
    {
        id: 4,
        layout: 'empty',
        subtitle: '',
        title: '',
        highlightText: '',
        description: '',
        image:
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=80',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play timer (6 seconds)
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const slide = SLIDES[currentSlide];

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    // Helper for dynamic slide alignment
    const getAlignmentClass = (layout) => {
        switch (layout) {
            case 'center':
                return 'items-center text-center mx-auto max-w-3xl';
            case 'right':
                return 'items-end text-right ml-auto max-w-2xl';
            case 'left':
            default:
                return 'items-start text-left max-w-2xl';
        }
    };

    return (
        <section
            className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0B0B0B]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Image Carousel with Animated Transitions */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slide.image}
                        alt={slide.title || 'Nova City Islamabad'}
                        fill
                        priority={currentSlide === 0}
                        sizes="100vw"
                        className="object-cover object-center"
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/30" />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Skeleton Initial Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 z-20 flex items-center bg-[#0B0B0B] px-6 lg:px-12">
                    <div className="max-w-2xl space-y-4 w-full">
                        <Skeleton className="h-4 w-48 bg-white/10" />
                        <Skeleton className="h-16 w-3/4 bg-white/10" />
                        <Skeleton className="h-6 w-full bg-white/10" />
                        <div className="flex gap-4 pt-4">
                            <Skeleton className="h-11 w-36 bg-white/10" />
                            <Skeleton className="h-11 w-36 bg-white/10" />
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Slide Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20">
                {slide.layout !== 'empty' && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`flex flex-col ${getAlignmentClass(slide.layout)}`}
                        >
                            {/* Subtitle / Eyebrow */}
                            {slide.subtitle && (
                                <motion.div
                                    initial={{ opacity: 0, x: slide.layout === 'right' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex items-center gap-2 mb-3"
                                >
                                    <span className="h-[1px] w-8 bg-[#C8A261]" />
                                    <span className="text-xs uppercase tracking-[0.25em] text-[#C8A261] font-medium">
                                        {slide.subtitle}
                                    </span>
                                </motion.div>
                            )}

                            {/* Main Heading */}
                            {slide.title && (
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-5"
                                >
                                    {slide.title.replace(slide.highlightText, '')}
                                    <span className="text-[#C8A261] font-semibold">{slide.highlightText}</span>
                                </motion.h1>
                            )}

                            {/* Description */}
                            {slide.description && (
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-8 max-w-xl"
                                >
                                    {slide.description}
                                </motion.p>
                            )}

                            {/* Call-to-Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className={`flex flex-wrap items-center gap-4 ${slide.layout === 'center' ? 'justify-center' : ''
                                    }`}
                            >
                                {slide.primaryCta && (
                                    <Button
                                        asChild
                                        className="bg-[#C8A261] hover:bg-[#b08d4f] text-[#0B0B0B] font-semibold text-xs tracking-[0.15em] uppercase px-7 h-12 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(200,162,97,0.25)] group"
                                    >
                                        <Link href={slide.primaryCta.href} className="flex items-center gap-2">
                                            <span>{slide.primaryCta.label}</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                )}

                                {slide.secondaryCta && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/30 hover:border-[#C8A261] bg-black/40 hover:bg-black/60 text-white font-medium text-xs tracking-[0.15em] uppercase px-7 h-12 rounded-none backdrop-blur-sm transition-all duration-300"
                                    >
                                        <Link href={slide.secondaryCta.href} className="flex items-center gap-2">
                                            {slide.secondaryCta.label.includes('Video') && (
                                                <Play className="w-3.5 h-3.5 fill-[#C8A261] text-[#C8A261]" />
                                            )}
                                            <span>{slide.secondaryCta.label}</span>
                                        </Link>
                                    </Button>
                                )}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            {/* Slider Controls & Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Progress Dots / Slide Numbers */}
                <div className="flex items-center gap-3">
                    {SLIDES.map((s, index) => (
                        <button
                            key={s.id}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentSlide(index);
                            }}
                            className="group flex items-center gap-2 py-2 focus:outline-none"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span
                                className={`h-0.5 transition-all duration-500 ${currentSlide === index
                                        ? 'w-10 bg-[#C8A261]'
                                        : 'w-4 bg-white/30 group-hover:bg-white/60'
                                    }`}
                            />
                            <span
                                className={`text-[11px] font-medium transition-colors ${currentSlide === index ? 'text-[#C8A261]' : 'text-gray-500'
                                    }`}
                            >
                                0{index + 1}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Previous / Next Arrow Controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-white/15 bg-black/30 hover:bg-[#C8A261] text-white hover:text-[#0B0B0B] hover:border-[#C8A261] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-white/15 bg-black/30 hover:bg-[#C8A261] text-white hover:text-[#0B0B0B] hover:border-[#C8A261] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}