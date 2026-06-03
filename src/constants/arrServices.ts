import { MdAppShortcut } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";

import { ServicesProps } from "@/types/typeServices";

export const arrayServices: ServicesProps[] = [
    {
        icon: RiPagesFill,
        infa: {
            title: "Web-sites",
            text: "I create unique and adaptive websites that reflect your brand's personality and provide an excellent user experience across all devices.",
            addText: "Using modern frameworks like Next.js and React, combined with responsive design principles, SEO optimization, and performance best practices to deliver fast-loading, accessible websites that engage your audience and drive conversions."
        }
    },
    {
        icon: SiMaterialdesign,
        infa: {
            title: "Web-Design",
            text: "I specialize in developing powerful and interactive web applications that help automate processes and improve customer interaction.",
            addText: "Implementing modern UI/UX principles, utilizing design systems, creating responsive layouts, and incorporating engaging animations to deliver intuitive and aesthetically pleasing interfaces that enhance user engagement and satisfaction."
        }
    },
    {
        icon: MdAppShortcut,
        infa: {
            title: "Web-apps",
            text: "I offer custom solutions for creating web applications that align with your business goals and ensure high performance and security.",
            addText: "Developing feature-rich applications using TypeScript, state management solutions, and modern architectural patterns, while ensuring scalability, maintainability, and optimal performance through efficient code organization and best practices."
        }
    }
]