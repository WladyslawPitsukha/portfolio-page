export default function TitleComponent ({ title, description, position }: {
        title: string, 
        description: string,
        position: string
    }) {
    return(
        <article className={`flex flex-col items-${position} gap-10`}>
            <h4 className="font-bold uppercase text-blue-700 text-[24px]">
                {title}
            </h4>
            <h1 className="font-bold text-white text-[48px] text-left">
                {description}
            </h1>
        </article>
    )
}