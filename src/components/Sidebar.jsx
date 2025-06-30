import { useState, useEffect } from 'react';
import sidebarHalfImg from '../assets/sidebarHalfImg.png';
import sidebarFullImg from '../assets/sidebarFullImg.png';
import sidebarUpperMenu from '../static/sidebarUpperMenu';
import sidebarLowerMenu from '../static/sidebarLowerMenu';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import gst_icon from "../assets/gst_icon.svg";
import BuyNowCard from './BuyNowCard';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ sidebarFullVisible, setSidebarFullVisible, sidebarPinned, setSidebarPinned, fullscreen }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();


  // Handle hover only if not pinned
  const handleMouseEnter = () => { if(!sidebarPinned)  setSidebarFullVisible(true)};
  const handleMouseLeave = () => { if(!sidebarPinned)  setSidebarFullVisible(false)};

  // Handle pin/unpin
  const handlePinClick = () => {
    setSidebarPinned(prev => !prev);
    // setSidebarFullVisible(prev => !sidebarPinned ? true : false);
  };

  const handleUpperMenuClick = (idx, redirect) => {
    setActiveIndex(idx);
    // Remove leading slash if present to avoid double slashes and ensure client-side navigation
    const path = redirect.startsWith('/') ? redirect : `/${redirect}`;
    navigate(path);
  }

   // Sync activeIndex with current route, to ensure automatic menu highlight
  useEffect(() => {
    const idx = sidebarUpperMenu.findIndex(item => item.redirect === location.pathname);
    if (idx !== -1) setActiveIndex(idx);
  }, [location.pathname]);



  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className={`
      ${sidebarFullVisible? 'max-w-60 w-60 items-start' : 'max-w-48 items-center' }
      ${fullscreen ? 'bg-white border-transparent' : 'bg-white'}
      fixed left-0 top-0 h-screen z-50 p-1 flex flex-col justify-between 
      transition-all duration-500`} 
      style={{
        borderRight: '1px solid',
        borderColor: fullscreen ? 'transparent' : '#D1D5DB',
        boxShadow: fullscreen ? 'none' : undefined,
        pointerEvents: fullscreen ? 'none' : undefined, // disables interaction
      }}
    >
      { 
        fullscreen? 
          null 
          : 
          (
            <>
              <div className='flex flex-col items-center gap-1 w-full'>
                <div className={`flex items-center ${sidebarFullVisible? 'w-full':''} justify-between`}>
                  <div className='hover:cursor-pointer'>
                    {
                      sidebarFullVisible? (<img src={sidebarFullImg} height={60} />) : (<img src={sidebarHalfImg} height={64} />)
                    }  
                  </div>
                  <div className='cursor-pointer'>
                    {
                      sidebarFullVisible  &&  <MdOutlineKeyboardDoubleArrowRight onClick={handlePinClick} 
                      style={{transform: sidebarPinned ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s'}}  
                      title={sidebarPinned ? "Unpin Sidebar" : "Pin Sidebar"}  size={24} color='#1773EA' />
                    }
                  </div>
                </div>

                {/* Sidebar Upper Menu */}
                <div className='flex flex-col gap-1 w-full'>
                {
                  sidebarUpperMenu.map((item, idx) => (
                    <div key={idx} onClick={() => handleUpperMenuClick(idx, item.redirect)} className={`
                    ${(activeIndex == idx)?  (sidebarFullVisible? '!bg-[#1773EA] text-white p-2':'bg-[#C7E0FF] p-6') : (sidebarFullVisible? 'p-2':'bg-white p-6')} 
                    text-sm font-medium w-full hover:bg-slate-100 flex items-center gap-1 py-2 rounded-md cursor-pointer`}>
                      {item.img}
                      {sidebarFullVisible  &&  item.title}
                    </div>))
                  }
                </div>
              </div>


              {/* Sidebar Lower Menu */}
              <div className='flex flex-col items-center gap-1 w-full'>
                <div className='mb-3'>
                  {
                    sidebarFullVisible?  
                      <BuyNowCard/> 
                      : 
                      <div className='flex iems-center justify-center px-6 py-3 rounded-md bg-[#FCE5E5] cursor-pointer'>
                        <div className='flex items-center justify-center border-2 rounded-sm border-solid border-[#9CA3AF]'>
                          <BsCurrencyRupee color='#9CA3AF' />
                        </div> 
                      </div>
                  }
                </div>

                <div className={`flex flex-col items-center w-full gap-2`}>
                  {
                    sidebarLowerMenu.map(item => (
                      <div key={item.id} onClick={() => item.id!=13  &&  setActiveIndex(item.id)} className={`
                      ${activeIndex == item.id?  (sidebarFullVisible? '!bg-[#1773EA] text-white p-2':'bg-[#C7E0FF] p-6') : (sidebarFullVisible? 'p-2':'bg-white p-6')} 
                      ${item.id == 13 ? 'border border-solid border-[#1773EA] text-[#1773EA]' : 'hover:bg-slate-100'}  
                      text-sm font-medium w-full flex items-center gap-1 py-2 rounded-md cursor-pointer`}>
                        {item.id == 13?  <img src={gst_icon} height={24} /> : item.img}
                        {sidebarFullVisible  &&  item.title}
                      </div>
                    ))
                  }
                </div>
                
              </div>
            </>
          )
      }
    </div>
  )
}

export default Sidebar;