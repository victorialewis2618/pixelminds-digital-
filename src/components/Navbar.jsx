import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

// Shuffle Text Component for Desktop Hover Effect
const ShuffleText = ({ text, isActive }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        if (isActive) return; // Don't animate if active (steady state)
        setDisplayText(text); // Reset
    }, [isActive, text]);

    const handleHover = () => {
        if (isActive) return;
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const handleLeave = () => {
        setDisplayText(text);
    };

    return (
        <span
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="font-mono text-sm tracking-widest uppercase cursor-pointer"
        >
            {displayText}
        </span>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Founders', path: '/founders' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                    ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10'
                    : 'py-6 bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center px-6">
                    {/* Logo */}
                    <Link to="/" className="group relative z-50 flex flex-col leading-none">
                        <span className="text-2xl font-black font-heading tracking-tighter text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                            PIXELMINDS
                        </span>
                        <span className="text-[10px] font-bold font-mono text-blue-500 tracking-[0.35em] uppercase group-hover:tracking-[0.55em] transition-all duration-500 ease-out pl-0.5">
                            DIGITAL
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`
                                    relative py-2 transition-colors
                                    ${location.pathname === link.path ? 'text-blue-500' : 'text-gray-400 hover:text-white'}
                                `}
                            >
                                <ShuffleText text={link.name} isActive={location.pathname === link.path} />
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-500"
                                    />
                                )}
                            </Link>
                        ))}

                        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="group flex items-center gap-2 px-6 py-2 bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all rounded-sm"
                        >
                            <span>Start Project</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors relative"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-zinc-950 border-l border-white/10 z-50 md:hidden shadow-2xl flex flex-col pt-24"
                        >
                            <div className="flex-grow px-8 py-4 overflow-y-auto">
                                <nav className="flex flex-col space-y-6">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`
                                                    flex items-center justify-between text-2xl font-bold font-heading group
                                                    ${location.pathname === link.path ? 'text-blue-500' : 'text-white hover:text-gray-300'}
                                                `}
                                            >
                                                <span>{link.name}</span>
                                                <ChevronRight size={20} className={`opacity-50 transition-transform group-hover:translate-x-1 ${location.pathname === link.path ? 'text-blue-500 opacity-100' : ''}`} />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-8 border-t border-white/10 bg-zinc-900/50">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsContactOpen(true);
                                    }}
                                    className="w-full py-4 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all rounded-sm mb-4 shadow-lg shadow-blue-900/20"
                                >
                                    Get In Touch
                                </button>
                                <p className="text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest">
                                    Pixelminds Digital © 2026
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Navbar;
