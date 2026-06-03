import { IconType } from "react-icons";

export type PortfolioItemProps = {
    id: number;
    icon: IconType;
    main: {
        title: string;
        description: string;
        link: string;
    }
    image?: string;
};