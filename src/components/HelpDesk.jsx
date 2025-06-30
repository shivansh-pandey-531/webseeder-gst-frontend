import React, { useState } from 'react';
import HelpdeskCard from './HelpdeskCard';
import dummyData from '../static/dummyData_HelpDeskCard';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";


const HelpDesk = () => {

  const [helpdeskSlided, setHelpdeskSlided] = useState(false);

  const leftSlideHandler = () => {
    setHelpdeskSlided(false);
  }

  const rightSlideHandler = () => {
    setHelpdeskSlided(true);
  }


  return (
    <div className='flex flex-col max-w-[65%] gap-6 px-6 pt-4 pb-7 bg-white border border-solid rounded-md border-[#C5C5C5]'>
      <h3 className='font-semibold'>Help Desk</h3>
      
      {/* Embed YT videos */}
      <div className={`relative flex gap-5 overflow-x-hidden`}>
        <div className={`flex items-start gap-5 ${helpdeskSlided?  "-translate-x-36" : "translate-x-0"} transition-transform duration-500`}>
          {
            dummyData.map(item => <HelpdeskCard key={item.id} embedLink={item.embedLink} desc={item.desc} />)
          }
        </div>
        
        <div className='absolute h-full w-52 flex flex-col justify-center items-end pr-4 gap-3 right-0 bg-gradient-to-r from-white/0 to-white'>
          <TfiArrowCircleLeft size={32} onClick={leftSlideHandler} className={`${helpdeskSlided ? "opacity-100 cursor-pointer" : "opacity-30"}`} />
          <TfiArrowCircleRight size={32} onClick={rightSlideHandler} className={`${helpdeskSlided ? "opacity-30" : "opacity-100 cursor-pointer"}`} />
        </div>
      </div>
    </div>
  )
}

export default HelpDesk;

