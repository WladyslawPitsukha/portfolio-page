
import { CgProfile } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { HiPencilAlt } from "react-icons/hi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiHandbagSimpleFill, PiNetworkSlashFill } from "react-icons/pi";
import { TbLayoutCardsFilled } from "react-icons/tb";

import { FuncItemsProps } from "@/types/typeFuncItems";
import { SectionScroll } from "@/utils/sectionScroll";

export const arrayNavItems: FuncItemsProps[] = [
    {
        icon: TiHome,
        text: "Home",
        onClick: () => SectionScroll('Home')
    },
    {
        icon: CgProfile,
        text: "About me",
        onClick: () => SectionScroll('About me')

    },
    {
        icon: HiPencilAlt,
        text: "Services",
        onClick: () => SectionScroll('Services')
    },
    {
        icon: PiHandbagSimpleFill,
        text: "Skills",
        onClick: () => SectionScroll('Skills')
    },
    {
        icon: TbLayoutCardsFilled,
        text: "Portfolio",
        onClick: () => SectionScroll('Portfolio')
    },
    {
        icon: PiNetworkSlashFill,
        text: "Networks",
        onClick: () => SectionScroll('Networks')
    },
    {
        icon: HiChatBubbleOvalLeftEllipsis,
        text: "Contacts",
        onClick: () => SectionScroll('Contacts')
    }
];