"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={lineRef} className="absolute left-[8px] md:left-[12px] -translate-x-1/2 top-4 bottom-0 w-[2px] bg-border/30 rounded-full overflow-hidden">
            <motion.div 
                style={{ height }}
                className="w-full bg-primary origin-top rounded-full" 
            />
        </div>
    );
};

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
    const dotRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(dotRef, { margin: "0px 0px -50% 0px" });

    return (
        <BlurReveal delay={index * 0.15}>
            <div className="relative pl-8 md:pl-16 group">
                {/* Timeline Dot */}
                <div 
                    ref={dotRef}
                    className={cn(
                        "absolute z-10 left-[8px] md:left-[12px] -translate-x-1/2 top-2 w-3 h-3 rounded-full transition-all duration-300 ring-4 ring-background shadow-sm",
                        isInView ? "bg-primary scale-125 shadow-primary/50" : "bg-border scale-100"
                    )} 
                />

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="order-2 sm:order-1 flex flex-col gap-1">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                {item.role}
                            </h3>
                            <p className="text-sm md:text-base font-medium text-muted-foreground">
                                {item.company}
                            </p>
                        </div>
                        <div className="shrink-0 order-1 sm:order-2 flex items-center gap-2 flex-wrap sm:justify-end">
                            {item.badge && (
                                <span className="inline-block px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs sm:text-sm font-mono font-medium text-foreground tracking-wide shadow-sm">
                                    {item.badge}
                                </span>
                            )}
                            <span className="inline-block px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs sm:text-sm font-mono font-medium text-foreground tracking-wide shadow-sm">
                                {item.period}
                            </span>
                        </div>
                    </div>

                    <ul className="mt-4 flex flex-col gap-3 list-none">
                        {Array.isArray(item.description) ? (
                            item.description.map((desc: string, i: number) => (
                                <li key={i} className="relative pl-5 text-foreground/80 text-sm md:text-base leading-relaxed">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors duration-300" />
                                    {desc}
                                </li>
                            ))
                        ) : (
                            <li className="relative pl-5 text-foreground/80 text-sm md:text-base leading-relaxed">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors duration-300" />
                                {item.description}
                            </li>
                        )}
                    </ul>

                    {item.tags && item.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {item.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="text-[11px] sm:text-xs tracking-wider uppercase text-foreground/70 font-semibold px-3 py-1.5 rounded-md bg-secondary/20 border border-border/40 shadow-sm transition-colors group-hover:border-border/80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </BlurReveal>
    );
};