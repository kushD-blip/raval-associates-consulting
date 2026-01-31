import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-32 -z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
                        <div className="inline-block bg-brand-red/10 text-brand-red font-semibold px-4 py-1.5 rounded-full text-sm">
                            Data-Driven Growth for Hospitality & Retail
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy leading-tight">
                            Turning Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">Operations Profit</span>.
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Bridging the gap between <span className="font-semibold italic">'Gut Feeling'</span> and <span className="font-semibold text-brand-navy">'Data'</span>.
                            We transform raw POS data into actionable profit strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="bg-brand-red text-white px-8 py-4 rounded shadow-xl hover:bg-red-700 transition transform hover:-translate-y-1 font-bold text-lg text-center flex items-center justify-center gap-2">
                                Get Your Free Audit
                                <ArrowRight size={20} />
                            </a>
                            <a href="#services" className="bg-white text-brand-navy border-2 border-brand-navy px-8 py-4 rounded shadow-md hover:bg-brand-navy hover:text-white transition font-bold text-lg text-center">
                                Explore Services
                            </a>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-navy rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-[1.01]">
                                {/* Main Dashboard Image */}
                                <img src="/assets/cafe-performance.png" alt="Performance Dashboard" className="w-full h-auto rounded-xl" />

                                {/* Floating Stats */}
                                <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl border-l-4 border-brand-red flex items-center gap-4 animate-float">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <TrendingUp className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Revenue Growth</p>
                                        <p className="text-2xl font-bold text-brand-navy">+24%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
