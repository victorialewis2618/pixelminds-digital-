import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center px-6">
                    {/* Logo - Refreshes Homepage */}
                    <a href="/" className="text-lg xs:text-xl font-bold font-heading tracking-tight uppercase hover:text-blue-500 transition-colors">
                        PIXELMINDS <span className="text-blue-500">DIGITAL</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-blue-500 ${location.pathname === link.path ? 'text-blue-500' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
                        >
                            Get In Touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                    <div className="flex flex-col space-y-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-3xl font-bold font-heading tracking-tight transition-all duration-300 hover:scale-110 ${location.pathname === link.path ? 'text-blue-500' : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsContactOpen(true);
                            }}
                            className="px-6 py-3 xs:px-8 xs:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base xs:text-lg font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </nav>

            {/* Immersive Contact Modal */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Navbar;
