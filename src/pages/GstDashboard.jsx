import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MyCompanies from "../components/MyCompanies";
import CompanySettings from "../components/CompanySettings";
import ImportHistory from "../components/ImportHistory";
import UserActivity from "../components/UserActivity";


const componentMap = {
  '/gst-dashboard': <HeroSection />,
  '/my-companies': <MyCompanies />,
  '/company-settings': <CompanySettings />,
  '/imported-file-log': <ImportHistory />,
  '/user-activity': <UserActivity />,
};



const GstDashboard = () => {

  const [sidebarFullVisible, setSidebarFullVisible] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const location = useLocation();

  // Find the component for the current path, fallback to HeroSection
  const content = componentMap[location.pathname]  ||  <HeroSection />;


  return (
    <div className='flex relative max-w-screen'>
        <Sidebar sidebarFullVisible={sidebarFullVisible} setSidebarFullVisible={setSidebarFullVisible} sidebarPinned={sidebarPinned} setSidebarPinned={setSidebarPinned} />

        <main className={`${sidebarFullVisible?  'ml-[240px]' : 'ml-[82px]'} relative w-full flex flex-col transition-all duration-300`}>
          <Navbar sidebarFullVisible={sidebarFullVisible} />
          {content}
        </main>
    </div>
  )
}


export default GstDashboard;