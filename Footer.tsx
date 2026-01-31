import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className="font-bold text-xl tracking-tight">RAVAL & ASSOCIATES</span>
                    </div>
                    <p className="text-gray-400 text-sm">© 2026 Raval & Associates. All rights reserved.</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm">Design based in Ahmedabad, Gujarat</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
