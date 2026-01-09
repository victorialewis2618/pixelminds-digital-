import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, BarChart3, Target, Zap, Globe, Users, TrendingUp, Layers, Video, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import founder1 from '../assets/founder-hrishi-updated.jpg';
import founder2 from '../assets/founder-rushi-final.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Home = () => {
    return (
        <div className="bg-black text-white font-body selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* 1. HERO SECTION - FIRST IMPRESSION ZONE */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Content - Left */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="relative z-10"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Digital Growth Agency</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                                Driving Measurable <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Digital Growth</span> <br />
                                for Modern Brands
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                                PIXELMINDS DIGITAL helps businesses grow through strategic digital marketing, performance-driven campaigns, and data-backed decisions.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20">
                                    Get Started
                                </Link>
                                <a href="tel:+919623761343" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold transition-all flex items-center gap-2">
                                    <Phone size={18} /> Call Now
                                </a>
                                <a href="https://wa.me/919665961721" className="px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg font-bold transition-all flex items-center gap-2 border border-[#25D366]/20">
                                    <MessageCircle size={18} /> WhatsApp
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Visual - Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative h-[400px] md:h-[600px] w-full"
                        >
                            {/* Abstract visuals */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-1/4 md:right-0 bg-zinc-900/90 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-xl w-max max-w-[90%]"
                            >
                                <BarChart3 className="text-green-500 mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                                <p className="font-bold text-xl md:text-3xl">High Performance</p>
                                <p className="text-xs md:text-sm text-gray-400">Consistent, Scalable Growth</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 md:bottom-1/4 bg-zinc-900/90 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-xl w-max max-w-[90%]"
                            >
                                <Globe className="text-blue-500 mb-2 md:mb-3 w-6 h-6 md:w-8 md:h-8" />
                                <p className="font-bold text-xl md:text-3xl">Global Impact</p>
                                <p className="text-xs md:text-sm text-gray-400">Serving Brands Worldwide</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. DIGITAL VALUE - WHAT WE DO DIFFERENTLY */}
            <section className="py-16 md:py-24 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Strategy-First", desc: "No random acts of marketing. Everything is planned.", icon: Target },
                            { title: "Performance & ROI", desc: "We focus on metrics that impact your bottom line.", icon: TrendingUp },
                            { title: "Data-Driven", desc: "Decisions backed by real-time analytics, not guesses.", icon: BarChart3 },
                            { title: "Scalable Systems", desc: "Frameworks designed to grow with your business.", icon: Layers }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-black border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all group hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-500">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SERVICES SNAPSHOT - CREATIVE GRID */}
            <section className="py-16 md:py-32 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">Full-Spectrum Digital Growth</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "SEO", desc: "Rank Higher, Grow Organically", icon: Globe },
                            { title: "Paid Ads", desc: "Google & Meta Performance", icon: Zap },
                            { title: "Social Media", desc: "Community & Brand Building", icon: Users },
                            { title: "Content", desc: "Storytelling that Converts", icon: Video },
                            { title: "Branding", desc: "Identity & Creative Strategy", icon: Award },
                            { title: "CRO", desc: "Conversion Rate Optimization", icon: Target },
                            { title: "Local SEO", desc: "Dominate Local Search", icon: Globe },
                            { title: "Analytics", desc: "Tracking & Reporting", icon: BarChart3 }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 bg-zinc-900/50 rounded-xl border border-white/5 hover:bg-zinc-800 hover:border-blue-500 transition-all cursor-pointer group"
                            >
                                <div className="mb-6 flex justify-between items-start">
                                    <service.icon className="text-gray-500 group-hover:text-white transition-colors" size={32} />
                                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                                <p className="text-sm text-gray-400">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/services" className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-bold">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. OUR APPROACH - STORYTELLING */}
            <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-16">How We Generate Growth</h2>
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Understanding", desc: "We analyze your brand, market position, and competition." },
                                { step: "02", title: "Strategy", desc: "Building a roadmap tailored to your specific growth goals." },
                                { step: "03", title: "Execution", desc: "Launching high-precision campaigns with creative excellence." },
                                { step: "04", title: "Optimization", desc: "Continuous measurement and refinement to scale ROI." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 md:gap-12 items-start"
                                >
                                    <div className="text-4xl md:text-6xl font-bold text-white/10 font-mono">{item.step}</div>
                                    <div className="pt-2">
                                        <h3 className="text-2xl font-bold font-heading mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FOUNDERS - CREATIVE TRUST */}
            <section className="py-16 md:py-32 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">The Minds Behind PIXELMINDS</h2>
                        <p className="text-gray-400">Expertise you can trust.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Hrishikesh */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img src={founder1} alt="Hrishikesh Bhujbal" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold font-heading">Hrishikesh Bhujbal</h3>
                                        <p className="text-blue-500 font-bold uppercase text-sm tracking-mid">Co-founder & SEO Specialist</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Specializes in building strong search visibility through technical SEO, content optimization, and data-driven keyword strategies that deliver long-term growth.
                                </p>
                            </div>
                        </motion.div>

                        {/* Rushikesh */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img src={founder2} alt="Rushikesh Ghule" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold font-heading">Rushikesh Ghule</h3>
                                        <p className="text-purple-500 font-bold uppercase text-sm tracking-mid">Founder & Strategist</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Leads PIXELMINDS DIGITAL with a strong focus on performance marketing, brand strategy, and scalable digital growth for businesses across industries.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. TRUST & IMPACT - CREDIBILITY BLOCK */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Growth-Focused", value: "Strategies" },
                            { label: "ROI-Driven", value: "Campaigns" },
                            { label: "Transparent", value: "Reporting" },
                            { label: "Long-Term", value: "Partnerships" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/5">
                                <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
                                <h4 className="text-xl font-bold text-white mb-1">{item.value}</h4>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
