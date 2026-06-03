import { arrayBiography } from "@/constants/arrBiography";
import React from "react";

const ArtBiography = () => {
    return(
        <article className="flex justify-between relative h-96 overflow-hidden w-full gap-10">
            {arrayBiography.map((obj, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start justify-center w-full bg-gray-700 p-5 rounded-md shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {obj.title}
                    </h3>
                    {[obj.text1, obj.text2].map((text, textIndex) => (
                        <React.Fragment key={textIndex}>
                            {textIndex > 0 && <br />}
                            <p className="text-white">
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