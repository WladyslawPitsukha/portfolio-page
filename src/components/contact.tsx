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
            className="group relative flex flex-col items-center justify-between gap-5 p-8 
                bg-gray-800 rounded-lg transform transition-all duration-500 
                hover:scale-105 hover:bg-gray-700 w-96 
                hover:shadow-lg hover:shadow-blue-500/20"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                rounded-lg blur opacity-25 group-hover:opacity-75 
                transition duration-500 group-hover:scale-105">
            </div>
            <Icon 
                className="relative text-blue-500 w-16 h-16 transform transition-all 
                    duration-500 group-hover:scale-110 group-hover:text-blue-400 
                    group-hover:rotate-6"
            />
            <h2 className="relative font-bold uppercase text-white tracking-wider 
                transition-all duration-500 group-hover:text-blue-400 
                group-hover:translate-y-[-5px]">
                {title}
            </h2>
            <p className="relative text-gray-300 text-center transition-all duration-500 
                group-hover:text-white">
                {text}
            </p>
            <h3 className="relative font-bold text-blue-500 cursor-pointer 
                transition-all duration-500 group-hover:text-blue-400 
                group-hover:scale-105">
                {link}
            </h3>
        </div>
    )
}

export const ContactGrid = () => {
    return(
        <div className="flex align-center gap-8 w-full max-w-6xl">
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
            className="flex flex-col align-center p-10 h-screen w-auto rounded-lg shadow-md gap-10"
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
                className="w-full max-w-6xl animate-fadeIn" 
                style={{ animationDelay: '0.6s' }}
            >
                <ContactForm />
            </div>
        </section>
    );
}