export default function TitleComponent ({ title, description, position }: {
        title: string, 
        description: string,
        position: string
    }) {
    return(
        <article className={`flex flex-col items-${position} gap-10`}>
            <h4 className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                {title}
            </h4>
            <h1 className="max-w-3xl text-left text-4xl font-bold leading-tight text-white sm:text-5xl">
                {description}
            </h1>
        </article>
    )
}