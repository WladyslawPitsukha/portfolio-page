import TitleComponent from "./TitleComponent";
import { SocialAccProps } from "@/types/typeSocialAcc";
import { ArraySocialAcc } from "@/constants/arrSocialAcc";

export const SocialBlock: React.FC<SocialAccProps> = ({ icon, link, title }) => {
    const Icon = icon;

    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-40 flex-col items-center justify-center border border-white/10 bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]"
        >
            <Icon className="mb-4 h-10 w-10 text-[var(--accent)] transition-all duration-300 group-hover:scale-110" />
            <h5 className="font-sans text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:text-[var(--accent-soft)]">
                {title}
            </h5>
        </a>
    );
}

export const SocialGrid = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {ArraySocialAcc.filter(item => item.link).map((item, index) => (
                <div 
                    key={index} 
                    className="social-block-fade-in" 
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <SocialBlock {...item} />
                </div>
            ))}
        </div>
    )
}

export default function Networks() {
    return(
        <section 
            id="Networks" 
            className="portfolio-section flex flex-col items-center gap-14"
        >
            <div className="animate-fadeIn">
                <TitleComponent 
                    title="My social networks"
                    description="Connect with me across various platforms"
                    position="center"
                />
            </div>
            <SocialGrid />
        </section>
    )
}