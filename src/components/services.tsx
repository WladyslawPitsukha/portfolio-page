import { ServicesProps } from "@/types/typeServices";
import TitleComponent from "./TitleComponent";
import { arrayServices } from "@/constants/arrServices";

export const ItemServices: React.FC<ServicesProps> = ({icon, infa, index}) => {
    const Icon = icon;
    const { title, text, addText } = infa;
    return(
        <div className={`group relative h-full rounded-sm border border-white/10 bg-[var(--surface)] px-6 pb-7 pt-16 
            transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/60
            services-fade-in services-stagger`}
            style={{ '--index': index } as React.CSSProperties}>
            <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--accent)]/60 bg-[var(--accent)] p-3 transition-all duration-300 group-hover:rotate-6">
                <Icon 
                    className="h-7 w-7 text-[#101211] transition-all duration-300"
                />
            </div>
            <div className="flex flex-col items-start justify-between gap-5">
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-[var(--accent-soft)]">
                    {title}
                </h2>
                <h4 className="text-left font-sans text-sm leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-white/90">
                    {text}
                </h4>
                <h4 className="text-left font-sans text-sm leading-relaxed text-[var(--muted)] transition-colors duration-300 group-hover:text-white/90">
                    {addText}
                </h4>
            </div>
        </div>
    )
}

export const AnimatedTextService: React.FC<{text: string}> = ({text}) => {
    return (
        <article className="group relative w-full overflow-hidden border-y border-white/10 py-7 services-text-fade">
            <p className="relative text-center font-sans text-lg leading-relaxed text-[var(--muted)]
                transition-all duration-500 transform 
                group-hover:text-white">
                {text}
            </p>
        </article>
    )
}

export default function ServicesSect() {
    return(
        <section id="Services" className="portfolio-section flex flex-col items-center gap-16">
            <div className="services-fade-in">
                <TitleComponent 
                    title="My services"
                    description="Bringing your vision to life with precision and passion"
                    position="center"
                />
            </div>
            <article className='grid w-full max-w-6xl gap-10 md:grid-cols-2 xl:grid-cols-3'>
                {arrayServices.map((service, index) => (
                    <div 
                        key={index}
                        className="services-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <ItemServices key={index} {...service} index={index} />
                    </div>
                ))}
            </article>
            <div className="services-text-fade">
                <AnimatedTextService text="Bringing innovative solutions to your digital needs with modern web development technologies and creative design approaches." />
            </div>
        </section>
    )
}