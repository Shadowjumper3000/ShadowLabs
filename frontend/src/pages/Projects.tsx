import React, { useEffect } from "react";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

    return (
        <section className="py-20 px-4 bg-navy-light min-h-screen">
            <div className="container mx-auto">
                <header className="flex items-center justify-between mb-10">
                    <a href="/" className="text-highlight text-3xl font-mono font-bold focus-ring rounded hover:underline">D.H.</a>
                    <span className="text-slate-lightest text-lg font-semibold">All projects</span>
                </header>
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="w-full bg-navy-light border border-navy-lightest hover:border-highlight transition-all duration-300 hover:translate-y-[-5px] shadow-lg">
                            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="flex-shrink-0 mb-4 md:mb-0">
                                    <img src={project.image} alt={project.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded" />
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-lightest mb-2">{project.title}</h3>
                                        <div className="flex gap-4">
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight focus-ring rounded-full" aria-label="GitHub">
                                                    <Github size={24} />
                                                </a>
                                            )}
                                            {project.externalLink && (
                                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight focus-ring rounded-full" aria-label="Live Project">
                                                    <ExternalLink size={24} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-slate mb-4 text-lg">{project.description}</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-mono text-slate">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
