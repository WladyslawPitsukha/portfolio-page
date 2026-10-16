import TitleComponent from "./TitleComponent";
const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "Backend & data",
        skills: ["Node.js", "Python", "FastAPI", "REST APIs", "SQL", "PostgreSQL"]
    },
    {
        title: "Testing & tools",
        skills: ["Vitest", "Jest", "Unit testing", "Integration testing", "Git", "GitHub", "npm"]
    },
    {
        title: "Design & workflow",
        skills: ["Figma", "AI-assisted development", "Responsive design", "Component-based architecture"]
    }
];

export default function SkillsSect() {
    return (
        <section id="Skills" className="portfolio-section flex flex-col items-center gap-14">
            <TitleComponent
                title="Technical Skills"
                description="Tools and technologies I use to build complete web experiences"
                position="center"
            />
            <div className="grid w-full gap-10 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <article key={group.title} className="border-t border-white/15 pt-5">
                        <h3 className="mb-5 text-xl font-bold text-white">{group.title}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="border border-[var(--accent)]/40 px-3 py-2 font-sans text-sm text-[var(--accent-soft)]"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}