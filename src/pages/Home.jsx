import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, BarChart3, Target, Zap, Globe, Users, TrendingUp, Layers, Video, Award, X, CheckCircle2, Sparkles } from 'lucide-react';
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
    const [selectedService, setSelectedService] = useState(null);

    // Detailed service information
    const servicesData = [
        {
            id: 'seo',
            title: "SEO",
            desc: "Rank Higher, Grow Organically",
            icon: Globe,
            gradient: "from-emerald-500 to-teal-500",
            bgGlow: "bg-emerald-500/20",
            details: {
                overview: "Search Engine Optimization is the foundation of sustainable digital growth. We help your business dominate search results through strategic optimization, technical excellence, and authority building.",
                benefits: [
                    "Increase organic traffic by 200-400% within 6-12 months",
                    "Build long-term visibility that compounds over time",
                    "Reduce customer acquisition costs significantly",
                    "Establish brand authority in your industry"
                ],
                whatWeDeliver: [
                    "Comprehensive SEO audit and competitor analysis",
                    "Technical SEO optimization for faster, crawlable websites",
                    "Keyword research and content strategy",
                    "High-quality backlink acquisition",
                    "Monthly performance reports with actionable insights"
                ],
                idealFor: "Businesses looking for sustainable, long-term growth without relying solely on paid advertising."
            }
        },
        {
            id: 'paid-ads',
            title: "Paid Ads",
            desc: "Google & Meta Performance",
            icon: Zap,
            gradient: "from-yellow-500 to-orange-500",
            bgGlow: "bg-yellow-500/20",
            details: {
                overview: "Performance marketing delivers immediate results. We create data-driven ad campaigns on Google and Meta platforms that maximize ROI and drive qualified leads to your business.",
                benefits: [
                    "Get instant visibility and traffic to your website",
                    "Target your ideal customers with precision",
                    "Scale campaigns based on real-time performance data",
                    "Achieve measurable ROI with transparent tracking"
                ],
                whatWeDeliver: [
                    "Strategic campaign planning and audience research",
                    "Creative ad design and compelling copywriting",
                    "Advanced targeting and bid optimization",
                    "A/B testing for continuous improvement",
                    "Detailed analytics and conversion tracking"
                ],
                idealFor: "Businesses seeking fast growth, product launches, or seasonal campaigns with measurable returns."
            }
        },
        {
            id: 'social-media',
            title: "Social Media",
            desc: "Community & Brand Building",
            icon: Users,
            gradient: "from-pink-500 to-rose-500",
            bgGlow: "bg-pink-500/20",
            details: {
                overview: "Social media is where brands build trust and community. We create engaging content strategies that turn followers into loyal customers and brand advocates.",
                benefits: [
                    "Build a loyal community around your brand",
                    "Increase brand awareness and recognition",
                    "Drive engagement and meaningful conversations",
                    "Generate leads through social platforms"
                ],
                whatWeDeliver: [
                    "Platform-specific content strategy",
                    "Professional content creation (graphics, videos, copy)",
                    "Community management and engagement",
                    "Influencer collaboration and partnerships",
                    "Social media advertising integration"
                ],
                idealFor: "Brands wanting to build emotional connections and engage directly with their target audience."
            }
        },
        {
            id: 'content',
            title: "Content",
            desc: "Storytelling that Converts",
            icon: Video,
            gradient: "from-purple-500 to-indigo-500",
            bgGlow: "bg-purple-500/20",
            details: {
                overview: "Content is the voice of your brand. We craft compelling stories, blogs, videos, and copy that educate, engage, and convert your audience into customers.",
                benefits: [
                    "Establish thought leadership in your industry",
                    "Educate and nurture potential customers",
                    "Improve SEO with high-quality, relevant content",
                    "Build trust through valuable information"
                ],
                whatWeDeliver: [
                    "Content strategy aligned with business goals",
                    "SEO-optimized blog posts and articles",
                    "Video scripts and multimedia content",
                    "Email marketing campaigns",
                    "Case studies and whitepapers"
                ],
                idealFor: "Businesses that want to educate their market and build authority through valuable content."
            }
        },
        {
            id: 'branding',
            title: "Branding",
            desc: "Identity & Creative Strategy",
            icon: Award,
            gradient: "from-blue-500 to-cyan-500",
            bgGlow: "bg-blue-500/20",
            details: {
                overview: "Your brand is more than a logo—it's how customers perceive you. We develop cohesive brand identities that differentiate you from competitors and resonate with your audience.",
                benefits: [
                    "Create a memorable and distinctive brand identity",
                    "Stand out in crowded markets",
                    "Build emotional connections with customers",
                    "Increase brand value and recognition"
                ],
                whatWeDeliver: [
                    "Brand strategy and positioning",
                    "Visual identity design (logo, colors, typography)",
                    "Brand guidelines and style guides",
                    "Messaging frameworks and tone of voice",
                    "Brand collateral and marketing materials"
                ],
                idealFor: "Startups and businesses looking to rebrand or establish a strong, cohesive identity."
            }
        },
        {
            id: 'cro',
            title: "CRO",
            desc: "Conversion Rate Optimization",
            icon: Target,
            gradient: "from-red-500 to-pink-500",
            bgGlow: "bg-red-500/20",
            details: {
                overview: "Small improvements create big results. We analyze user behavior and optimize every touchpoint to increase conversions and maximize the value of your existing traffic.",
                benefits: [
                    "Increase conversion rates by 30-150%",
                    "Get more value from existing traffic",
                    "Reduce bounce rates and cart abandonment",
                    "Improve user experience and satisfaction"
                ],
                whatWeDeliver: [
                    "Conversion funnel analysis and optimization",
                    "Landing page design and A/B testing",
                    "User behavior tracking and heatmaps",
                    "Form optimization and checkout improvements",
                    "Continuous testing and iteration"
                ],
                idealFor: "Businesses with existing traffic looking to maximize ROI and improve conversion efficiency."
            }
        },
        {
            id: 'local-seo',
            title: "Local SEO",
            desc: "Dominate Local Search",
            icon: Globe,
            gradient: "from-green-500 to-emerald-500",
            bgGlow: "bg-green-500/20",
            details: {
                overview: "Local SEO connects you with customers in your area. We optimize your online presence to dominate local search results and drive foot traffic to your business.",
                benefits: [
                    "Appear in 'near me' searches and Google Maps",
                    "Attract high-intent local customers",
                    "Build trust with reviews and local citations",
                    "Outrank local competitors"
                ],
                whatWeDeliver: [
                    "Google Business Profile optimization",
                    "Local keyword targeting and content",
                    "Citation building and NAP consistency",
                    "Review management and reputation building",
                    "Local link building strategies"
                ],
                idealFor: "Local businesses, multi-location brands, and service providers targeting specific geographic areas."
            }
        },
        {
            id: 'analytics',
            title: "Analytics",
            desc: "Tracking & Reporting",
            icon: BarChart3,
            gradient: "from-violet-500 to-purple-500",
            bgGlow: "bg-violet-500/20",
            details: {
                overview: "Data drives growth. We implement comprehensive tracking systems and provide clear, actionable insights that help you make informed decisions and optimize performance.",
                benefits: [
                    "Understand exactly what's working and what's not",
                    "Make data-driven decisions with confidence",
                    "Track ROI across all marketing channels",
                    "Identify opportunities for improvement"
                ],
                whatWeDeliver: [
                    "Google Analytics 4 setup and configuration",
                    "Custom dashboards and reporting",
                    "Conversion tracking and goal setup",
                    "Multi-channel attribution analysis",
                    "Monthly performance reports with insights"
                ],
                idealFor: "Businesses that want transparency, accountability, and data-backed strategies."
            }
        }
    ];

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

            {/* 3. SERVICES SNAPSHOT - CREATIVE INTERACTIVE GRID */}
            <section className="py-12 md:py-24 lg:py-32 xl:py-40 bg-black relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-500/10 rounded-full blur-[120px] md:blur-[150px]"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-screen-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16 lg:mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm">Our Capabilities</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            Full-Spectrum Digital Growth
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                            Click on any service to discover how we can transform your digital presence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 xl:gap-8 max-w-7xl mx-auto">
                        {servicesData.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedService(service)}
                                className="group relative p-6 sm:p-7 md:p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/30 active:border-white/40 transition-all cursor-pointer overflow-hidden"
                            >
                                {/* Gradient Glow Effect */}
                                <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>

                                {/* Animated Border Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with Gradient */}
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="w-full h-full bg-black rounded-lg sm:rounded-xl flex items-center justify-center">
                                            <service.icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                        {service.desc}
                                    </p>

                                    {/* Learn More Indicator */}
                                    <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Sparkle Effect on Hover */}
                                <motion.div
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-10 sm:mt-12 md:mt-16 text-center"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/50"
                        >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE DETAIL MODAL */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 pb-4 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-2xl sm:rounded-3xl overflow-y-auto shadow-2xl max-h-[90vh]"
                        >
                            {/* Header with Gradient */}
                            <div className={`relative p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br ${selectedService.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                                <div className="relative z-10">
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full flex items-center justify-center transition-all"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>

                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md p-[2px]`}>
                                        <div className="w-full h-full bg-black/50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                            <selectedService.icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{selectedService.title}</h2>
                                    <p className="text-base sm:text-lg md:text-xl text-white/90">{selectedService.desc}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 sm:space-y-10">
                                {/* Overview */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                        <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full bg-gradient-to-b ${selectedService.gradient}`}></div>
                                        What It Is
                                    </h3>
                                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                        {selectedService.details.overview}
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full bg-gradient-to-b ${selectedService.gradient}`}></div>
                                        Key Benefits
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                        {selectedService.details.benefits.map((benefit, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all"
                                            >
                                                <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 bg-gradient-to-br ${selectedService.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* What We Deliver */}
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                        <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full bg-gradient-to-b ${selectedService.gradient}`}></div>
                                        What We Deliver
                                    </h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        {selectedService.details.whatWeDeliver.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg border-l-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
                                            >
                                                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br ${selectedService.gradient} flex-shrink-0`}></div>
                                                <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ideal For */}
                                <div className={`p-4 sm:p-5 md:p-6 bg-gradient-to-br ${selectedService.gradient} bg-opacity-10 rounded-xl sm:rounded-2xl border border-white/10`}>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Ideal For
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        {selectedService.details.idealFor}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Link
                                        to="/contact"
                                        className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${selectedService.gradient} hover:opacity-90 active:opacity-80 rounded-lg sm:rounded-xl font-bold text-center text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-lg`}
                                    >
                                        Get Started with {selectedService.title}
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/20 rounded-lg sm:rounded-xl font-bold text-center text-sm sm:text-base transition-all"
                                    >
                                        Explore All Services
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
