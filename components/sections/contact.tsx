"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";
import { sanitizePhone } from "@/lib/utils";
import { ShineButton } from "@/components/ui/shine-button";

export default function Contact() {
    const { content, dict } = useLanguage();

    return (
        <section id="contact" className="relative pt-24 md:pt-32 xl:pt-48 bg-background overflow-hidden border-t border-border/50">

            <div className="container mx-auto px-container relative z-10">

                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    <div className="flex flex-col gap-4 mb-16 lg:mb-32">
                        <BlurReveal>
                            <span className="title-counter">
                                [005]
                            </span>
                        </BlurReveal>

                        <BlurReveal>
                            <h2 className="title">
                                {dict.title.contact}
                            </h2>
                        </BlurReveal>
                        <BlurReveal>
                            <p className="text-lg mt-3 max-w-xl italic font-medium tracking-tight text-foreground/60">
                                {dict.contactIntroText}
                            </p>
                        </BlurReveal>
                    </div>
                </div>

                <div className="flex flex-col w-full max-w-3xl mx-auto mb-12 sm:mb-24 xl:mb-40">
                    <BlurReveal>
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="name" className="text-xs sm:text-sm font-mono tracking-widest text-muted-foreground uppercase">{dict.form?.name || "Name"}</label>
                                    <input type="text" id="name" placeholder={dict.form?.namePlaceholder || "Your Name"} className="w-full bg-secondary/5 border border-border/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/10 transition-colors placeholder:text-muted-foreground/50" required />
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="email" className="text-xs sm:text-sm font-mono tracking-widest text-muted-foreground uppercase">{dict.form?.email || "Email Address"}</label>
                                    <input type="email" id="email" placeholder={dict.form?.emailPlaceholder || "your@email.com"} className="w-full bg-secondary/5 border border-border/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/10 transition-colors placeholder:text-muted-foreground/50" required />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="subject" className="text-xs sm:text-sm font-mono tracking-widest text-muted-foreground uppercase">{dict.form?.subject || "Subject"}</label>
                                <input type="text" id="subject" placeholder={dict.form?.subjectPlaceholder || "Project Inquiry"} className="w-full bg-secondary/5 border border-border/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/10 transition-colors placeholder:text-muted-foreground/50" required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="message" className="text-xs sm:text-sm font-mono tracking-widest text-muted-foreground uppercase">{dict.form?.message || "Message"}</label>
                                <textarea id="message" rows={5} placeholder={dict.form?.messagePlaceholder || "Tell me about your project..."} className="w-full bg-secondary/5 border border-border/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-secondary/10 transition-colors resize-none placeholder:text-muted-foreground/50" required />
                            </div>
                            
                            <button
                                type="submit"
                                className="group relative mt-6 flex h-14 items-center justify-center overflow-hidden rounded-full border border-border/50 bg-foreground text-background transition-all duration-500 hover:bg-background hover:text-foreground hover:border-foreground/30 shadow-sm w-full sm:w-fit px-10"
                            >
                                <div className="absolute inset-0 flex h-full w-full justify-center -translate-x-full -skew-x-12 group-hover:duration-1000 group-hover:translate-x-full">
                                    <div className="relative h-full w-6 bg-background/20 dark:bg-background/20" />
                                </div>
                                <span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-widest uppercase">
                                    {dict.form?.submit || "Send Message"}
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </button>
                        </form>
                    </BlurReveal>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-between pb-12 xl:py-12 xl:border-t border-border/50 gap-8">

                    <div className="text-sm font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-4 max-xl:hidden">
                        <span>© 2026</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span>BRIAN. {dict.allRightsReserved}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {content.social.map((link: { label: string; href: string }) => (
                            <BlurReveal key={link.label}>
                                <ShineButton
                                    href={link.href}
                                    className="h-14 px-8"
                                    shineClassName="w-6 bg-background/20 dark:bg-background/20"
                                >
                                    <span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-widest uppercase">
                                        {link.label}
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </ShineButton>
                            </BlurReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
