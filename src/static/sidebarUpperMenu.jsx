import { FiHome } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { TbDatabase, TbUsers } from "react-icons/tb";
import { redirect } from "react-router-dom";


const sidebarUpperMenu = [
    {
        img: <FiHome size={20} />,
        title: "Dashboard",
        redirect: "/gst-dashboard"
    },
    {
        img: <MdOutlineRemoveRedEye size={20} />,
        title: "My Company",
        redirect: "/my-companies"
        
    },
    {
        img: <SlSettings size={20} />,
        title: "Company Setting",
        redirect: "/company-settings"
    },
    {
        img: <TbDatabase size={20} />,
        title: "Import History",
        redirect: '/imported-file-log'
    },
    {
        img: <TbUsers size={20} />,
        title: "User Activity",
        redirect: "/user-activity"
    }
];

export default sidebarUpperMenu;
