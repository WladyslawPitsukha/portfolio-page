import { FaLinkedinIn, FaFacebookMessenger  } from "react-icons/fa";
import { FaTelegram, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

import { SocialAccProps } from "@/types/typeSocialAcc";

export const ArraySocialAcc: SocialAccProps[] = [
    {
        icon: FaTelegram,
        title: "Telegram",
        link: "https://t.me/@def_wlad_void",
    },
    {
        icon: FaFacebook,
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61581269135066",
    },
    {
        icon: FaFacebookMessenger,
        title: "Messenger",
        link: "https://www.facebook.com/profile.php?id=61581269135066",
    },
    {
        icon: FaLinkedinIn,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/wladislaw-pitsukha-17050723a/",
    },
    {
        icon: FaInstagram,
        title: "Instagram",
        link: "https://www.instagram.com/def_wlad_void/", 
    },
    {
        icon: FaGithub,
        title: "GitHub",
        link: "https://github.com/WladislawPitsukha",
    }
]