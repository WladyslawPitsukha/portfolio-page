import { BlockCompProps } from "@/types/typeSkills";
import Link from "next/link";

export default function ArtBlockSkill({array}: {array: BlockCompProps[]}) {
    return (
        <article className="flex flex-wrap justify-center gap-8 relative min-h-96 w-full p-4">
            {array.map((obj, index) => (
                <div
                    key={index}
                    className="group inline-block transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                >
                    <Link 
                        href={obj.head.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block transform transition-all duration-300 hover:scale-105"
                    >
                        <h4 className="skillTitle text-xl font-bold text-white mb-6">
                            {obj.head.title}
                        </h4>
                    </Link>
                    <div className="flex flex-col justify-around gap-6 mb-6">
                        {[obj.time, obj.addInfo.specialization, obj.addInfo.description].map((text, idx) => (
                            <p 
                                key={idx}
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex items-center flex-col justify-between w-full gap-2">
                        <div className="progressBar w-full bg-gray-700 h-4">
                            <div 
                                className="progressFill bg-blue-600 h-4 rounded-full"
                                style={{ '--progress-width': `${obj.percent}%` } as React.CSSProperties}
                            />
                        </div>
                        <p className="text-white font-medium">
                            {`${obj.percent}%`}
                        </p>
                    </div>
                </div>
            ))}
        </article>
    );
}