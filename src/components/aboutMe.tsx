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
                <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent-soft)]">
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
                description="Crafting stories through design, developing and  
                innovation"
                position="start"
            />
            <div className="grid w-full gap-12 md:grid-cols-2">
                <ArticleFact icon={CiCoffeeCup} title="My Ambition" text="My ambitions lie in creating unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I strive for excellence in developing powerful and interactive web applications that help automate processes and enhance customer interaction. My goal is to offer custom solutions for creating web applications that align with your business goals, ensuring high performance and security. I am constantly seeking innovation and improving my skills to provide clients with the best solutions and help them achieve success in the digital world." />
                <ArticleFact icon={GoGoal} title="My Purpose" text="My purpose is to create unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I specialize in developing powerful and interactive web applications that help automate processes and improve customer interaction. I offer custom solutions for creating web applications that align with your business goals and ensure high performance and security. My mission is to help your business reach new heights in the digital world by providing the best solutions that ensure success and growth." />
            </div>
        </section>
    )
}