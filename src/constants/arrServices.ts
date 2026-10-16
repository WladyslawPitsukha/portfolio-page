import { MdAppShortcut } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdAutoAwesome, MdOutlineScience } from "react-icons/md";
import { FaServer } from "react-icons/fa";

import { ServicesProps } from "@/types/typeServices";

export const arrayServices: ServicesProps[] = [
    {
        icon: RiPagesFill,
        infa: {
            title: "Websites",
            text: "I create distinctive, responsive websites that reflect your brand and provide a clear, enjoyable experience on every device.",
            addText: "I use Next.js, React, semantic HTML, responsive CSS, SEO fundamentals, and performance best practices to deliver fast and accessible websites."
        }
    },
    {
        icon: SiMaterialdesign,
        infa: {
            title: "Web design",
            text: "I design clear and engaging interfaces that make products easier to understand, use, and remember.",
            addText: "I combine UI/UX principles, design systems, responsive layouts, and purposeful animation to create polished digital experiences."
        }
    },
    {
        icon: MdAppShortcut,
        infa: {
            title: "Web apps",
            text: "I build custom web applications aligned with business goals, user needs, performance targets, and security requirements.",
            addText: "I work with TypeScript, React, state management, Python, and modern architecture patterns to create scalable and maintainable products."
        }
    },
    {
        icon: MdOutlineScience,
        infa: {
            title: "Testing & QA",
            text: "I test interfaces and user flows to catch issues early and make applications more reliable.",
            addText: "I can help with functional checks, responsive and cross-browser testing, bug reproduction, and clear issue reporting."
        }
    },
    {
        icon: MdAutoAwesome,
        infa: {
            title: "AI integration",
            text: "I help bring AI-powered capabilities into web products in ways that support real user needs.",
            addText: "This includes connecting AI services to frontend experiences, building clear interaction flows, and handling loading and error states."
        }
    },
    {
        icon: FaServer,
        infa: {
            title: "Backend collaboration",
            text: "I connect frontend applications with backend services to deliver complete, data-driven user experiences.",
            addText: "I work with REST APIs, request and response handling, authentication flows, and coordinate API contracts with backend developers."
        }
    }
]