import { arrayBiography } from "@/constants/arrBiography";
import React from "react";

const ArtBiography = () => {
    return(
        <article className="grid w-full gap-10 md:grid-cols-2">
            {arrayBiography.map((obj, index) => (
                <div
                    key={index}
                    className="flex w-full flex-col items-start justify-start border-t border-white/15 pt-6"
                >
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        {obj.title}
                    </h3>
                    {[obj.text1, obj.text2, obj.text3, obj.text4].filter(Boolean).map((text, textIndex) => (
                        <React.Fragment key={`${obj.title}-${textIndex}`}>
                            {textIndex > 0 && <br />}
                            <p className="font-sans text-sm leading-relaxed text-[var(--muted)]">
                                {text}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </article>
    )
}

export default ArtBiography;