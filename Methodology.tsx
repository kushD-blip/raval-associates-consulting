import React from 'react';
import { Database, TrendingUp, Settings, Award, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        title: "Data Collection",
        desc: "Rigorous gathering of POS, inventory, and operational data.",
        icon: Database
    },
    {
        title: "Analysis (The War Room)",
        desc: "Deep-dive diagnostics to identify margin leakage and opportunities.",
        icon: Search,
        special: true
    },
    {
        title: "Implementation",
        desc: "Deploying the strategies with your team on the ground.",
        icon: Settings
    },
    {
        title: "ROI Review",
        desc: "Measuring success against the 60-day payback target.",
        icon: TrendingUp
    }
];

import { Search } from 'lucide-react';

const Methodology: React.FC = () => {
    return (
        <section id="methodology" className="py-24 bg-brand-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Why <br />Raval & Associates?
                        </h2>
                        <div className="w-20 h-1 bg-brand-red mb-8"></div>

                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                            <div className="flex items-start gap-4 mb-4">
                                <Award className="text-brand-red w-10 h-10 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">ROI Focused</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        "Every package is designed to pay for itself within the first 60 days."
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-4 pt-4 border-t border-white/10">
                                We don't charge for hours; we charge for results.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <h3 className="text-xl font-semibold mb-10 text-center lg:text-left text-brand-red uppercase tracking-widest">The 4-Week Cycle</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((step, index) => (
                                <div key={index} className="relative group">
                                    {/* Connector Line (Desktop) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 -z-10 group-hover:bg-brand-red transition-colors duration-500"></div>
                                    )}

                                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full border-4 border-gray-700 flex items-center justify-center mb-6 group-hover:border-brand-red transition-colors duration-300 relative z-10">
                                            <step.icon className="text-white" size={24} />
                                        </div>

                                        <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
