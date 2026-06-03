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
            text: "You can contact me by phone for more information or to discuss your questions. I will be happy to help!",
            link: "+48507667575",
        }
    },
    {
        index: 2,
        icon: FaMapLocationDot,
        main: {
            title: "Location",
            text: "Currently, I am in Warsaw, but from time to time I visit Krakow and Gdansk.",
            link: "View on map",
        }
    },
    {
        index: 3,
        icon: MdContactMail,
        main: {
            title: "Monday-Sunday",
            text: "You can contact me via email for any questions or proposals. I am always happy to help and will respond to your messages as soon as possible.",
            link: "pitsukhavladislav@gmail.com",
        }
    },
]