import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 overflow-hidden relative">
            {/* Background Polish */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">

                {/* Mobile: Stack all sections vertically with minimal spacing */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-20">

                    {/* 1. Brand Block */}
                    <div className="md:col-span-4 space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading tracking-tight uppercase">
                            PIXELMINDS <span className="text-blue-500">DIGITAL</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                            Helping businesses grow through strategic digital marketing, performance-driven campaigns, and data-backed decisions.
                        </p>
                        <div className="flex gap-2 sm:gap-3">
                            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all hover:-translate-y-1"
                                >
                                    <Icon size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Quick Links
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Home', 'About', 'Services', 'Founders', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-2 group"
                                    >
                                        {item}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="md:col-span-5">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Contact Us
                        </h3>
                        <div className="grid gap-3 sm:gap-4">
                            {/* Phone */}
                            <a href="tel:+919623761343" className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-0.5">Call Us</p>
                                    <p className="text-sm sm:text-base md:text-xl font-bold font-mono truncate">+91 96237 61343</p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/919665961721" className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-0.5">WhatsApp</p>
                                    <p className="text-sm sm:text-base md:text-xl font-bold font-mono truncate">+91 96659 61721</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg hover:bg-white/5 transition-colors group">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-purple-500/10 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors flex-shrink-0">
                                    <MapPin size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-0.5">Visit Us</p>
                                    <p className="text-sm sm:text-base md:text-lg font-bold">Pune, Maharashtra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 overflow-hidden relative mb-4 sm:mb-6 md:mb-8">
                    <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-gray-500 text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} PIXELMINDS DIGITAL. All rights reserved.</p>
                    <p>Engineered for Growth.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
