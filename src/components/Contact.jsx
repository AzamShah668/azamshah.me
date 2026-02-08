import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-purple-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden backdrop-blur-xl">
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight font-heading">
                                Let's <span className="text-purple-500">Collaborate</span> on Your Next Deployment.
                            </h2>
                            <p className="text-gray-400 text-lg mb-12">
                                Whether you're looking for a DevOps specialist, an AI workflow architect, or a dedicated software engineer, I'm always open to discussing new opportunities.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:azamshah25809@gmail.com" className="px-8 py-4 bg-purple-500 text-white font-bold rounded-2xl hover:bg-purple-600 transition-all flex items-center gap-2">
                                    <Mail size={20} /> Email Me
                                </a>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/azam-shah-4ba6752ba" },
                                        { icon: <Github size={20} />, url: "https://github.com/AzamShah668" }
                                    ].map((social, idx) => (
                                        <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="aspect-square relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-64 h-64 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
                                />
                                <div className="absolute flex flex-col items-center">
                                    <MessageSquare size={80} className="text-purple-500 mb-4 animate-bounce" />
                                    <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">Available for Hire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
