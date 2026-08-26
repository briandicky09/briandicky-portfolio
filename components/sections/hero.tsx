"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useScroll, useTransform, useMotionTemplate, motion } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";
import { ArrowRight, Mouse } from "lucide-react";
import { InteractiveParticles } from "@/components/effects/interactive-particles";


export default function Hero() {
    const { content, dict } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [contactOpen, setContactOpen] = useState(false);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);
    const scale = useTransform(scrollY, [0, 800], [1, 0.94]);
    const y = useTransform(scrollY, [0, 800], [0, -150]);
    const blurValue = useTransform(scrollY, [0, 800], [0, 10]);
    const filter = useMotionTemplate`blur(${blurValue}px)`;



    const scrollToProjects = useCallback(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const scrollToContact = useCallback(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            className="sticky top-0 h-screen w-full flex flex-col justify-between bg-background px-container md:px-16 pt-28 pb-12 sm:pt-32 sm:pb-16 2xl:pb-24 overflow-hidden"
            id="home"
        >
            <InteractiveParticles />

            <motion.div
                style={{ opacity }}
                className="absolute top-0 right-4 sm:right-12 md:right-16 lg:right-24 xl:right-36 2xl:right-48 bottom-0 h-full w-[17rem] sm:w-[19rem] md:w-[22rem] lg:w-[25rem] xl:w-[28rem] 2xl:w-[30rem] flex justify-center items-center overflow-hidden z-0 pointer-events-none select-none opacity-40 dark:opacity-30"
            >
                <motion.div
                    animate={{ y: ["-3%", "3%"] }}
                    transition={{
                        y: {
                            ease: "easeInOut",
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                    className="w-full aspect-3/4 relative overflow-hidden rounded-4xl [mask-image:radial-gradient(ellipse_closest-side_at_center,black_50%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_closest-side_at_center,black_50%,transparent_100%)]"
                >
                    <Image
                        src="/profile.webp"
                        alt="Brian Dicky Vanka Andaraneva"
                        fill
                        sizes="(max-width: 1280px) 40vw, 25vw"
                        priority
                        className="object-cover object-center pointer-events-none select-none"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                style={{ opacity, scale, y, filter }}
                className="relative z-20 flex-1 flex flex-col gap-6 sm:gap-8 xl:gap-12 justify-end w-full h-full will-change-[opacity,transform,filter] pointer-events-none"
            >

                <div className="w-full mt-auto flex flex-col justify-center relative z-20 mix-blend-difference">
                    <div className="flex items-start translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10 xl:translate-y-12 2xl:translate-y-14 transition-transform duration-500 pointer-events-auto w-fit">
                        <div className="w-10 h-24 sm:w-12 sm:h-32 md:w-16 md:h-40 lg:w-12 lg:h-32 xl:w-14 xl:h-36 relative shrink-0 mr-2 md:mr-6 lg:mr-6 xl:mr-8 mt-2 md:mt-4 lg:mt-3 xl:mt-4">
                            <div className="absolute top-0 left-full text-4xl sm:text-6xl lg:text-5xl xl:text-6xl text-foreground grunge-text rotate-90 origin-top-left pointer-events-none select-none whitespace-nowrap">
                                {"////"}
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[110px] font-black tracking-tighter leading-[0.85] text-foreground uppercase whitespace-nowrap pr-2 md:pr-4">
                                Brian
                                <br />
                                <span className="text-foreground/80">
                                    Portfolio
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 sm:space-y-8 xl:space-y-10 pointer-events-auto w-fit">
                    <p className="sm:text-lg 2xl:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mix-blend-difference">
                        {content.about.description}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-4">
                        <button
                            onClick={scrollToContact}
                            className="w-fit group relative flex h-12 xl:h-16 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border/50 bg-foreground px-6 xl:px-10 text-background transition-all duration-500 ease-out hover:bg-background hover:border-foreground/30 hover:text-foreground shadow-2xl hover:-translate-y-0.5"
                        >
                            <div className="absolute inset-0 flex h-full w-full justify-center -translate-x-full -skew-x-12 group-hover:duration-1000 group-hover:translate-x-full">
                                <div className="relative h-full w-8 bg-background/20 dark:bg-foreground/10" />
                            </div>
                            <span className="relative z-10 flex items-center gap-2 xl:gap-3 text-xs xl:text-base font-semibold tracking-[0.15em] uppercase">
                                {dict.contactMe}
                                <ArrowRight className="w-3.5 xl:w-5 h-3.5 xl:h-5 transition-transform duration-500 group-hover:translate-x-1" />
                            </span>
                        </button>

                        <button
                            onClick={scrollToProjects}
                            className="w-fit group relative flex h-12 xl:h-16 cursor-pointer items-center justify-center px-6 xl:px-10 text-muted-foreground transition-all duration-500 hover:text-foreground hover:bg-secondary/15 rounded-full border border-border sm:border-transparent hover:border-border/30 backdrop-blur-sm"
                        >
                            <span className="relative z-10 text-xs xl:text-base font-semibold tracking-[0.15em] uppercase flex items-center gap-2 xl:gap-3">
                                <Mouse className="w-3.5 xl:w-5 h-3.5 xl:h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                {dict.exploreProjects}
                            </span>
                        </button>
                    </div>
                </div>

            </motion.div>

            <div className="absolute bottom-6 sm:bottom-12 right-6 md:right-16 flex flex-col items-center gap-3 sm:gap-4 mix-blend-difference z-50 pointer-events-none">
                <div className="w-px h-12 sm:h-16 bg-white/30 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{
                            y: ["0%", "100%", "0%"]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white [writing-mode:vertical-lr]">
                    {dict.scrollDown}
                </span>
            </div>
        </section>
    );
}