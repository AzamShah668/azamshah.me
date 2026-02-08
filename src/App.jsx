import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Server, Cpu, ExternalLink, Menu, X, ArrowRight } from 'lucide-react';

// Import Custom Components
import Hero from './components/Hero'; // We'll move the Hero logic here
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
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
                    >
                        AZAM.
                    </motion.div>

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
                {/* Inline Hero Logic for now or extract to separate component if preferred */}
                <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-400 mb-8 uppercase tracking-widest"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                Available for Projects
                            </motion.div>

                            <h2 className="text-gray-400 font-mono mb-4 text-lg">System Architect & DevOps Lead</h2>
                            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
                                Azam <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Shah</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                                Bridging the gap between <span className="text-white">advanced AI agents</span> and <span className="text-white">production-grade infrastructure</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <a href="#projects" className="group px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                                    Deploy Projects <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                                <a href="#contact" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm">
                                    Get in Touch
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                            <div className="w-1 h-2 bg-purple-500 rounded-full" />
                        </div>
                    </div>
                </section>

                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <footer className="py-20 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-2xl font-black tracking-tighter">AZAM.</div>
                        <div className="flex gap-8 text-sm font-bold text-gray-500">
                            <a href="https://github.com/AzamShah668" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
                            <a href="https://www.linkedin.com/in/azam-shah-4ba6752ba" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
                        </div>
                        <p className="text-gray-600 text-sm">© 2026 Azam Shah. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Simple Rocket icon if not imported correctly
const Rocket = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5l-2.5 1.5Z" />
        <path d="M11.5 4.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.95.71-3.5.12-4.5-.5l1.5-2.5Z" />
        <path d="M9 15l3-3" />
        <path d="M17 17l4.5 4.5" />
        <path d="M10 10l4.5 4.5" />
        <path d="M11 4c0-2-1.5-2-1.5-2S8 2 8 4" />
    </svg>
);

export default App;
