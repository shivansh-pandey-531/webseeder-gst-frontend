import { PiHandCoinsLight } from "react-icons/pi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { GrPowerShutdown } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { Tooltip } from "@mui/material";


const UserDetails = ({details}) => {

return (
    <div className='flex flex-col'>
            {/* 1st Half */}
            <div className='flex flex-col justify-center items-center bg-[#F3F8FE] pt-6' style={{ borderBottom: '1px solid #C5C5C5' }}>
                    <div className='bg-[#D1E3FB] rounded-full p-2.5 cursor-pointer w-16 h-16 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1773EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>

                    <div className='flex flex-col mt-5 gap-2 text-sm font-medium justify-center items-center'>
                            <p>{details.number}</p>
                            
                            <div className='flex items-center gap-4 mb-2'>
                                    <PiHandCoinsLight color="#1773EA" size={18} />
                                    
                                    <p className="cursor-pointer">Support Token: {details.support}</p>
                                    
                                    <Tooltip
                                            title={
                                                    <span>
                                                            <span className="font-bold">What is Support Token?<br /><br /></span>
                                                            Suppose, a user needs help from the munim support team. The user just needs to click on the copy button and share the token with the munim support team, so the support team can use it to fetch your organization details for identity verification without asking further questions.
                                                    </span>
                                            }
                                            arrow={true}
                                            enterDelay={200}
                                            slotProps={{
                                                    tooltip: { sx: { bgcolor: "#323232", padding: '10px', fontSize: "13px" } },
                                                    arrow: { sx: { color: "#323232" } }
                                            }}
                                    >
                                            <div className='pt-1 cursor-pointer'>
                                                    <HiOutlineQuestionMarkCircle size={18} />
                                            </div>
                                    </Tooltip>
                                    
                                    <IoCopyOutline color="#1773EA" size={16} className="cursor-pointer" />
                            </div>
                    </div>

                    
                    {/* Menu butons */}
                    <div className="flex justify-around text-sm font-medium w-full mb-6">
                            <div className="flex flex-col w-full">
                                    <div className="flex gap-4 p-2 items-center justify-center hover:text-blue-500 hover:bg-blue-200 cursor-pointer">
                                            <FiUser color="#1773EA" size={18} />
                                            <p>User Profile</p>
                                    </div>
                                    <div className="flex gap-3 p-2 items-center justify-center hover:text-blue-500 hover:bg-blue-200 cursor-pointer">
                                            <MdOutlineRemoveRedEye color="#1773EA" size={18} />
                                            <p>My Company</p>
                                    </div>
                            </div>

                            <div className="w-[1px] bg-[#C5C5C5]"></div>
                            
                            <div className="flex flex-col justify-center w-full">
                                    <div className="flex gap-4 p-2 items-center justify-center hover:text-blue-500 hover:bg-blue-200 cursor-pointer">
                                            <SlSettings color="#1773EA" size={18} />
                                            <p>Setting</p>
                                    </div>
                                    <div className="flex gap-4 p-2 items-center justify-center hover:text-blue-500 hover:bg-blue-200 cursor-pointer">
                                            <GrPowerShutdown color="#1773EA" size={18} />
                                            <p>Logout</p>
                                    </div>
                            </div>
                    </div>
            </div>


            {/* 2nd Half */}
            <div className="px-4 pt-4 pb-7 bg-white" style={{ borderBottom: '1px solid #C5C5C5' }}>
                    <h3 className="font-semibold mb-6">Organizations</h3>
                    
                    <div className="flex flex-col gap-2">
                            {
                                    details.organizations && details.organizations.length > 0 ? (
                                            details.organizations.map((org) => (
                                                    <div key={org} className="flex items-center p-3 gap-3 rounded-lg bg-[#E7F2FF] hover:bg-gray-200 cursor-pointer">
                                                            <div className="text-blue-700 text-xl font-semibold bg-[#F3F8FE] px-3 py-2 rounded-full">{org.charAt(0).toUpperCase()}</div>
                                                            <div className="text-sm font-medium">{org}</div>
                                                    </div>
                                            ))
                                    ) : (
                                            <div className="flex items-center p-3 gap-3 rounded-lg bg-[#E7F2FF] hover:bg-gray-200 cursor-pointer">
                                                    <div className="text-blue-700 text-xl font-semibold bg-[#F3F8FE] px-3 py-2 rounded-full">M</div>
                                                    <div className="text-sm font-medium">My Own Organization</div>
                                            </div>
                                    )
                            }
                    </div>
            </div>
    </div>
)
}

export default UserDetails;