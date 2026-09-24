import { BlockCompProps } from "@/types/typeSkills";
import calculateYearPercentage from "@/utils/calculaterPer";

export const arrayEducate: BlockCompProps[] = [
    {
        head: {
            title: "Plekhanov University of Economics",
            link: "https://reu.by/",
        },
        time: "09.2019-07.2024",
        addInfo: {
            specialization: "Business Analyst",
            description: "A comprehensive program focused on analytical thinking, business processes, data interpretation, and practical business analysis.",
        },
        percent: calculateYearPercentage("09.2019-07.2024")
    },
    {
        head: {
            title: 'Courses "Frontend Developer Entry Level"',
            link: "https://rs.school/courses/javascript-preschool-ru",
        },
        time: "10.2020-05.2021",
        addInfo: {
            specialization: "Frontend specialist",
            description: "An introductory course covering JavaScript fundamentals, browser APIs, responsive layouts, and the core skills required for frontend development.",
        },
        percent: calculateYearPercentage("10.2020-05.2021")
    },
    {   
        head: {
            title: 'Meta Full Stack Developer"',
            link: "https://www.coursera.org/specializations/meta-full-stack-developer",
        },
        time: "10.2022-05.2023",
        addInfo: {
            specialization: "Frontend specialist",
            description: "An advanced course covering modern frontend architecture, JavaScript, TypeScript, React, responsive interfaces, and production best practices.",
        },
        percent: calculateYearPercentage("10.2022-05.2023")
    },
    {
        head: {
            title: 'Coursera "Python for Everybody"',
            link: "https://www.coursera.org/learn/programming-in-python?specialization=meta-full-stack-developer",
        },
        time: "04.2026 - present",
        addInfo: {
            specialization: "Python development",
            description: "Practical Python training covering programming fundamentals, data structures, automation, and problem solving.",
        },
        percent: 55
    },
    {
        head: {
            title: 'Coursera "AI Google"',
            link: "https://www.coursera.org/specializations/google-ai",
        },
        time: "06.2026 - present",
        addInfo: {
            specialization: "Artificial intelligence fundamentals",
            description: "An accessible introduction to AI concepts, machine-learning workflows, project opportunities, and responsible AI adoption.",
        },
        percent: 45
    }
]