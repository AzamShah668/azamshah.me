import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Import Custom Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
                    <div className="hidden md:flex gap-8 items-center">
                        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-widest uppercase">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-white/5 rounded-xl border border-white/10">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-black text-gray-500 hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <footer className="py-20 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-2xl font-black tracking-tighter">AZAM.</div>
                        <div className="flex gap-8 text-sm font-bold text-gray-500">
                            <a href="https://github.com/AzamShah668" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/azam-shah-4ba6752ba" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                        <p className="text-gray-600 text-sm">© 2026 Azam Shah. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
