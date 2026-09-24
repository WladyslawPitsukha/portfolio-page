"use client"

import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export const DownloadCV = ({ cvUrl }: {cvUrl: string}) => {
    return(
        <a 
            href={cvUrl}
                className="group flex items-center justify-center gap-4 bg-[var(--accent)] px-7 py-4 font-sans shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-soft)] animate-fadeIn"
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h4 className="font-bold text-[#101211] transition-colors duration-300">
                Download CV
            </h4>
            <IoMdDownload className="h-6 w-6 text-[#101211] transition-colors duration-300" />
        </a>
    )
}

export default function HomeSect() {
    return (
        <section id='Home' className="flex min-h-screen w-full items-center px-7 py-20 sm:px-12 lg:px-20">
            <article className="flex w-full max-w-5xl flex-col items-start justify-between gap-8 md:w-4/5 lg:gap-10">
                <div className="animate-fadeIn">
                    <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent)]">Frontend developer / creative technologist</p>
                    <h1 className="text-4xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                        Hi, I&apos;m Wladyslaw!
                        <br />
                        Creative developer.
                    </h1>
                </div>
                <div className="max-w-3xl space-y-5 font-sans text-base font-medium leading-relaxed text-[var(--muted)] animate-slideIn sm:text-lg">
                    <p>
                        Frontend Developer with 2+ years of commercial experience building web applications with React, TypeScript, and Next.js. Experienced in developing dashboards, admin panels, monitoring systems, and reusable UI components in cross-functional teams.
                    </p>
                    <p>
                        Expanding into full-stack development with Python, Node.js, TypeScript, SQL, and PostgreSQL, with hands-on experience building REST APIs, backend services, automated tests, and database-driven applications. Familiar with Angular and FastAPI, with a strong focus on maintainable, scalable, and production-ready web applications.
                    </p>
                    <div className="grid gap-3 border-l border-[var(--accent)]/60 pl-5 text-sm sm:grid-cols-2 sm:text-base">
                        <p><strong className="text-white">Frontend:</strong> React, Next.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
                        <p><strong className="text-white">Backend:</strong> Node.js, Python, FastAPI, REST APIs</p>
                        <p><strong className="text-white">Databases:</strong> PostgreSQL, SQL</p>
                        <p><strong className="text-white">Testing:</strong> Vitest, Jest, unit testing, integration testing</p>
                        <p><strong className="text-white">Design &amp; AI:</strong> Figma, AI-assisted development, AI coding tools, UI prototyping</p>
                        <p><strong className="text-white">Tools &amp; Practices:</strong> Git, GitHub, npm, responsive web development, component-based architecture, REST API development</p>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-6">
                    <DownloadCV cvUrl="../doc/Resume_3 (1).pdf"/>
                    <button 
                        className="flex items-center justify-center gap-3 group transition-all duration-300 animate-fadeIn" 
                        style={{ animationDelay: '0.8s' }}>
                        <FaRegCirclePlay className="h-11 w-11 text-[var(--accent)] group-hover:text-white 
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