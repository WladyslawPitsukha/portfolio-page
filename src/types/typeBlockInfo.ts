import { IconType } from "react-icons";

export type BlockInfoProps = {
    index: number;
    icon: IconType;
    main: {
        title: string;
        text: string;
        link: string;
    }
}