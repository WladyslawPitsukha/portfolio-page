import { PortfolioItemProps } from "@/types/typeProjects";
import TitleComponent from "./TitleComponent";
import { portfolioItems } from "@/constants/arrProjects";

export const PortfolioCard: React.FC<PortfolioItemProps> = ({
    icon, main, 
}) => {
    const { title, description, link } = main;
    const Icon = icon;

    return(
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col items-start border border-white/10 bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/60"
        >
            <Icon className="relative mb-8 h-10 w-10 text-[var(--accent)] transition-all duration-300 group-hover:rotate-6" />
            <h3 className="relative mb-3 text-xl font-bold text-white transition-all duration-300 group-hover:text-[var(--accent-soft)]">
                {title}
            </h3>
            <p className="relative font-sans leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-white/80">
                {description}
            </p>
        </a>
    )
}

export default function PortSect() {
    return(
        <section id="Portfolio" className="portfolio-section flex flex-col items-start gap-14">
            <TitleComponent
                title="My Recent Portfolio"
                description="Selected work combining thoughtful interfaces, reliable frontend engineering, and clear product goals"
                position="start"
            />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {portfolioItems.map((item, index) => (
                    <div 
                        key={item.id}
                        className="portfolio-fade-in"
                        style={{ 
                            animationDelay: `${index * 0.2}s`,
                            animationFillMode: 'both'
                        }}
                    >
                        <PortfolioCard {...item} />
                    </div>
                ))}
            </article>
        </section>
    )
}