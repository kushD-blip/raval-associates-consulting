import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'About & Projects', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="flex items-center gap-3 group">
                        {/* Using the logo icon */}
                        <img src="/assets/logo.png" alt="R" className="h-10 w-auto object-contain" />
                        <span className={`text-xl md:text-2xl font-bold tracking-tight text-brand-navy group-hover:text-brand-red transition-colors font-sans`}>
                            RAVAL & ASSOCIATES
                        </span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-navy hover:text-brand-red font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-brand-red text-white px-6 py-2.5 rounded shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5 font-semibold text-sm uppercase tracking-wide"
                    >
                        Get 1-Week Free Service
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy focus:outline-none p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                <div className="flex flex-col space-y-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-brand-navy text-lg font-medium border-b border-gray-100 pb-2 hover:text-brand-red"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-brand-red text-white text-center py-3 rounded font-bold mt-4"
                    >
                        Get 1-Week Free Service
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
