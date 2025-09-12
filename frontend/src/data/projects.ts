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
        title: "KTANE-Solver",
        description:
            "A fully implemented solving algorithm for every KTANE Module.",
        technologies: ["Python", "Algorithms", "Game Development"],
        githubLink: "https://github.com/Shadowjumper3000/KeepTalkingAndNobodyExplodes",
        externalLink: "",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffs-prod-cdn.nintendo-europe.com%2Fmedia%2Fimages%2F10_share_images%2Fgames_15%2Fnintendo_switch_download_software_1%2FH2x1_NSwitchDS_KeepTalkingAndNobodyExplodes_image1600w.jpg&f=1&nofb=1&ipt=f3af227a87365b901b988618358bbb8ee1e716b30e25f5329ced558bbf9b817a",
    },
    {
        title: "Gardening Manager",
        description:
            "A Gardening Management website which tracks soil health, plants, etc.",
        technologies: ["TypeScript", "React", "Firebase", "Redux", "Material UI"],
        githubLink: "https://github.com/Shadowjumper3000/GardenPlanner",
        externalLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800",
    },
    {
        title: "Discord Bot",
        description:
            "A Custom Discord Bot.",
        technologies: ["JavaScript", "React", "OpenWeather API", "Chart.js", "TailwindCSS"],
        githubLink: "https://github.com/Shadowjumper3000/FalconBot",
        externalLink: "https://example.com",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800",
    },
];
