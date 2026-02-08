import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        type: "Education",
        title: "B.Tech in Computer Science Engineering",
        organization: "Central University of Kashmir, Ganderbal",
        period: "2022 - Present",
        description: "Currently pursuing engineering with a focus on core computer science principles, algorithms, and system architecture.",
        icon: <GraduationCap className="text-purple-400" />
    },
    {
        type: "Internship",
        title: "Machine Learning Intern",
        organization: "Tech Innovation Hub",
        period: "Previous Tenure",
        description: "Assisted in developing predictive models and worked on data preprocessing pipelines for large-scale datasets.",
        icon: <Briefcase className="text-blue-400" />
    },
    {
        type: "Self-Project",
        title: "DevOps Engineer & GitHub Master",
        organization: "Self-Initiated",
        period: "Continuous",
        description: "Built and deployed multiple three-tier applications, mastered CI/CD pipelines, and developed autonomous AI agent workflows.",
        icon: <Calendar className="text-pink-400" />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-heading">Journey & <span className="text-pink-500">Growth</span></h2>
                    <p className="text-gray-400">My academic path and professional explorations in the world of technology.</p>
                </div>

                <div className="space-y-12">
                    {experienceData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 border-l border-white/10"
                        >
                            <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10">
                                {item.icon}
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all">
                                <span className="text-xs font-mono text-pink-500 uppercase tracking-widest mb-2 block">{item.type} • {item.period}</span>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <h4 className="text-gray-400 font-medium mb-4">{item.organization}</h4>
                                <p className="text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
