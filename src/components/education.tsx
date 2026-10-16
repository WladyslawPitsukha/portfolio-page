import { arrayEducate } from "@/constants/arrEducate";
import ArtBlockSkill from "./artBlockSkill";
import TitleComponent from "./TitleComponent";

export default function EducationSect() {
    return (
        <section id="Education" className="portfolio-section flex flex-col items-center gap-14">
            <TitleComponent
                title="Education"
                description="Formal education and ongoing professional development"
                position="center"
            />
            <ArtBlockSkill array={arrayEducate} />
        </section>
    );
}