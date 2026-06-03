"use client";

import { DownloadCV } from "./home";
import TitleComponent from "./TitleComponent";
import ArtBlockSkill from "./artBlockSkill";
import ArtBiography from "./artBiography";

import { useState, useEffect } from "react";

import { arrayEducate } from "@/constants/arrEducate";
import { arrayExperience } from "@/constants/arrExperience";
import { arraySectItems } from "@/types/typeSkills";

export default function SkillsSect() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeArticle, setActiveArticle] = useState<string>("Education");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('Skills');

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const renderActiveSection = () => {

        switch(activeArticle) {
            case "Education":
                return <ArtBlockSkill array={arrayEducate} />;
            case "Biography":
                return <ArtBiography />;
            case "Experience":
                return <ArtBlockSkill array={arrayExperience} />;
            default:
                return <ArtBlockSkill array={arrayEducate} />;
        }
    }

    return (
        <section 
            id="Skills" 
            className={`flex flex-col items-center justify-center min-h-screen w-full gap-20 p-10 mt-10 
                skills-section-fade ${isVisible ? 'skills-section-visible' : ''}`}
        >
            <article 
                className={`flex flex-col items-center gap-10 transition-all duration-500 delay-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <TitleComponent 
                    title="My Skills"
                    description="Crafting Stories through Design, Developing and Imagination"
                    position="center"
                />
                <div className="flex justify-between items-center gap-10 flex-wrap">
                    <div className={`transform transition-all duration-300 delay-500
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <DownloadCV cvUrl="../doc/Resume_3 (1).pdf" />
                    </div>
                    {arraySectItems.map((obj, index) => ( 
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-md gap-4 px-8 py-5 shadow-lg cursor-pointer
                                transform transition-all duration-300 hover:scale-105 
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                ${activeIndex === index 
                                    ? 'bg-blue-700 shadow-blue-500/50' 
                                    : 'bg-gray-500 hover:bg-blue-700'}`}
                            style={{ transitionDelay: `${index * 100 + 800}ms` }}
                            onClick={() => {
                                setActiveIndex(index);
                                setActiveArticle(obj.button);
                            }}
                        >
                            <h4 className="font-bold text-white tracking-wider">
                                {obj.button}
                            </h4>
                        </div>
                    ))}
                </div>
            </article>
            <div className={`w-full transition-all duration-500 delay-1000
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {renderActiveSection()}
            </div>
        </section>
    );
}