import { PortfolioItemProps } from "@/types/typeProjects";

import { CiBoxList } from "react-icons/ci";
import { GiCellarBarrels } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa6";

export const portfolioItems: PortfolioItemProps[] = [
    {
        id: 1,
        icon: CiBoxList,
        main: {
            title: "To-do List",
            description: "A modern task management application with user authentication",
            link: "https://github.com/WladislawPitsukha/to-do_avatar",
        },
    },
    {
        id: 2,
        icon: GiCellarBarrels,
        main: {
            title: "Alex Bar",
            description: "An elegant website for a premium bar establishment",
            link: "https://github.com/WladislawPitsukha/alex_bar",
        },
    },
    {
        id: 3,
        icon: FaBitcoin,
        main: {
            title: "Crappo App",
            description: "Cryptocurrency tracking and management platform",
            link: "https://github.com/WladislawPitsukha/crappo-app",
        },
    },
    {
        id: 4,
        icon: GiCellarBarrels,
        main: {
            title: "E-commerce",
            description: "Full-featured online shopping platform",
            link: "https://github.com/WladislawPitsukha/e-commerce",
        },
    },
    {
        id: 5,
        icon: GiCellarBarrels,
        main: {
            title: "Hydra Landing",
            description: "Modern landing page for VR technology company",
            link: "https://github.com/WladislawPitsukha/hydra-landing",
        },
    }
];