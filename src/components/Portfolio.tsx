import React from 'react';
import { User, Database, Code, BarChart, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Supply Chain Optimization",
        category: "Inventory Management",
        desc: "Managed 275M inventory value, reducing lead times and ensuring 95% availability using Power BI dashboards.",
        image: "/assets/inventory-analysis.png",
        tags: ["Power BI", "Supply Chain", "SQL"]
    },
    {
        title: "Chocolate Sales Dashboard",
        category: "Sales Analytics",
        desc: "Global sales tracking system analyzing 1,000+ units sold across 5 countries to identify top performers.",
        image: "/assets/chocolate-sales.png",
        tags: ["Data Viz", "Sales", "Strategy"]
    },
    {
        title: "Hospitality Menu Mix",
        category: "Menu Engineering",
        desc: "In-depth analysis of food vs. beverage margins to drive menu re-engineering and profit maximization.",
        image: "/assets/cafe-performance.png",
        tags: ["Menu Mix", "Margin Analysis", "Hospitality"]
    }
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">Case Studies & Profile</h2>
                    <div className="w-20 h-1 bg-brand-red mx-auto text-center"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* About Me / Profile Card */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl sticky top-24 border border-gray-100">
                            <div className="bg-brand-navy h-32 relative">
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 p-2 bg-white rounded-full">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                                        <img src="/assets/profile-photo-new.png" alt="Kushagra Raval" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-20 pb-8 px-8 text-center">
                                <h3 className="text-2xl font-bold text-brand-navy">Kushagra Raval</h3>
                                <p className="text-brand-red font-medium mb-4">Founder & Lead Consultant</p>

                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    MBA Candidate in Business Analytics at PDEU-SoM. Certified Lean Six Sigma Yellow Belt with experience optimizing operations for brands like Smytten and Lineal India.
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {['Power BI', 'SQL', 'Python', 'Supply Chain', 'Six Sigma', 'Forecasting'].map(skill => (
                                        <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <a href="#contact" className="w-full block bg-brand-navy text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                                    Work With Me
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="lg:w-2/3">
                        <h3 className="text-2xl font-bold text-brand-navy mb-8">Featured Projects</h3>
                        <div className="grid grid-cols-1 gap-10">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                                    <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                            <span className="text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm">View Analysis</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <div className="text-brand-red font-semibold text-sm mb-2">{project.category}</div>
                                            <h4 className="text-xl font-bold text-brand-navy mb-3">{project.title}</h4>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {project.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50 bg-white">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">#{tag}</span>
                                        ))}
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

export default Portfolio;
