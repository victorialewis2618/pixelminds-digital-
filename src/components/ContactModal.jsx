import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, MessageCircle, Mail, CheckCircle } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="bg-zinc-950 w-full max-w-6xl h-full md:h-auto max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                            >
                                <X size={24} />
                            </button>

                            {/* LEFT SIDE — BRAND & EMOTION */}
                            <div className="w-full md:w-5/12 bg-black border-b md:border-b-0 md:border-r border-white/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 opacity-50 mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                                <div className="relative z-10">
                                    <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-6 font-heading">Pixelminds Digital</h2>
                                    <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
                                        Let’s Start a <br /> Conversation
                                    </h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                                        Tell us what you’re thinking. We’ll help you shape it into something powerful.
                                    </p>
                                </div>

                                <div className="relative z-10 space-y-6 mt-12 md:mt-0">
                                    <div className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Phone size={18} />
                                        </div>
                                        <span className="text-sm font-mono tracking-wider">+91 96237 61343</span>
                                    </div>
                                    <div className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                            <MessageCircle size={18} />
                                        </div>
                                        <span className="text-sm font-mono tracking-wider">+91 96659 61721</span>
                                    </div>
                                    <div className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <Mail size={18} />
                                        </div>
                                        <span className="text-sm font-mono tracking-wider">Pixelmindsdigital@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE — FORM */}
                            <div className="w-full md:w-7/12 bg-zinc-950 p-8 md:p-12 overflow-y-auto">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto md:ml-0">

                                        <div className="space-y-6">
                                            <div className="relative group">
                                                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formState.name ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-blue-500 outline-none transition-colors"
                                                    required
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="relative group">
                                                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formState.email ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Email Address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formState.email}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('email')}
                                                        onBlur={() => setFocusedField(null)}
                                                        className="w-full bg-transparent border-b border-white/10 py-2 focus:border-blue-500 outline-none transition-colors"
                                                        required
                                                    />
                                                </div>
                                                <div className="relative group">
                                                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formState.phone ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formState.phone}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('phone')}
                                                        onBlur={() => setFocusedField(null)}
                                                        className="w-full bg-transparent border-b border-white/10 py-2 focus:border-blue-500 outline-none transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative group">
                                                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'service' || formState.service ? '-top-6 text-xs text-blue-500' : 'top-2 text-gray-500'}`}>Service Needed</label>
                                                <select
                                                    name="service"
                                                    value={formState.service}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('service')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-blue-500 outline-none transition-colors appearance-none text-white [&>option]:bg-zinc-900"
                                                >
                                                    <option value=""></option>
                                                    <option value="seo">SEO & Organic Growth</option>
                                                    <option value="paid">Performance Marketing</option>
                                                    <option value="social">Social Media & Branding</option>
                                                    <option value="content">Content & Strategy</option>
                                                    <option value="other">Other / Custom</option>
                                                </select>
                                            </div>

                                            <div className="relative group pt-4">
                                                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formState.message ? '-top-6 text-xs text-blue-500' : 'top-6 text-gray-500'}`}>Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField(null)}
                                                    rows="3"
                                                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-blue-500 outline-none transition-colors resize-none"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-lg"
                                            >
                                                Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

                                        <p className="text-center text-xs text-gray-500 pt-4">
                                            We respect your time and privacy. No spam. No pressure.
                                        </p>
                                    </form>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6"
                                        >
                                            <CheckCircle size={40} />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold font-heading mb-4">Message Sent</h3>
                                        <p className="text-gray-400 max-w-sm">
                                            Thank you for reaching out. We'll be in touch shortly to start the conversation.
                                        </p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
