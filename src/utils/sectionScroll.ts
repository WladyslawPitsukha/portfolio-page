export function SectionScroll(id: string) {
    const section = document.getElementById(id);

    section?.scrollIntoView({behavior: 'smooth'});
}