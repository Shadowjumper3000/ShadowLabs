
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4"
    >
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">01.</span>About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-slate mb-4">
              Hello! I'm David Hoerz, a passionate Machine Learning Engineer and Software Developer. My journey in technology began with a fascination for intelligent systems and building impactful software solutions.
            </p>
            <p className="text-slate mb-4">
              Over the years, I've contributed to projects in academia, startups, and industry, focusing on machine learning, data-driven applications, and scalable software systems. My main focus these days is building robust ML models and innovative digital experiences.
            </p>
            <p className="text-slate mb-4">
              I am always exploring new advancements in AI and software engineering, and enjoy sharing knowledge with the community.
            </p>
            <p className="text-slate mb-6">
              When I'm not at the computer, I'm usually reading about AI, hiking, or experimenting with new tech projects.
            </p>

            <h3 className="text-slate-lightest text-lg mb-3">Technologies & Tools I've been working with recently:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Python",
                "TensorFlow",
                "PyTorch",
                "scikit-learn",
                "Docker",
                "TypeScript",
                "React",
                "Node.js",
                "FastAPI",
                "PostgreSQL",
                "TailwindCSS",
              ].map((tech, index) => (
                <li key={index} className="flex items-center text-slate">
                  <span className="text-highlight mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-64 h-64 md:w-auto md:h-auto">
            <div className="absolute inset-0 border-2 border-highlight rounded translate-x-5 translate-y-5"></div>
            <div className="relative w-64 h-64 bg-navy-light rounded overflow-hidden group">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFkdTVikH-k1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691931520308?e=1761177600&v=beta&t=DrouU1cKz82lwVEc7yNzQywuMoA-Pb4Ag2ua0qwfoWQ"
                alt="David Hoerz"
                className="w-full h-full object-cover grayscale transition group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-highlight/20 group-hover:opacity-0 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
