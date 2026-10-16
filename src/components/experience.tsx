import { arrayExperience } from "@/constants/arrExperience";
import ArtBlockSkill from "./artBlockSkill";
import { DownloadCV } from "./home";
import TitleComponent from "./TitleComponent";

export default function ExperienceSect() {
    return (
        <section id="Experience" className="portfolio-section flex flex-col items-center gap-14">
            <TitleComponent
                title="Professional Experience"
                description="Roles, projects, and experience building web applications"
                position="center"
            />
            <div className="flex w-full justify-center">
                <DownloadCV cvUrl="../doc/Resume_3 (1).pdf" />
            </div>
            <ArtBlockSkill array={arrayExperience} />
        </section>
    );
}