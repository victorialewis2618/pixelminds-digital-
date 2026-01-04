import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate sending
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-black text-white font-body selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* 1. OPENING MOMENT — THE INVITATION */}
            <section className="relative min-h-screen md:h-screen flex flex-col items-center justify-start md:justify-center bg-black overflow-hidden sticky top-0 z-0 pt-32 md:pt-0 pb-10 md:pb-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"
                ></motion.div>

                <div className="z-10 text-center space-y-6 max-w-4xl px-6">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                        className="w-1 h-20 bg-gradient-to-b from-transparent to-blue-500 mx-auto mb-8 origin-top"
                    ></motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-8xl font-bold font-heading tracking-tight"
                    >
                        Let’s Talk About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Growth.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed font-mono"
                    >
                        Whether you’re exploring ideas or ready to scale, Pixelminds digital is here to listen, understand, and build meaningful digital solutions.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-12 flex gap-4"
                >
                    <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="text-sm font-mono tracking-widest text-blue-500 hover:text-white transition-colors uppercase">
                        Start a Conversation
                    </button>
                    <span className="text-gray-600">|</span>
                    <a href="tel:+919623761343" className="text-sm font-mono tracking-widest text-gray-500 hover:text-white transition-colors uppercase">
                        Call Now
                    </a>
                </motion.div>
            </section>

            {/* 2. HUMAN ASSURANCE */}
            <div className="relative z-10 bg-zinc-950 pt-16 md:pt-32 pb-16 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Personal Response", desc: "We reply personally, not with automated bots." },
                            { title: "Confidentiality", desc: "Your ideas and data stay strictly between us." },
                            { title: "Understanding First", desc: "We listen to your goals before recommending anything." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-6"
                            >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. THE FORM — DIALOGUE */}
            <section className="relative z-10 bg-zinc-950 pb-16 md:pb-32">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
                        {/* Status Light */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <h2 className="text-3xl font-bold font-heading mb-8">Tell us about your vision.</h2>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formState.name ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formState.email ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formState.phone ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'project' || formState.project ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Project Type</label>
                                        <input
                                            type="text"
                                            name="project"
                                            value={formState.project}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('project')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="relative group pt-4">
                                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formState.message ? '-top-6 text-xs text-blue-500' : 'top-6 text-gray-500'}`}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows="4"
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none transition-colors resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Send My Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-center"
                            >
                                <CheckCircle className="w-20 h-20 text-green-500 mb-8" />
                                <h3 className="text-3xl font-bold font-heading mb-4">Message Received.</h3>
                                <p className="text-gray-400 max-w-md">
                                    Thank you for sharing your vision. We will review your message and get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* 4. DIRECT CONNECTION & 5. AVAILABILITY */}
            <section className="relative z-10 py-16 md:py-24 bg-black border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1: Phone */}
                        <a href="tel:+919623761343" className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-all hover:-translate-y-1">
                            <Phone className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Call Us</h4>
                            <p className="text-lg font-bold text-white">+91 96237 61343</p>
                        </a>

                        {/* Card 2: WhatsApp */}
                        <a href="https://wa.me/919665961721" className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-all hover:-translate-y-1">
                            <MessageCircle className="w-8 h-8 text-[#25D366] mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">WhatsApp</h4>
                            <p className="text-lg font-bold text-white">+91 96659 61721</p>
                        </a>

                        {/* Card 3: Email */}
                        <a href="mailto:Pixelmindsdigital@gmail.com" className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-all hover:-translate-y-1">
                            <Mail className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Email</h4>
                            <p className="text-lg font-bold text-white break-all">Pixelmindsdigital@gmail.com</p>
                        </a>

                        {/* Card 4: Location */}
                        <div className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl">
                            <MapPin className="w-8 h-8 text-red-500 mb-4" />
                            <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Location</h4>
                            <p className="text-lg font-bold text-white">Pune, Maharashtra</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
                            <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                            Our team typically responds within one business day.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 6. TRUST BLOCK & 7. CLOSING */}
            <section className="py-24 md:py-32 bg-gradient-to-t from-blue-900/20 to-black text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-20">
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        We don’t believe in pressure. We believe in clarity. <br />
                        Every conversation starts with understanding your goals — not selling services.
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-12">
                        Ready When You Are.
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:scale-105">
                            Start a Project
                        </button>
                        <a href="https://wa.me/919665961721" className="px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl hover:scale-105">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
