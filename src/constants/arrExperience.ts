import { BlockCompProps } from "@/types/typeSkills";
import calculateYearPercentage from "@/utils/calculaterPer";

let nowTime = new Date();
const curDate = `${(nowTime.getMonth() + 1).toString().padStart(2, '0')}-${nowTime.getFullYear()}`

export const arrayExperience: BlockCompProps[] = [
    {
        head: {
            title: "Upwork",
            link: "https://www.upwork.com/",
        },
        time: "01.2023 - present time",
        addInfo: {
            specialization: "",
            description: "Developing modern web applications using React, Next.js, and TypeScript. Creating responsive and interactive user interfaces, optimizing performance, and ensuring high code quality.",
        },
        percent: calculateYearPercentage(`01.2023-${curDate}`)
    }, 
    {
        head: {
            title: "Top Soft",
            link: "https://www.park.by/en/residents/top-soft/",
        },
        time: "11.2022 - 07.2023",
        addInfo: {
            specialization: "Frontend Developer",
            description: "Worked on the development and maintenance of web applications, using modern frontend development technologies. Participated in performance optimization and user interface improvements.",
        },
        percent: calculateYearPercentage("11.2022-07.2023")
    },
    {
        head: {
            title: "Praca.pl",
            link: "https://www.praca.pl/",
        },
        time: "04.2024 - 08.2024",
        addInfo: {
            specialization: "Frontend Developer",
            description: "Developing new features for the job search web platform. Focusing on creating a responsive and accessible interface, as well as optimizing application performance.",
        },
        percent: calculateYearPercentage(`04.2024-08.2024`)
    }
]