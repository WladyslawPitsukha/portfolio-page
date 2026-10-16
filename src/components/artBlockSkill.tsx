import { BlockCompProps } from "@/types/typeSkills";
import Link from "next/link";

export default function ArtBlockSkill({array}: {array: BlockCompProps[]}) {
    return (
        <article className="grid w-full gap-10 md:grid-cols-2">
            {array.map((obj, index) => (
                <div
                    key={index}
                    className="group inline-block border-t border-white/15 pt-5 transition-all duration-300 hover:border-[var(--accent)]"
                >
                    <Link 
                        href={obj.head.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block transition-all duration-300"
                    >
                        <h4 className="skillTitle mb-5 text-xl font-bold text-white">
                            {obj.head.title}
                        </h4>
                    </Link>
                    <div className="mb-6 flex flex-col justify-around gap-4">
                        {[obj.time, obj.addInfo.specialization, obj.addInfo.description].filter(Boolean).map((text, idx) => (
                            <p 
                                key={idx}
                                className="font-sans text-sm text-[var(--muted)] transition-colors duration-300 group-hover:text-white/80"
                            >
                                {text}
                            </p>
                        ))}
                        {obj.addInfo.highlights && (
                            <ul className="ml-4 list-disc space-y-2 font-sans text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--accent)]">
                                {obj.addInfo.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                        {obj.addInfo.skills && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {obj.addInfo.skills.map((skill) => (
                                    <span key={skill} className="border border-[var(--accent)]/40 px-2 py-1 font-sans text-xs text-[var(--accent-soft)]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex w-full items-center gap-3" aria-label={`${obj.percent}%`}>
                        <div
                            className="progressBar"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={obj.percent}
                        >
                            <div
                                className="progressFill"
                                style={{ '--progress-width': `${obj.percent}%` } as React.CSSProperties}
                            />
                        </div>
                        <span className="shrink-0 font-sans text-sm font-medium text-[var(--accent-soft)]">
                            {obj.percent}%
                        </span>
                    </div>
                </div>
            ))}
        </article>
    );
}