import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Zap, TrendingUp, Award, Layers } from 'lucide-react';
import founder1 from '../assets/founder-hrishi-updated.jpg';
import founder2 from '../assets/founder-rushi-final.png';

const Founders = () => {
    const { scrollYProgress } = useScroll();

    // Parallax effects
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <div className="bg-black text-white font-body selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* 1. OPENING SEQUENCE — THE STATEMENT */}
            <section className="relative min-h-screen md:h-screen flex flex-col items-center justify-start md:justify-center bg-black overflow-hidden sticky top-0 z-0 pt-32 md:pt-0 pb-10 md:pb-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 animate-pulse-slow"></div>

                <div className="z-10 text-center space-y-8 max-w-5xl px-6">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100px" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto mb-8"
                    ></motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-4xl md:text-7xl font-bold font-heading leading-tight"
                    >
                        Every Great Brand Begins With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">A Clear Mind.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed font-mono"
                    >
                        Pixelminds digital was built by founders who believe growth is not accidental — it is designed, tested, and refined.
                    </motion.p>
                </div>
            </section>

            {/* 2. THE PHILOSOPHY — WHY WE EXIST */}
            <div className="relative z-10 bg-zinc-950 py-16 md:py-40 border-t border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,100,0.1),transparent_70%)]"></div>

                <div className="container mx-auto px-6 text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading leading-normal">
                            Not about noise. About <span className="text-blue-500">Clarity</span>. <br />
                            Not about trends. About <span className="text-purple-500">Behavior</span>.
                        </h2>
                        <div className="w-24 h-1 bg-white/20 mx-auto my-12"></div>
                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                            Pixelminds digital exists to help businesses grow through structure, insight, and execution that compounds over time.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 3. THE MINDS — SPLIT STORYTELLING */}
            <div className="relative z-10 bg-black">

                {/* FOUNDER 01: HRISHIKESH */}
                <section className="min-h-screen grid md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[60vh] md:h-screen overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700"></div>
                        <img
                            src={founder1}
                            alt="Hrishikesh Bhujbal"
                            className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute bottom-0 left-0 p-12 z-20 bg-gradient-to-t from-black via-black/50 to-transparent w-full">
                            <h2 className="text-6xl md:text-8xl font-bold font-heading text-white">Hrishikesh Bhujbal</h2>
                            <p className="text-blue-500 font-mono text-xl tracking-widest mt-2">Co-founder & SEO Specialist</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col justify-center p-12 md:p-24 bg-zinc-950 border-l border-white/10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8">Designing Visibility <br /> That Lasts.</h3>
                            <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light">
                                Hrishikesh specializes in building organic growth systems rooted in structure, intent, and search behavior. His approach to SEO goes beyond rankings — it focuses on long-term visibility, technical clarity, and content alignment that compounds results over time.
                            </p>

                            <div className="space-y-4 mb-12">
                                {["Technical SEO Architecture", "Search Intent Strategy", "Deep Analytics", "Sustainable Growth"].map((skill, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-12 h-[1px] bg-blue-500 group-hover:w-16 transition-all"></div>
                                        <span className="font-mono text-sm text-gray-300">{skill}</span>
                                    </div>
                                ))}
                            </div>

                            <blockquote className="text-2xl font-serif italic text-blue-400/80 border-l-4 border-blue-500 pl-6">
                                “Organic growth is earned through precision, not shortcuts.”
                            </blockquote>
                        </motion.div>
                    </div>
                </section>

                {/* FOUNDER 02: RUSHIKESH */}
                <section className="min-h-screen grid md:grid-cols-2">
                    <div className="order-2 md:order-1 flex flex-col justify-center p-12 md:p-24 bg-zinc-950 border-r border-white/10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8">Building Growth <br /> With Purpose.</h3>
                            <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light">
                                Rushikesh leads Pixelminds digital with a focus on strategy, performance, and scalable digital systems. Inspired by real-world execution and data-driven thinking, he focuses on turning digital channels into predictable growth engines tailored to business goals.
                            </p>

                            <div className="space-y-4 mb-12">
                                {["Digital Strategy & Planning", "Performance Marketing", "Brand Growth Systems", "Conversion Execution"].map((skill, i) => (
                                    <div key={i} className="flex items-center gap-4 group justify-end md:justify-start">
                                        <div className="w-12 h-[1px] bg-purple-500 group-hover:w-16 transition-all order-2 md:order-1"></div>
                                        <span className="font-mono text-sm text-gray-300 order-1 md:order-2">{skill}</span>
                                    </div>
                                ))}
                            </div>

                            <blockquote className="text-2xl font-serif italic text-purple-400/80 border-l-4 border-purple-500 pl-6">
                                “Marketing should simplify growth, not complicate it.”
                            </blockquote>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2 relative h-[60vh] md:h-screen overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700"></div>
                        <img
                            src={founder2}
                            alt="Rushikesh Ghule"
                            className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute bottom-0 left-0 p-12 z-20 bg-gradient-to-t from-black via-black/50 to-transparent w-full text-right">
                            <h2 className="text-6xl md:text-8xl font-bold font-heading text-white">Rushikesh</h2>
                            <p className="text-purple-500 font-mono text-xl tracking-widest mt-2">THE STRATEGIST</p>
                        </div>
                    </motion.div>
                </section>

            </div>

            {/* 4. COMPLEMENTARY STRENGTHS — CONVERGENCE */}
            <section className="py-16 md:py-32 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-6 text-center relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-16"
                    >
                        The Convergence
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="p-8 border border-white/5 bg-black rounded-2xl"
                        >
                            <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-2">Strategy meets Execution</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 border border-white/5 bg-black rounded-2xl relative z-10 scale-110 shadow-2xl shadow-purple-900/20"
                        >
                            <Target className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-2">Vision meets Structure</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-8 border border-white/5 bg-black rounded-2xl"
                        >
                            <Zap className="w-12 h-12 text-white mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-2">Creativity meets Data</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. VALUES & LEADERSHIP */}
            <section className="py-16 md:py-24 bg-black border-y border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {["Clarity before action", "Data before assumptions", "Systems over shortcuts", "Growth through consistency", "Partnerships over transactions"].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="pt-8 md:pt-0 font-mono text-gray-400 text-sm uppercase tracking-widest px-4"
                            >
                                {value}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MESSAGE TO CLIENT */}
            <section className="py-16 md:py-32 bg-zinc-950 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">We don’t believe in selling services. <br /> We believe in solving problems.</h2>
                    <p className="text-xl text-gray-400 font-light">
                        If you’re looking for a digital partner who understands growth beyond surface-level marketing, you’re in the right place.
                    </p>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-24 md:py-40 bg-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 opacity-30 blur-[100px]"></div>
                <div className="container mx-auto px-6 relative z-20">
                    <h2 className="text-4xl md:text-7xl font-bold font-heading mb-12">
                        Let’s Build Something That <br /> Grows With Purpose.
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:scale-105">
                            Start a Conversation
                        </Link>
                        <a href="tel:+919623761343" className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105">
                            Call Now
                        </a>
                        <a href="https://wa.me/919665961721" className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl hover:scale-105">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Founders;
