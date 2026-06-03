export type BlockCompProps = {
    head: {
        title: string;
        link: string;
    }
    time: string;
    addInfo: {
        specialization: string;
        description: string;
    }
    percent: number;
}

export type ButtonProps = {
    button: string;
}

export const arraySectItems: ButtonProps[] = [
    { button: "Education" },
    { button: "Biography" },
    { button: "Experience" }
];