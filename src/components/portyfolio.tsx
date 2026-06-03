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
            className="group relative flex flex-col items-start p-6 bg-gray-800 rounded-lg 
                transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <Icon className="relative text-blue-500 w-16 h-16 mb-4 transform transition-all 
                duration-300 group-hover:scale-110 group-hover:text-blue-400" />
            <h3 className="relative text-xl font-bold text-white mb-2 transition-all 
                duration-300 group-hover:text-blue-400">
                {title}
            </h3>
            <p className="relative text-gray-400 leading-relaxed transition-colors 
                duration-300 group-hover:text-gray-300">
                {description}
            </p>
        </a>
    )
}

export default function PortSect() {
    return(
        <section id="Portfolio" className="flex flex-col items-start justify-center gap-20 p-10 mt-10">
            <TitleComponent
                title="My Recent Portfolio"
                description="Elevate your brand to new heights with my porttolio expertise"
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