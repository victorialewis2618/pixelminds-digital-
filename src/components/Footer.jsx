import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 overflow-hidden relative">
            {/* Background Polish */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                    {/* 1. Brand Block (4 Cols) */}
                    <div className="md:col-span-4 space-y-6 sm:space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight uppercase">
                            PIXELMINDS <span className="text-blue-500">DIGITAL</span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm">
                            Helping businesses grow through strategic digital marketing, performance-driven campaigns, and data-backed decisions.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all hover:-translate-y-1">
                                    <Icon size={18} className="sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links (3 Cols) */}
                    <div className="md:col-span-3">
                        <h3 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Quick Links
                        </h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {['Home', 'About', 'Services', 'Founders', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-sm sm:text-base text-gray-400 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2 group"
                                    >
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info (5 Cols) */}
                    <div className="md:col-span-5">
                        <h3 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Contact Us
                        </h3>
                        <div className="grid gap-4 sm:gap-6">
                            <a href="tel:+919623761343" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Call Us</p>
                                    <p className="text-lg sm:text-xl font-bold font-mono">+91 96237 61343</p>
                                </div>
                            </a>

                            <a href="https://wa.me/919665961721" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-2.5 sm:p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-1">WhatsApp</p>
                                    <p className="text-lg sm:text-xl font-bold font-mono">+91 96659 61721</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Visit Us</p>
                                    <p className="text-base sm:text-lg font-bold">Pune, Maharashtra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Divider */}
                <div className="w-full h-[1px] bg-white/10 overflow-hidden relative mb-6 sm:mb-8">
                    <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} PIXELMINDS DIGITAL. All rights reserved.</p>
                    <p>Engineered for Growth.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
