import { BlockCompProps } from "@/types/typeSkills";
import calculateYearPercentage from "@/utils/calculaterPer";

const nowTime = new Date();
const curDate = `${(nowTime.getMonth() + 1).toString().padStart(2, '0')}-${nowTime.getFullYear()}`

export const arrayExperience: BlockCompProps[] = [
    {
        head: {
            title: "Epam System",
            link: "https://www.epam.com/",
        },
        time: "01.2023 - present",
        addInfo: {
            specialization: "Frontend Developer",
            description: "Developing modern web applications with React, Next.js, and TypeScript. Creating responsive interfaces, optimizing performance, and maintaining high code quality. Using Python for scripting and automation where appropriate.",
            highlights: [
                "Participated in hands-on frontend application development and built interactive web components.",
                "Developed an understanding of web application architecture and collaboration between frontend and backend teams.",
                "Worked in project teams following Agile methodologies, strengthening teamwork and project management skills.",
                "Built small projects to strengthen coding, UI/UX design, and problem-solving abilities."
            ],
            skills: ["React", "Next.js", "TypeScript", "Python", "REST APIs", "Responsive layout"],
        },
        percent: calculateYearPercentage(`01.2023-${curDate}`)
    }, 
    {
        head: {
            title: "Priorbank",
            link: "https://www.priorbank.by/",
        },
        time: "11.2022 - 07.2023",
        addInfo: {
            specialization: "Frontend Developer",
            description: "Developed and maintained web applications with modern frontend technologies. Contributed to performance optimization, interface improvements, and maintainable implementation patterns.",
            highlights: [
                "Developed internal and client-facing banking interfaces using React and TypeScript, contributing approximately 10% of UI components.",
                "Implemented responsive UI components for dashboards and customer management systems, covering approximately 15% of key user workflows.",
                "Improved UI performance and usability through component optimization, reducing page load times by approximately 10%.",
                "Collaborated with designers, analysts, and backend developers in an enterprise environment and contributed to cross-functional sprint tasks.",
                "Assisted in documenting UI components and providing feedback on design and functionality improvements."
            ],
            skills: ["React", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Responsive layout"],
        },
        percent: calculateYearPercentage("11.2022-07.2023")
    },
    {
        head: {
            title: "TopSoft.pl",
            link: "https://www.topsoft.pl/",
        },
        time: "04.2024 - 08.2024",
        addInfo: {
            specialization: "Frontend Developer",
            description: "Developed new features for a job-search platform, focusing on responsive and accessible interfaces, reliable user flows, and application performance.",
            highlights: [
                "Developed an internal monitoring application end-to-end, including UI/UX, design, and functionality, contributing approximately 10% to the company’s internal tooling.",
                "Participated in functional QA activities through automated and manual testing with JavaScript and TypeScript, covering approximately 15% of test cases.",
                "Collaborated with cross-functional teams to support smooth deployment and maintenance of internal tools.",
                "Assisted in documenting processes and reporting system issues to improve operational efficiency."
            ],
            skills: ["HTML5/CSS3", "Git", "React", "REST APIs", "JavaScript", "Figma", "TypeScript"],
        },
        percent: calculateYearPercentage(`04.2024-08.2024`)
    }
]