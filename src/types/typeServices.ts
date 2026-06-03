import { IconType } from "react-icons"

export type ServicesProps = {
    icon: IconType;
    infa: {
        title: string;
        text: string;
        addText: string;
    }
    index?: number;
}