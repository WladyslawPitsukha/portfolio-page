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
        <article className="group flex flex-col relative items-start gap-5 mt-10 p-6 rounded-lg 
            transition-all duration-300 hover:bg-gray-900/50 article-fade-in article-fade-delay"
        >
            <div className="absolute top-0 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-70 
                blur-lg transition-all duration-300 group-hover:scale-150 group-hover:opacity-40" />
            <div className="relative flex items-center gap-4">
                <Icon className="text-white w-16 h-16 transition-transform duration-300 
                    group-hover:scale-110 group-hover:text-blue-500" />
                <h2 className="text-2xl font-bold text-white transition-colors duration-300 
                    group-hover:text-blue-500">
                    {title}
                </h2>
            </div>
            <p className="text-gray-400 leading-relaxed transition-colors duration-300 
                group-hover:text-gray-300 max-w-3xl">
                {text}
            </p>
        </article>
    )
}

export default function AboutMeSect() {
    return(
        <section id="About me" className="flex flex-col h-screen w-auto relative items-start justify-between  p-10">
            <TitleComponent 
                title="About me"
                description="Crafting stories through design, developing and  
                innovation"
                position="start"
            />
            <ArticleFact 
                icon={CiCoffeeCup}
                title="My Ambition"
                text="My ambitions lie in creating unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I strive for excellence in developing powerful and interactive web applications that help automate processes and enhance customer interaction. My goal is to offer custom solutions for creating web applications that align with your business goals, ensuring high performance and security. I am constantly seeking innovation and improving my skills to provide clients with the best solutions and help them achieve success in the digital world."
                style={{ '--delay': 0 } as React.CSSProperties}
            />
            <ArticleFact 
                icon={GoGoal}
                title="My Purpose"
                text="My purpose is to create unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I specialize in developing powerful and interactive web applications that help automate processes and improve customer interaction. I offer custom solutions for creating web applications that align with your business goals and ensure high performance and security. My mission is to help your business reach new heights in the digital world by providing the best solutions that ensure success and growth."
                style={{ '--delay': 1 } as React.CSSProperties}
            />
        </section>
    )
}