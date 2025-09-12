

import React, { useMemo } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { projects as projectsData, Project } from "@/data/projects";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ProjectsSection = () => {
  // Use stored order, do not randomize
  const projects = projectsData;

  return (
    <section id="projects" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">02.</span>Some Things I've Built
        </h2>

        <div className="space-y-32 md:space-y-40">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className={`relative md:grid md:grid-cols-12 md:items-center gap-4 ${isReversed ? "md:text-right" : ""}`}
              >
                {/* Project Image (Desktop) */}
                <div
                  className={`hidden md:block md:col-span-7 relative ${isReversed ? "md:col-start-6" : ""}`}
                >
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full h-0 pb-[56.25%] rounded overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-highlight/30 hover:bg-transparent z-10 transition-colors duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-7 md:absolute ${isReversed
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                    } z-20 md:max-w-[30%] md:bg-transparent`}
                >
                  <div className="p-6 md:bg-navy/90 md:backdrop-blur md:rounded md:shadow-lg">
                    <p className="font-mono text-highlight text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold text-slate-lightest mb-4">
                      {project.title}
                    </h3>

                    {/* Project Image (Mobile only) */}
                    <div className="md:hidden w-full h-48 mb-4 rounded overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Card className="bg-navy shadow-lg mb-4">
                      <CardContent className="p-6">
                        <p className="text-slate">{project.description}</p>
                      </CardContent>
                    </Card>

                    <ul
                      className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-slate ${isReversed ? "md:justify-start" : "md:justify-end"}`}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="font-mono">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex gap-4 text-slate-lightest ${isReversed ? "md:justify-start" : "md:justify-end"}`}
                    >
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-highlight focus-ring rounded-full p-1"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.externalLink && (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-highlight focus-ring rounded-full p-1"
                          aria-label="Live Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl text-slate-lightest mb-6">Other Noteworthy Projects</h3>
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-highlight text-navy font-semibold rounded shadow hover:bg-highlight/80 transition-colors duration-200"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
