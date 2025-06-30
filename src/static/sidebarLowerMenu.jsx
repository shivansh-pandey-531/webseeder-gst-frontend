import { MdOutlineSupportAgent } from "react-icons/md";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";


const sidebarLowerMenu = [
    {
        id: 11,
        img: <MdOutlineSupportAgent size={20} />,
        title: "Live Chat"
    },
    {
        id: 12,
        img: <PiArrowsClockwiseBold size={20} />,
        title: "Try A/c. & Billing"
    },
    {
        id: 13,
        img: "",
        title: "Download App Now"
    },
    {
        id: 14,
        img: <SlSettings size={20} />,
        title: "Setting"
    }
];

export default sidebarLowerMenu;