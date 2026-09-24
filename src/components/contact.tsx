import { arrayBlocksInfo } from "@/constants/arrBlockInfo";
import ContactForm from "./contactForm";
import { BlockInfoProps } from "@/types/typeBlockInfo";
import TitleComponent from "./TitleComponent";

export const BlockInfo: React.FC<BlockInfoProps> = ({index, icon, main}) => {
    const { title, text, link } = main;
    const Icon = icon;

    return(
        <div 
            key={index} 
            className="group relative flex h-full w-full flex-col items-center justify-between gap-5 border border-white/10 bg-[var(--surface)] p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/60"
        >
            <Icon 
                    className="relative h-10 w-10 text-[var(--accent)] transform transition-all duration-500 group-hover:rotate-6"
            />
                <h2 className="relative font-sans font-bold uppercase tracking-wider text-white transition-all duration-500 group-hover:text-[var(--accent-soft)]">
                {title}
            </h2>
            <p className="relative font-sans text-sm leading-relaxed text-[var(--muted)] transition-all duration-500 group-hover:text-white/80">
                {text}
            </p>
            <h3 className="relative cursor-pointer font-sans text-sm font-bold text-[var(--accent)] transition-all duration-500 group-hover:text-[var(--accent-soft)]">
                {link}
            </h3>
        </div>
    )
}

export const ContactGrid = () => {
    return(
        <div className="grid w-full max-w-6xl gap-6 md:grid-cols-3">
            {arrayBlocksInfo.map((obj, index) => (
                    <div
                        key={index}
                        className="animate-fadeIn"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <BlockInfo 
                            index={obj.index}
                            icon={obj.icon}
                            main={obj.main}
                        />
                    </div>
                ))}
        </div>
    )
}

export default function ContactSect() {
    return (
        <section 
            id="Contacts" 
            className="portfolio-section flex flex-col gap-12"
        >
            <div className="animate-fadeIn">
                <TitleComponent
                    title="Contact Me"
                    description="Let's discuss your project and make it happen"
                    position="center"
                />
            </div>
            <ContactGrid />
            <div 
                className="w-full max-w-6xl border-t border-white/10 pt-10 animate-fadeIn" 
                style={{ animationDelay: '0.6s' }}
            >
                <ContactForm />
            </div>
        </section>
    );
}