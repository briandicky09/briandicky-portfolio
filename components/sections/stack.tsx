"use client";

import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StackItem } from "@/types/stack";

export default function Stack() {
    const { content, dict } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            title: dict.frontendStack,
            items: content.stack?.frontend || [],
        },
        {
            title: dict.backendStack,
            items: content.stack?.backend || [],
        },
        {
            title: dict.databaseStack,
            items: content.stack?.database || [],
        },
        {
            title: dict.toolsStack,
            items: content.stack?.tools || [],
        },
        {
            title: dict.clientSideDataStack,
            items: content.stack?.clientSideData || [],
        },
    ];

    return (
        <section className="w-full bg-background text-foreground overflow-hidden relative py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-36">

            <div className="h-full flex flex-col px-container container mx-auto">
                <div className="flex flex-col gap-4 mb-16">
                    <BlurReveal>
                        <span className="title-counter">[004]</span>
                    </BlurReveal>

                    <BlurReveal>
                        <h2 className="title">{dict.title.stack}</h2>
                    </BlurReveal>
                </div>

                <BlurReveal delay={0.1}>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
                                    activeTab === index 
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg"
                                        : "bg-secondary/20 text-muted-foreground border-border/40 hover:border-foreground/30 hover:text-foreground"
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </BlurReveal>

                <BlurReveal delay={0.2}>
                    <div className="min-h-[250px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-4 sm:gap-6 flex-wrap"
                            >
                                {categories[activeTab].items.map((item: StackItem) => (
                                    <HoverCard key={item.name} openDelay={50} closeDelay={50}>
                                        <HoverCardTrigger asChild>
                                            <div className="group flex items-center gap-3 py-2.5 px-1 shrink-0 cursor-default">
                                                <div className="transition-all duration-500 ease-out opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                                                    <Image src={item.icon} alt={item.name} width={24} height={24} unoptimized={item.icon.endsWith('.svg')} className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                                <span className="text-xs sm:text-sm tracking-wide text-muted-foreground transition-colors duration-500 ease-out group-hover:text-foreground">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent
                                            side="top"
                                            align="center"
                                            className="w-auto p-4 flex flex-col items-center justify-center gap-4 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                                            <div className="absolute inset-0 bg-linear-to-tr from-foreground/5 to-transparent pointer-events-none" />

                                            <div className="relative p-3 rounded-xl bg-secondary/50 ring-1 ring-border/50 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                <Image src={item.icon} alt={item.name} width={36} height={36} className="drop-shadow-lg" unoptimized={item.icon.endsWith('.svg')} />
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-1 z-10">
                                                <span className="text-sm font-bold tracking-[0.15em] uppercase text-foreground">
                                                    {item.name}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                                                    {categories[activeTab].title}
                                                </span>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </BlurReveal>

            </div>
        </section>
    );
}
