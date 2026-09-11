"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/effects/blur-reveal";
import { useLanguage } from "@/providers/language-provider";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Roadmap() {
    const { content, dict } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative container-void overflow-hidden py-32 xl:py-48 border-t border-border/50 perspective-[2000px]">
            <div className="absolute top-1/4 left-0 w-full max-w-lg h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-full max-w-lg h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2" />

            <motion.div
                style={{ y: yBackground }}
                className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none flex items-center justify-center opacity-[0.02] z-0 overflow-hidden"
            >
                <div className="text-[15vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    EXPERIENCE
                </div>
            </motion.div>

            <div className="container mx-auto px-container max-w-4xl relative z-10">

                <div className="flex flex-col md:items-center mb-16 md:mb-24 gap-4 text-center">
                    <BlurReveal>
                        <span className="title-counter">
                            [002]
                        </span>
                    </BlurReveal>

                    <BlurReveal>
                        <h2 className="title">
                            Experience
                        </h2>
                    </BlurReveal>
                </div>

                <div className="relative max-w-3xl mx-auto flex flex-col gap-20 md:gap-24">
                    {/* Professional Experience */}
                    <div className="relative">
                        <BlurReveal>
                            <div className="mb-10 flex items-center gap-3">
                                <BriefcaseBusiness className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                                <h3 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground">
                                    {dict.professionalExperience}
                                </h3>
                            </div>
                        </BlurReveal>
                        <div className="relative">
                            <TimelineLine />
                            <div className="flex flex-col gap-12 md:gap-16 w-full py-4">
                                {content.experience?.filter((i: any) => i.type === 'professional').map((item: any, index: number) => (
                                    <ExperienceCard key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Training & Bootcamps */}
                    <div className="relative">
                        <BlurReveal>
                            <div className="mb-10 flex items-center gap-3">
                                <GraduationCap className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                                <h3 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground">
                                    {dict.trainingExperience}
                                </h3>
                            </div>
                        </BlurReveal>
                        <div className="relative">
                            <TimelineLine />
                            <div className="flex flex-col gap-12 md:gap-16 w-full py-4">
                                {content.experience?.filter((i: any) => i.type === 'training').map((item: any, index: number) => (
                                    <ExperienceCard key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

const TimelineLine = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start center", "end center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 26,
        restDelta: 0.001
    });

    const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <div 
            ref={lineRef} 
            className="absolute left-[8px] md:left-[12px] -translate-x-1/2 top-4 bottom-0 w-[2px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_85%,transparent_100%)] pointer-events-none"
        >
            {/* Background Track Line */}
            <div className="absolute inset-0 w-full bg-border/20 rounded-full" />

            {/* Active Animated Smooth Line with Bottom Fade */}
            <motion.div 
                style={{ height }}
                className="w-full bg-gradient-to-b from-white via-white to-transparent rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] origin-top" 
            />
        </div>
    );
};

const getYearData = (item: any) => {
    if (item.year) {
        const fullYear = String(item.year);
        const shortYear = fullYear.slice(-2);
        return { fullYear, shortYear };
    }
    const matches = item.period?.match(/\b(20\d{2}|19\d{2})\b/g);
    if (matches && matches.length > 0) {
        const fullYear = matches[0];
        const shortYear = fullYear.slice(-2);
        return { fullYear, shortYear };
    }
    return { fullYear: "2026", shortYear: "26" };
};

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
    const dotRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(dotRef, { margin: "0px 0px -50% 0px" });
    const { fullYear, shortYear } = getYearData(item);

    return (
        <BlurReveal delay={index * 0.15}>
            <div className="relative pl-8 sm:pl-12 md:pl-16 group">
                {/* Timeline Dot (Matching reference design: circular disc with centered bright dot) */}
                <div 
                    ref={dotRef}
                    className={cn(
                        "absolute z-20 left-[8px] md:left-[12px] -translate-x-1/2 top-8 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 dark:bg-[#0b0b0e] border border-white/15 flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-500",
                        isInView ? "border-white/35 scale-105 shadow-[0_0_14px_rgba(255,255,255,0.2)]" : "border-white/10 scale-95 opacity-80"
                    )} 
                >
                    <div 
                        className={cn(
                            "rounded-full transition-all duration-500",
                            isInView ? "w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] scale-100" : "w-2 h-2 bg-white/50 scale-90"
                        )}
                    />
                </div>

                {/* Card Container */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10]/80 dark:bg-[#0b0b0f]/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-white/20 group-hover:shadow-primary/5">
                    {/* Ambient Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

                    {/* Background Watermark (Giant 2-digit year watermark on the left, matching reference) */}
                    <div 
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-4 sm:-bottom-6 left-1 sm:left-4 text-[9rem] sm:text-[13rem] md:text-[15rem] font-black leading-none select-none tracking-tighter text-foreground/[0.04] dark:text-white/[0.045] transition-all duration-700 ease-out group-hover:text-foreground/[0.07] dark:group-hover:text-white/[0.075] group-hover:scale-105 origin-bottom-left z-0 font-sans"
                    >
                        {shortYear}
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col gap-6">
                        {/* Header: Left is Role/Company/Period, Right is Index & Stylized Year */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex flex-col gap-1.5 max-w-lg">
                                <div className="flex items-center gap-2.5 flex-wrap">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                        {item.role}
                                    </h3>
                                    {item.badge && (
                                        <span className="px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono font-medium text-primary tracking-wide">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm md:text-base font-medium text-muted-foreground">
                                    {item.company}
                                </p>
                            </div>

                            {/* Right: Counter and Stylized Display Year */}
                            <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-start gap-1 shrink-0 pt-1">
                                <span className="font-mono text-xs sm:text-sm text-muted-foreground/60 tracking-widest uppercase">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="font-serif italic font-black text-4xl sm:text-5xl md:text-6xl text-foreground/90 tracking-tight select-none">
                                    {fullYear}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                            {Array.isArray(item.description) ? (
                                <ul className="flex flex-col gap-2.5 list-none">
                                    {item.description.map((desc: string, i: number) => (
                                        <li key={i} className="relative pl-5 text-foreground/80 text-sm md:text-base leading-relaxed">
                                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                            )}
                        </div>

                        {/* Tags / Pills matching reference badge style */}
                        {item.tags && item.tags.length > 0 && (
                            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-end gap-2">
                                {item.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono font-medium text-foreground/75 group-hover:text-foreground group-hover:border-white/20 transition-all shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BlurReveal>
    );
};