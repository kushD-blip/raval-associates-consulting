import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-navy selection:bg-brand-red selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Methodology />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
