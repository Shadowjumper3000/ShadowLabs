import React from "react";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
    return (
        <section className="py-20 px-4 bg-navy-light min-h-screen">
            <div className="container mx-auto">
                <h2 className="section-heading mb-10">
                    <span className="font-mono text-highlight mr-2">Projects</span>All Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-navy-light border border-navy-lightest hover:border-highlight transition-all duration-300 h-full hover:translate-y-[-5px]">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-highlight">
                                        <img src={project.image} alt={project.title} className="w-12 h-12 object-cover rounded" />
                                    </div>
                                    <div className="flex gap-4">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight focus-ring rounded-full" aria-label="GitHub">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.externalLink && (
                                            <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight focus-ring rounded-full" aria-label="Live Project">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-lightest mb-2">{project.title}</h3>
                                <p className="text-slate mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-slate">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
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
