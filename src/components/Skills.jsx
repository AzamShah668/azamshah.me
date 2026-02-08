import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Brain, Layers, GitBranch } from 'lucide-react';

const skillsData = [
    {
        category: "DevOps & Cloud",
        icon: <Server className="text-blue-400" />,
        skills: ["CI/CD Pipelines", "GitHub Actions", "Docker", "Kubernetes", "Nginx", "Linux Administration"]
    },
    {
        category: "AI & Machine Learning",
        icon: <Brain className="text-purple-400" />,
        skills: ["AI Agent Workflows", "Prompt Engineering", "ML Model Training", "Neural Networks", "OpenAI API", "N8N Automation"]
    },
    {
        category: "Development",
        icon: <Code2 className="text-pink-400" />,
        skills: ["React.js", "Node.js", "Python", "C++", "JavaScript", "SQL & NoSQL"]
    },
    {
        category: "Mastery Tools",
        icon: <GitBranch className="text-green-400" />,
        skills: ["GitHub Master", "Git Flow", "Terraform", "Jenkins", "AWS Services", "Postman"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-black/50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4 font-heading"
                    >
                        Technical <span className="text-purple-500">Arsenal</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From deploying complex CI/CD pipelines to architecting autonomous AI agent workflows, I leverage a diverse set of modern technologies to bridge the gap between idea and execution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
