import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, GitFork } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/AzamShah668/repos?sort=updated&per_page=6');
                setRepos(response.data);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 font-heading">Featured <span className="text-blue-500">Deployments</span></h2>
                        <p className="text-gray-400 max-w-xl">
                            A collection of my work fetched directly from GitHub, showcasing DevOps patterns, three-tier applications, and AI integrations.
                        </p>
                    </div>
                    <a href="https://github.com/AzamShah668" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        View all on GitHub <ExternalLink size={16} />
                    </a>
                </div>

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-[300px] rounded-3xl bg-white/5 animate-pulse border border-white/10" />
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {repos.map((repo, idx) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col h-full group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                                        <Code size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 line-clamp-1">{repo.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {repo.description || "Production-ready repository implementing modern industry standards and clean code architecture."}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {repo.stargazers_count}</span>
                                        <span className="flex items-center gap-1"><GitFork size={14} className="text-blue-500" /> {repo.forks_count}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 uppercase tracking-wider font-bold">
                                        {repo.language || "Shell"}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
