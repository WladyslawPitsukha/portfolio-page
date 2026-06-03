"use client"

import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export const DownloadCV = ({ cvUrl }: {cvUrl: string}) => {
    return(
        <a 
            href={cvUrl}
            className="flex items-center justify-center rounded-md gap-4 bg-blue-700 px-8 py-5 
                    shadow-lg cursor-pointer transition-all duration-300 
                    hover:bg-white group animate-fadeIn"
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h4 className="font-bold text-white transition-colors duration-300 group-hover:text-blue-700">
                Download CV
            </h4>
            <IoMdDownload className="text-white transition-colors duration-300 group-hover:text-blue-700 w-6 h-6" />
        </a>
    )
}

export default function HomeSect() {
    return (
        <section id='Home' className="flex min-h-screen w-auto bg-black w-100 py-40 px-12">
            <article className="flex flex-col items-start justify-between gap-10  w-full md:w-1/2">
                <div className="flex flex-col gap-4 animate-fadeIn">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                        Hi, I'm Wladyslaw!
                        <br />
                        Creative
                        <br />
                    </h1>
                    <h6 className="font-bold text-4xl md:text-5xl uppercase text-blue-700 animate-pulse">
                        Frontend developer
                    </h6>
                </div>
                <p className="font-medium text-gray-400 leading-relaxed max-w-2xl animate-slideIn">
                    I am a frontend developer, specializing in JavaScript, TypeScript, React, Next.js and modern web development stack (HTML & CSS, JavaScript, Git, SCSS, Tailwind CSS, REST/GraphQL). I can create fast, adaptive and convenient interfaces, work with modern style, creative animation and optimization performance. 
                    <br />
                    I am looking for a team where I can apply and develop my skills, participate in the creation of interesting products and grow up as a developer. Ready for remote or hybrid work.
                </p>
                <div className="flex items-center gap-8 mt-7">
                    <DownloadCV cvUrl="../doc/Resume_3 (1).pdf"/>
                    <button 
                        className="flex items-center justify-center gap-3 group transition-all duration-300 animate-fadeIn" 
                        style={{ animationDelay: '0.8s' }}>
                        <FaRegCirclePlay className="text-blue-700 w-11 h-11 group-hover:text-white 
                                                transition-colors duration-300" />
                        <h5 className="font-bold text-gray-500 group-hover:text-white 
                                    transition-colors duration-300">
                            Watch The Video
                        </h5>
                    </button>
                </div>
            </article>
        </section>
    );
}