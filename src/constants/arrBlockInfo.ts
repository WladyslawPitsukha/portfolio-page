import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

import { BlockInfoProps } from "@/types/typeBlockInfo";

export const arrayBlocksInfo: BlockInfoProps[]  = [
    {
        index: 1,
        icon: BsFillPhoneVibrateFill,
        main: {
            title: "Phone",
            text: "Call me to discuss a project, ask a question, or explore how I can help with your digital product.",
            link: "+48507667575",
        }
    },
    {
        index: 2,
        icon: FaMapLocationDot,
        main: {
            title: "Location",
            text: "I am currently based in Warsaw and occasionally work from Krakow and Gdansk.",
            link: "View on map",
        }
    },
    {
        index: 3,
        icon: MdContactMail,
        main: {
            title: "Email",
            text: "Send me an email with your questions, ideas, or project proposal. I will reply as soon as possible.",
            link: "pitsukhavladislav@gmail.com",
        }
    },
]