import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, BarChart3, TrendingUp, RefreshCw, Zap, Award, Users, ArrowRight, Share2, PenTool, MapPin, MousePointer2, Layers, Search, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const { scrollYProgress } = useScroll();

    // Smooth scroll parallax effect for deeper sections
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="bg-black text-white font-body selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* 1. ENTRY EXPERIENCE — THE SYSTEM */}
            <section className="relative min-h-screen md:h-screen flex flex-col items-center justify-start md:justify-center bg-black overflow-hidden sticky top-0 z-0 pt-32 md:pt-0 pb-10 md:pb-0">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"
                ></motion.div>

                {/* Content */}
                <div className="z-10 text-center space-y-8 max-w-5xl px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-8xl font-bold font-heading leading-tight"
                    >
                        Digital Growth Is <br />
                        <span className="text-gray-600">Not a Service.</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-3xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                        It’s a System.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mt-8"
                    >
                        At Pixelminds digital, our services are designed to work together, forming a complete digital growth ecosystem that attracts, converts, and scales businesses sustainably.
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 3, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase"
                >
                    Explore the System
                </motion.div>
            </section>

            {/* 2. PERSPECTIVE SHIFT — WHY SERVICES ALONE FAIL */}
            <div className="relative z-10 bg-zinc-950 py-16 md:py-32 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-6">The Shift</h3>
                            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Isolated tactics <br /> create noise.</h2>
                            <div className="space-y-6 text-xl text-gray-400 leading-relaxed border-l-2 border-white/10 pl-8">
                                <p>Random marketing actions fail because they lack connection.</p>
                                <p>Growth requires structure. Strategy connects every channel.</p>
                                <p className="text-white font-bold">We don’t sell isolated services. We build connected growth systems.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] xs:h-[400px] border border-white/5 rounded-2xl bg-black/50 overflow-hidden flex items-center justify-center"
                        >
                            {/* Abstract Diagram */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-8 text-center">
                                {["SEO", "Ads", "Social", "Data"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="p-4 border border-white/10 bg-black rounded-lg text-gray-400 font-mono text-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-pulse"
                                    style={{ transform: 'scale(1.5)' }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 3. THE ECOSYSTEM — VISUAL CORE */}
            <section className="py-16 md:py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-20">The Growth Ecosystem</h2>
                    <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent mb-12"></div>
                </div>
            </section>

            {/* 4. DEEP DIVES — 7 SERVICE PILLARS */}
            <div className="bg-black relative z-10 space-y-16 md:space-y-32 pb-16 md:pb-32">
                {[
                    {
                        id: "01", category: "Foundation", title: "Search Engine Optimization", icon: Search,
                        desc: "SEO is the foundation of sustainable growth. We build search visibility that compounds over time through technical excellence and authority signals.",
                        points: ["Technical Health", "Search Intent", "Authority Building"],
                        color: "border-blue-500"
                    },
                    {
                        id: "02", category: "Acceleration", title: "Performance Marketing", icon: Zap,
                        desc: "Performance marketing is about control and precision. We design campaigns that prioritize qualified traffic and continuous ROI optimization.",
                        points: ["Google & Meta Ads", "Funnel Alignment", "Conversion Tracking"],
                        color: "border-purple-500"
                    },
                    {
                        id: "03", category: "Trust", title: "Social Media Marketing", icon: Share2,
                        desc: "Social media is where brands build trust. Our approach focuses on consistency, engagement, and content that aligns with audience behavior.",
                        points: ["Platform Strategy", "Community Engagement", "Paid & Organic Sync"],
                        color: "border-pink-500"
                    },
                    {
                        id: "04", category: "Voice", title: "Content & Communication", icon: PenTool,
                        desc: "Content shapes perception. We help brands communicate clearly, consistently, and convincingly across all digital platforms.",
                        points: ["Messaging Frameworks", "SEO-Driven Content", "Storytelling"],
                        color: "border-green-500"
                    },
                    {
                        id: "05", category: "Optimization", title: "Conversion Rate Optimization", icon: MousePointer2,
                        desc: "Small improvements create big results. We optimize digital touchpoints by reducing friction across the conversion journey.",
                        points: ["Behavior Analysis", "Landing Page Refinement", "A/B Testing"],
                        color: "border-yellow-500"
                    },
                    {
                        id: "06", category: "Reach", title: "Local SEO & Visibility", icon: MapPin,
                        desc: "Local visibility connects brands with intent-driven customers. We optimize local presence to dominate relevant searches.",
                        points: ["GMB Optimization", "Local Keywords", "Review Strategy"],
                        color: "border-orange-500"
                    },
                    {
                        id: "07", category: "Insight", title: "Analytics & Tracking", icon: PieChart,
                        desc: "Data guides growth. We implement tracking systems that provide clarity, transparency, and actionable insights.",
                        points: ["Analytics Setup", "Performance Dashboards", "Strategic Reporting"],
                        color: "border-cyan-500"
                    }
                ].map((service, index) => (
                    <section key={service.id} className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`relative grid md:grid-cols-12 gap-12 items-center p-8 md:p-16 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors group`}
                        >
                            {/* Index Number */}
                            <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 font-heading select-none">{service.id}</div>

                            {/* Icon & Category */}
                            <div className="md:col-span-4 border-r border-white/10 pr-8">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-black border ${service.color} mb-6`}>
                                    <service.icon className="text-white w-8 h-8" />
                                </div>
                                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{service.category}</span>
                                <h3 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">{service.title}</h3>
                            </div>

                            {/* Description & Points */}
                            <div className="md:col-span-8 pl-0 md:pl-8">
                                <p className="text-xl text-gray-300 leading-relaxed mb-10 font-light">
                                    {service.desc}
                                </p>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {service.points.map((point, p) => (
                                        <div key={p} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${service.color.replace('border', 'bg')}`}></div>
                                            <span className="text-sm font-bold text-white">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>
                ))}
            </div>

            {/* 5. SYSTEM VIEW & 6. DELIVERY MODEL */}
            <section className="py-16 md:py-32 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-24"
                    >
                        How It All Connects
                    </motion.h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2"></div>

                        {[
                            { title: "Research & Understanding", desc: "We decode your market, audience, and goals." },
                            { title: "Strategy Architecture", desc: "We design a connected system, not random campaigns." },
                            { title: "Execution & Activation", desc: "We launch with precision across selected channels." },
                            { title: "Measurement & Optimization", desc: "We track impact and refine for better ROI." },
                            { title: "Scaling & Growth", desc: "We compound wins to drive long-term expansion." }
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative flex items-center gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} text-left md:text-right`}
                            >
                                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'pr-12' : 'pl-12 text-left'}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                                    <p className="text-gray-400">{phase.desc}</p>
                                </div>

                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-black border-4 border-blue-500 z-10 md:-translate-x-1/2 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                <div className="pl-12 md:pl-0 md:hidden w-full">
                                    <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                                    <p className="text-gray-400 text-sm">{phase.desc}</p>
                                </div>

                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CONFIDENCE */}
            <section className="py-16 md:py-24 bg-black text-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        {["Strategy-Led Execution", "Transparent Reporting", "Long-term Partnerships", "Growth-Focused Thinking"].map((item, i) => (
                            <span key={i} className="text-lg md:text-xl font-mono text-gray-400 uppercase tracking-widest">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-24 md:py-40 bg-gradient-to-t from-blue-900/20 to-black text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-12 max-w-4xl mx-auto">
                        Let’s Build a Digital System That <br /> Actually Grows Your Business.
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

export default Services;
