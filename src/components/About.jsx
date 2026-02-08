import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Rocket, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-8">
                            Systematic <span className="text-purple-500">Excellence</span> <br />
                            Driven by Passion
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a dedicated Computer Science student at Central University of Kashmir, currently specializing in <span className="text-white font-medium">DevOps</span> and <span className="text-white font-medium">AI Engineering</span>. At 22, I have already mastered the art of CI/CD pipelines, GitHub management, and multi-tier application deployment.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            My journey involves building complex workflows for AI agents and mastering the intricacies of machine learning. I believe in the power of automation and consistent improvement, aiming to deliver production-level software that is both robust and scalable.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { icon: <Rocket className="text-purple-500" />, title: "DevOps", desc: "CI/CD & Deployment" },
                                { icon: <BookOpen className="text-blue-500" />, title: "AI", desc: "Agent Workflows" },
                                { icon: <Award className="text-pink-500" />, title: "Student", desc: "B.Tech CSE" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="mb-3">{item.icon}</div>
                                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center p-8">
                            {/* This is where the Stitch generated illustration will be linked later */}
                            <div className="w-full h-full border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-gray-600">
                                <Cpu size={80} className="mb-4 opacity-20" />
                                <p className="px-4 text-center text-sm italic">"Mastering the bridge between development and operations."</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
