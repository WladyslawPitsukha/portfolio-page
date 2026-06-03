import { ServicesProps } from "@/types/typeServices";
import TitleComponent from "./TitleComponent";
import { arrayServices } from "@/constants/arrServices";

export const ItemServices: React.FC<ServicesProps> = ({icon, infa, index}) => {
    const Icon = icon;
    const { title, text, addText } = infa;
    return(
        <div className={`group relative w-auto h-auto rounded-lg pt-16 px-9 pb-9 bg-gray-700 
            transition-all duration-300 hover:bg-gray-600 hover:transform hover:scale-105
            services-fade-in services-stagger`}
            style={{ '--index': index } as React.CSSProperties}>
            <div className="absolute -top-10 left-8 w-20 h-20 rounded-lg flex items-center justify-center p-3 
                bg-blue-700 transition-all duration-300 group-hover:bg-blue-600 
                group-hover:shadow-lg group-hover:scale-110">
                <Icon 
                    className="w-14 h-14 text-white transition-all duration-300 
                        group-hover:text-gray-100 group-hover:transform group-hover:rotate-6"
                />
            </div>
            <div className="flex flex-col items-start justify-between gap-5">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider 
                    transition-colors duration-300 group-hover:text-blue-400">
                    {title}
                </h2>
                <h4 className="text-left text-gray-300 leading-relaxed transition-colors 
                    duration-300 group-hover:text-white">
                    {text}
                </h4>
                <h4 className="text-left text-gray-300 leading-relaxed transition-colors 
                    duration-300 group-hover:text-white">
                    {addText}
                </h4>
            </div>
        </div>
    )
}

export const AnimatedTextService: React.FC<{text: string}> = ({text}) => {
    return (
        <article className="group relative w-full overflow-hidden bg-gray-800 rounded-lg p-6 
            transform transition-all duration-500 hover:scale-105 services-text-fade">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full 
                opacity-20 blur-xl transition-all duration-500 
                group-hover:scale-150 group-hover:opacity-30" />
            <p className="relative text-gray-300 text-lg leading-relaxed text-center 
                transition-all duration-500 transform 
                group-hover:text-white group-hover:translate-y-[-5px]">
                {text}
            </p>
        </article>
    )
}

export default function ServicesSect() {
    return(
        <section id="Services" className="flex flex-col justify-between h-screen w-full items-center gap-20 p-10">
            <div className="services-fade-in">
                <TitleComponent 
                    title="My services"
                    description="Bringing your vision to life with precision and passion"
                    position="center"
                />
            </div>
            <article className='flex items-center justify-around w-auto gap-10'>
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