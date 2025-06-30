import React from 'react';
import GetStarted from "./GetStarted";
import Helpdesk from "./HelpDesk";
import UpcomingServices from './UpcomingServices';
import NotifsAndCirculars from './NotifsAndCirculars';


const HeroSection = () => {

  return (
    <div className='flex flex-col p-4 mt-16 w-full bg-[#F8F8F8] gap-4'>
        <GetStarted />
        <Helpdesk />
        <UpcomingServices />
        <NotifsAndCirculars />
    </div>
  )
}

export default HeroSection;