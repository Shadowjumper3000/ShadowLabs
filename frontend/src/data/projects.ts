export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    externalLink?: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "E-commerce Website",
        description:
            "A fully responsive e-commerce platform for a fictional clothing brand. Features include product filtering, cart functionality, user authentication, and payment processing integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
        githubLink: "https://github.com",
        externalLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800",
    },
    {
        title: "Task Management App",
        description:
            "A productivity application that helps users organize tasks, set priorities, and track progress. Includes features like drag-and-drop organization, calendar integration, and customizable categories.",
        technologies: ["TypeScript", "React", "Firebase", "Redux", "Material UI"],
        githubLink: "https://github.com",
        externalLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800",
    },
    {
        title: "Weather Dashboard",
        description:
            "An interactive weather forecasting application that provides real-time weather data, forecasts, and historical climate information for locations worldwide.",
        technologies: ["JavaScript", "React", "OpenWeather API", "Chart.js", "TailwindCSS"],
        githubLink: "https://github.com",
        externalLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800",
    },
];
