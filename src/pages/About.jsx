import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, TrendingUp, RefreshCw, Zap, ShieldCheck, Award, Users, ArrowRight, CheckCircle2, Search, Share2, PenTool, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const About = () => {
    return (
        <div className="bg-black text-white font-body selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* 1. HERO SECTION: CLEAN + TRENDY + PROFESSIONAL */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black py-20">
                {/* Light/Soft Abstract Gradient Background */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left: Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-2xl"
                        >
                            <motion.h1 variants={fadeInUp} className="text-3xl xs:text-4xl md:text-7xl font-bold font-heading leading-tight mb-6 tracking-tight">
                                We Build Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Growth That</span> <br />
                                Actually Performs
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                                Pixelminds digital helps brands grow online through strategy-led digital marketing, performance campaigns, and measurable results.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20 text-center">
                                    Start Your Growth
                                </Link>
                                <a href="https://wa.me/919665961721" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                                    <MessageCircle size={18} /> WhatsApp Us
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right: Abstract Motion Shape */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="relative h-[250px] md:h-[600px] flex items-center justify-center"
                        >
                            {/* Abstract Graphic: Growth Curves */}
                            <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                                <motion.path
                                    d="M 20 150 Q 80 180 120 100 T 180 20"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                />
                                <motion.path
                                    d="M 20 160 Q 90 190 130 110 T 190 30"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Elements (Subtle) */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute top-1/4 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. OUR STORY: UNIQUE & HUMAN */}
            <section className="py-16 md:py-32 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-6 block">Our Story</span>

                            <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                                <p>
                                    <strong className="text-white">Pixelminds digital</strong> was created with one clear belief: digital marketing should be <span className="text-white">strategic, transparent</span>, and focused on real growth.
                                </p>

                                <p>
                                    We saw too many brands investing in marketing without clarity, direction, or measurable outcomes. So we built a studio that combines creative thinking with performance-driven execution.
                                </p>

                                <p>
                                    Every project we take on starts with understanding the business, the audience, and the long-term goal. From SEO and paid campaigns to social presence and optimization, we focus on building <span className="text-white">systems that scale</span>, not tactics that fade.
                                </p>

                                <p>
                                    Today, Pixelminds digital partners with brands that want <span className="text-white">consistency, clarity</span>, and sustainable digital success.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Visual Element (Minimal Illustration) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-[300px] xs:h-[500px] border border-white/5 rounded-3xl bg-black/50 overflow-hidden flex items-center justify-center p-8 xs:p-12"
                        >
                            {/* Abstract Line Graphic for Growth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
                            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 opacity-80">
                                <motion.circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none"
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <motion.circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none"
                                    animate={{ scale: [1, 1.2, 1], rotate: 180 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                            </svg>
                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-blue-400 uppercase tracking-widest mb-1">Impact</p>
                                        <p className="text-white font-bold text-lg">Measurable Outcomes</p>
                                    </div>
                                    <TrendingUp className="text-blue-500" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. OUR MINDSET - GRID (Preserving Structure) */}
            <section className="py-16 md:py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4">How We Think</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "Strategy Before Execution", desc: "Every campaign starts with understanding the brand, audience, and objective.", icon: Target },
                            { title: "Data Over Assumptions", desc: "Decisions are driven by analytics, performance metrics, and real insights.", icon: BarChart3 },
                            { title: "Growth With Purpose", desc: "We focus on sustainable, long-term growth rather than short-term spikes.", icon: TrendingUp },
                            { title: "Continuous Optimization", desc: "Digital growth is never static. We test, learn, and refine continuously.", icon: RefreshCw }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="p-10 bg-zinc-900 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-500 group-hover:text-white">
                                    <item.icon size={26} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DIFFERENTIATION (Preserving Structure) */}
            <section className="py-16 md:py-24 bg-blue-900/10 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">What Makes Us Different?</h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                PIXELMINDS DIGITAL is not a one-size-fits-all agency. We customize our approach because no two businesses are the same.
                            </p>
                            <Link to="/services" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all inline-flex items-center gap-2">
                                Explore Our Services <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 gap-4">
                            {[
                                "Performance-focused digital strategies",
                                "Transparent reporting and insights",
                                "Customized marketing plans for each business",
                                "Strong balance between creativity and logic",
                                "Hands-on involvement from strategy to execution"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-black border border-white/10 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-colors"
                                >
                                    <CheckCircle2 className="text-blue-500 shrink-0" />
                                    <span className="font-bold">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. EXPERTISE */}
            <section className="py-16 md:py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold font-heading mb-6">Our Expertise</h2>
                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { title: "SEO", icon: Search }, { title: "Performance Marketing", icon: Zap },
                                { title: "Social Media", icon: Share2 }, { title: "Content Marketing", icon: PenTool },
                                { title: "Conversion Opt.", icon: Target }, { title: "Local SEO", icon: MapPin },
                                { title: "Analytics", icon: BarChart3 }, { title: "Branding", icon: Award }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
                                    <item.icon className="mx-auto h-10 w-10 text-gray-500 mb-4 group-hover:text-blue-500 transition-colors" />
                                    <h3 className="font-bold">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PROCESS */}
            <section className="py-16 md:py-24 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold font-heading text-center mb-16">How We Work</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding business goals, audience, and competitors." },
                            { step: "02", title: "Strategy", desc: "Creating a clear digital roadmap aligned with objectives." },
                            { step: "03", title: "Execution", desc: "Implementing campaigns with continuous performance tracking." },
                            { step: "04", title: "Reporting", desc: "Providing insights, learning from data, and scaling what works." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="relative p-8 bg-black rounded-2xl border-t-4 border-blue-600 border-x border-b border-white/5"
                            >
                                <span className="text-6xl font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span> {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. VALUES */}
            <section className="py-16 md:py-24 bg-black border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold font-heading mb-6">What Drives Us</h2>
                            <p className="text-gray-400">Core principles that guide every decision we make.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Transparency", desc: "In communication." }, { title: "Accountability", desc: "In performance." },
                                { title: "Innovation", desc: "In strategy." }, { title: "Partnership", desc: "Client success is priority." }
                            ].map((val, i) => (
                                <div key={i} className="border-l-2 border-blue-500 pl-6 py-2">
                                    <h3 className="text-xl font-bold text-white">{val.title}</h3>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. HUMAN TOUCH */}
            <section className="py-16 md:py-32 bg-zinc-950 flex items-center justify-center text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Users className="w-16 h-16 text-blue-500 mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Partnerships Over Transactions.</h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                        "At PIXELMINDS DIGITAL, we believe strong digital results come from strong partnerships. We work closely with our clients and align our strategies with their long-term vision."
                    </p>
                </div>
            </section>

            {/* 9. CTA */}
            <section className="py-16 md:py-32 bg-gradient-to-br from-blue-900/20 to-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-10">Ready to Build Meaningful <br /> Digital Growth?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                            Contact Us
                        </Link>
                        <a href="tel:+919623761343" className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            Call Now
                        </a>
                        <a href="https://wa.me/919665961721" className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
