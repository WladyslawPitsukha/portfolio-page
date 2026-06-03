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
            description: "A comprehensive program focused on developing analytical skills and business acumen, preparing students for a career in business analysis.",
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
            description: "An introductory course designed to equip students with the fundamental skills required for entry-level positions in frontend development.",
        },
        percent: calculateYearPercentage("10.2020-05.2021")
    },
    {   
        head: {
            title: 'Courses "Frontend Developer"',
            link: "https://rs.school/courses/javascript",
        },
        time: "10.2022-05.2023",
        addInfo: {
            specialization: "Frontend specialist",
            description: "An advanced course aimed at enhancing expertise in frontend technologies, covering modern frameworks and best practices in the industry.",
        },
        percent: calculateYearPercentage("10.2022-05.2023")
    }
]