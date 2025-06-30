import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MyCompanies from "../components/MyCompanies";
import CompanySettings from "../components/CompanySettings";
import ImportHistory from "../components/ImportHistory";
import UserActivity from "../components/UserActivity";


const componentMap = {
  '/gst-dashboard': () => <HeroSection />,
  '/my-companies': (props) => <MyCompanies {...props} />,
  '/company-settings': () => <CompanySettings />,
  '/imported-file-log': () => <ImportHistory />,
  '/user-activity': () => <UserActivity />,
};

// Render the component with props
const contentKey = location.pathname;
const ContentComponent = componentMap[contentKey]


const GstDashboard = () => {

  const [sidebarFullVisible, setSidebarFullVisible] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (fullscreen) {
      document.body.classList.add('fullscreen-bg');
      document.getElementById('root')?.classList.add('fullscreen-bg');
    } else {
      document.body.classList.remove('fullscreen-bg');
      document.getElementById('root')?.classList.remove('fullscreen-bg');
    }
    return () => {
      document.body.classList.remove('fullscreen-bg');
      document.getElementById('root')?.classList.remove('fullscreen-bg');
    };
  }, [fullscreen]);


  // Find the component for the current path, fallback to HeroSection
  const content = componentMap[location.pathname]  ||  <HeroSection />;


  
  return (
    <div className='flex relative max-w-screen'>
        <Sidebar sidebarFullVisible={sidebarFullVisible} setSidebarFullVisible={setSidebarFullVisible} 
        sidebarPinned={sidebarPinned} setSidebarPinned={setSidebarPinned}
        fullscreen={fullscreen} />

        <main className={`${sidebarFullVisible?  'ml-[240px]' : 'ml-[82px]'}
        ${fullscreen ? 'bg-white' : 'bg-[#F8F8F8]'}
        relative w-full flex flex-col transition-all duration-300`}>
          <Navbar sidebarFullVisible={sidebarFullVisible} fullscreen={fullscreen} />
          
          <ContentComponent fullscreen={fullscreen} setFullscreen={setFullscreen} />
        </main>
    </div>
  )
}


export default GstDashboard;