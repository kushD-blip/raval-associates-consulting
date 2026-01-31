import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xqebozvd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                // Reset status after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                            Stop Losing Money <br />to Inefficiencies.
                        </h2>
                        <div className="w-20 h-1 bg-brand-red mb-8"></div>
                        <p className="text-xl text-gray-600 mb-12">
                            Ready to transform your operations? Get in touch for a free 30-minute consultation or claim your <span className="font-bold text-brand-navy">Free 1-Week Service</span> trial.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-brand-red flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Email Us</h4>
                                    <a href="mailto:ravalandassociates26@gmail.com" className="text-gray-600 hover:text-brand-red transition">ravalandassociates26@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-brand-red flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy mb-1">Location</h4>
                                    <p className="text-gray-600">Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-brand-navy mb-8">Get Your Proposal</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email" name="email" required
                                        value={formData.email} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel" name="phone"
                                        value={formData.phone} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                                        placeholder="+91 ..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text" name="company"
                                        value={formData.company} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                                        placeholder="Cafe Co."
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                                <textarea
                                    name="message" required rows={4}
                                    value={formData.message} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition resize-none"
                                    placeholder="Tell us about your operational challenges..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className={`w-full text-white font-bold py-4 rounded-xl transition transform shadow-lg flex items-center justify-center gap-2 ${
                                    status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red hover:bg-red-700 hover:-translate-y-1'
                                }`}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>

                            {status === 'success' && (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 text-center font-medium animate-fade-in">
                                    Message sent successfully! We'll be in touch soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-center font-medium animate-fade-in">
                                    Something went wrong. Please try again or email us directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
