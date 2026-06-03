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
            className="group relative flex flex-col justify-center items-center p-6 
                bg-gray-800 rounded-lg transform transition-all duration-300 
                hover:scale-105 hover:bg-gray-700 w-48 h-48 social-block-fade-in"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <Icon className="text-blue-500 w-16 h-16 mb-4 transform transition-all duration-300 
                group-hover:scale-110 group-hover:text-blue-400" />
            <h5 className="text-white font-bold uppercase tracking-wider text-center 
                transition-all duration-300 group-hover:text-blue-400">
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
            className="flex flex-col items-center justify-center h-screen w-full p-10 gap-16"
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