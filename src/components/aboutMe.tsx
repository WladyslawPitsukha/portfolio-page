import { GoGoal } from "react-icons/go";
import { CiCoffeeCup } from "react-icons/ci";
import TitleComponent from "./TitleComponent";
import { IconType } from "react-icons";

export const ArticleFact = ({ icon, title, text, }: {
    icon: IconType, 
    title: string,
    text: string,
    style?: React.CSSProperties
}) => {
    const Icon = icon;

    return(
        <article className="group relative flex flex-col items-start gap-5 border-t border-white/15 pt-6 article-fade-in article-fade-delay"
        >
            <div className="relative flex items-center gap-4">
                <Icon className="h-10 w-10 text-[var(--accent)] transition-transform duration-300 group-hover:rotate-6" />
                <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent-soft)] sm:text-2xl">
                    {title}
                </h2>
            </div>
            <p className="max-w-3xl font-sans leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-white/80">
                {text}
            </p>
        </article>
    )
}

export default function AboutMeSect() {
    return(
        <section id="About me" className="portfolio-section flex flex-col items-start gap-14">
            <TitleComponent 
                title="About me"
                description="Building thoughtful, reliable web experiences with modern technologies"
                position="start"
            />
            <div className="grid w-full gap-12 md:grid-cols-2">
                <ArticleFact
                    icon={CiCoffeeCup}
                    title="How I work"
                    text="I take a thoughtful, hands-on approach to development: understanding the problem, breaking it into manageable steps, and building clear, maintainable solutions. I value collaboration, attention to detail, and steady progress, and I keep learning so I can take on new challenges with confidence."
                />
                <ArticleFact
                    icon={GoGoal}
                    title="What I bring"
                    text="With 2+ years of commercial frontend experience, I have worked on responsive banking interfaces, dashboards, internal monitoring systems, and reusable UI components using React, TypeScript, and Next.js. I am also building my full-stack skills through practical work with Node.js, Python, FastAPI, SQL, and PostgreSQL, including REST APIs, backend logic, data processing, and automation."
                />
            </div>
        </section>
    )
}