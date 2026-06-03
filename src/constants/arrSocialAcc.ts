import { FaLinkedinIn, FaFacebookMessenger  } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram, FaFacebook, FaGithub } from "react-icons/fa6";

import { SocialAccProps } from "@/types/typeSocialAcc";

export const ArraySocialAcc: SocialAccProps[] = [
    {
        icon: FaTelegram,
        title: "Telegram",
        link: "https://t.me/merifri_wlad",
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
        icon: SlSocialVkontakte,
        title: "Vkontacte",
        link: "https://vk.com/merifri.wlad",
    },
    {
        icon: FaLinkedinIn,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/wladislaw-pitsukha-17050723a/",
    },
    {
        icon: FaGithub,
        title: "GitHub",
        link: "https://github.com/WladislawPitsukha",
    }
]