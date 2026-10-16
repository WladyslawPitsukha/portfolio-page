export default function TitleComponent ({ title, description, position }: {
        title: string, 
        description: string,
        position: string
    }) {
    return(
        <article className={`flex flex-col items-${position} gap-10`}>
            <h1 className="font-sans text-2xl font-bold uppercase tracking-[0.3em] text-[var(--accent)] sm:text-3xl lg:text-4xl">
                {title}
            </h1>
            <h3 className="max-w-3xl text-left text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                {description}
            </h3>
        </article>
    )
}