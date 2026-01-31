import React from 'react';
import { Search, Utensils, Zap, Box, BarChart3, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "The 'Margin Leakage' Diagnostic",
        description: "Focus on uncovering the \"invisible\" 3-5% revenue lost to waste and theft through deep-dive data forensics.",
        icon: Search,
        bg: "bg-blue-50",
        text: "text-blue-600"
    },
    {
        title: "Strategic Menu Engineering",
        description: "Analyze items on a Profit vs. Popularity matrix (Stars, Plowhorses, Puzzles, Dogs) to maximize yield.",
        icon: Utensils,
        bg: "bg-orange-50",
        text: "text-orange-600"
    },
    {
        title: "AI-Powered Digital Growth",
        description: "Optimization of delivery vs. dine-in pricing to combat aggregator commissions and boost margins.",
        icon: Zap,
        bg: "bg-purple-50",
        text: "text-purple-600"
    },
    {
        title: "Inventory & Supply 'Lean-Audit'",
        description: "Demand forecasting to reduce spoilage by 15% and free up 20% capital using lean principles.",
        icon: Box,
        bg: "bg-green-50",
        text: "text-green-600"
    },
    {
        title: "The 'Virtual Analytics Partner'",
        description: "Acting as a fractional Head of Analytics for established brands, providing continuous insights.",
        icon: BarChart3,
        bg: "bg-slate-50",
        text: "text-slate-600"
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">Our Expertise</h2>
                    <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg">
                        We don't just provide data; we provide solutions. Our specialized services are designed to address the specific pain points of modern operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 border border-gray-100 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out -z-10"></div>

                            <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors`}>
                                <service.icon className={`${service.text} group-hover:text-white transition-colors`} size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>

                            <a href="#contact" className="inline-flex items-center text-brand-red font-semibold group-hover:text-white transition-colors">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
