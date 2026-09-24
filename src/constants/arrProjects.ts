import { PortfolioItemProps } from "@/types/typeProjects";
import { CiBoxList } from "react-icons/ci";
import { GiCellarBarrels } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa6";
import { FaDatabase, FaPython } from "react-icons/fa";

export const portfolioItems: PortfolioItemProps[] = [
    {
        id: 1,
        icon: CiBoxList,
        main: {
            title: "To-do ",
            description: "A modern task-management application with authentication, organized workflows, and a focused interface.",
            link: "https://github.com/WladyslawPitsukha/to-do_avatar",
        },
    },
    {
        id: 2,
        icon: GiCellarBarrels,
        main: {
            title: "Alex Assistant", 
            description: "An elegant promotional website for a premium bar, designed around atmosphere, clarity, and easy discovery.",
            link: "https://github.com/WladyslawPitsukha/alex_bar",
        },
    },
    {
        id: 3,
        icon: FaBitcoin,
        main: {
            title: "Crappo App",
            description: "A cryptocurrency tracking platform for monitoring market information through a focused dashboard experience.",
            link: "https://github.com/WladyslawPitsukha/crappo-app",
        },
    },
    {
        id: 4,
        icon: GiCellarBarrels,
        main: {
            title: "E-commerce",
            description: "A full-featured online shopping experience with product discovery, structured content, and conversion-focused flows.",
            link: "https://github.com/WladyslawPitsukha/e-commerce",
        },
    },
    {
        id: 5,
        icon: FaDatabase,
        main: {
            title: "Data Processing CLI",
            description: "A command-line interface tool for efficient data processing and automation tasks.",
            link: "https://github.com/WladyslawPitsukha/data-processing-cli",
        },
    },
    {
        id: 6,
        icon: FaPython,
        main: {
            title: "Python Projects",
            description: "A project demonstrating Python scripting and automation capabilities.",
            link: "https://github.com/WladyslawPitsukha/python-projects",
        }
    }
];