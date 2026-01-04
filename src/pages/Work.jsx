import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        category: "Performance Marketing",
        client: "TechFlow SaaS",
        result: "300% ROAS Increase",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        desc: "Scaled lead generation through targeted LinkedIn & Google Ads campaigns."
    },
    {
        category: "Branding & Web",
        client: "Luxe Estate",
        result: "2.5x Conv. Rate",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        desc: "Complete brand overhaul and high-performance website architecture."
    },
    {
        category: "SEO Dominance",
        client: "Vital Health",
        result: "+150k Organic Traffic",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        desc: "Technical SEO audit and content roadmap execution."
    }
];

const Work = () => {
    return (
        <div className="min-h-screen bg-zinc-950 pt-20">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6">Selected <span className="text-blue-500">Work</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real results. Measurable growth. Examples of how we move the needle.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.client}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-blue-500 text-sm font-bold uppercase tracking-wider">{project.category}</span>
                                            <h3 className="text-2xl font-bold mt-2">{project.client}</h3>
                                        </div>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{project.result}</div>
                                    <p className="text-gray-400">{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
