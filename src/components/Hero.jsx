import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
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
    );
};

export default Hero;
