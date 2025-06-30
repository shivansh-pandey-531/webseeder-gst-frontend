import React, { useRef, useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import UserDetails from './UserDetails';
import dummyData from '../static/dummyData_userDetails';


const Navbar = ({ sidebarFullVisible, fullscreen }) => {

  const [userDetailsVisible, setUserDetailsVisible] = useState(false);
  const userDetailsRef = useRef(null);
  const buttonRef = useRef(null);

  // Close UserDetails when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userDetailsRef.current  &&  !userDetailsRef.current.contains(event.target)
        && buttonRef.current  &&  !buttonRef.current.contains(event.target)) {
        setUserDetailsVisible(false);
      }
    }
    if (userDetailsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } 
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDetailsVisible]);


  return (
    <div
      className={`flex w-full fixed z-30 justify-between px-6 py-3 bg-white transition-all duration-500`} 
      style={{ 
        borderBottom: fullscreen ? '1px solid transparent' : '1px solid #C5C5C5', 
        left: sidebarFullVisible? 240 : 82, 
        width:`calc(100% - ${sidebarFullVisible?  240 : 82}px)`,
        pointerEvents: fullscreen ? 'none' : undefined,
      }}
    >
      {
        fullscreen?
          null
          :
          (
            <>
              {/* Missing Feature feedback */}
              <Tooltip title="Missing feature" arrow={true} enterDelay={200} slotProps={{tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, arrow:{sx:{ color:"#323232"}}}}>
                <div className='flex items-center bg-white px-2 py-0 border rounded-md border-[#1773EA] border-solid cursor-pointer'>
                  <svg width="22" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.83227 14.169H5.14618C4.83466 14.169 4.58203 13.9165 4.58203 13.605C4.58203 13.2935 4.83461 13.0409 5.14618 13.0409H9.83227C10.1438 13.0409 10.3964 13.2935 10.3964 13.605C10.3964 13.9165 10.1438 14.169 9.83227 14.169ZM9.83227 10.1818H5.14618C4.83466 10.1818 4.58203 9.92929 4.58203 9.61777C4.58203 9.30624 4.83461 9.05371 5.14618 9.05371H9.83227C10.1438 9.05371 10.3964 9.30624 10.3964 9.61777C10.3964 9.92929 10.1438 10.1818 9.83227 10.1818Z" fill="#1773EA" stroke="#1773EA" strokeWidth="0.5"></path><path d="M13.2838 21.0751L11.1687 18.2297H4.21731C2.44326 18.2297 1 16.7885 1 15.017V8.18629C1 6.41482 2.44326 4.97363 4.21731 4.97363H11.0153C11.3268 4.97363 11.5795 5.22616 11.5795 5.53769C11.5795 5.84921 11.3269 6.10174 11.0153 6.10174H4.21731C3.06546 6.10174 2.1283 7.03688 2.1283 8.18629V15.017C2.1283 16.1665 3.06546 17.1016 4.21731 17.1016H11.4523C11.6307 17.1016 11.7987 17.186 11.905 17.3292L13.7306 19.785L15.5048 17.3349C15.5571 17.2626 15.6258 17.2038 15.7052 17.1633C15.7846 17.1227 15.8726 17.1016 15.9617 17.1016H19.7737C20.9256 17.1016 21.8628 16.1665 21.8628 15.017V8.31241C21.8628 8.00089 22.1153 7.74836 22.4269 7.74836C22.7385 7.74836 22.9911 8.00089 22.9911 8.31241V15.017C22.9911 16.7885 21.5478 18.2297 19.7737 18.2297H16.2498L14.1935 21.0694C14.0875 21.2158 13.7137 21.5208 13.2838 21.0751Z" fill="#1773EA" stroke="#1773EA" strokeWidth="0.5"></path><path d="M21.8994 1.50795C20.7527 0.637539 18.9808 0.918415 18.1592 2.10068L13.117 9.04962C13.0591 9.13049 13.0231 9.22489 13.0123 9.32373L12.5866 13.5039C12.5309 13.9198 12.9984 14.2583 13.3758 14.0769L17.2176 12.3801C17.3084 12.3391 17.3871 12.2755 17.4463 12.1954L22.4909 5.2432C23.3571 4.05026 23.0917 2.37469 21.8994 1.50795ZM14.0354 10.4139L15.8652 11.7441L13.8074 12.653L14.0354 10.4139ZM21.5778 4.58052L16.8646 11.0759L14.3612 9.25599L19.0724 2.76331C19.5476 2.07953 20.5726 1.91692 21.236 2.42043C21.9254 2.92159 22.0788 3.89053 21.5778 4.58052Z" fill="#1773EA" stroke="#1773EA" strokeWidth="0.5"></path><path d="M13.4862 6.27278C13.8497 6.27278 14.1444 5.97813 14.1444 5.61466C14.1444 5.25119 13.8497 4.95654 13.4862 4.95654C13.1228 4.95654 12.8281 5.25119 12.8281 5.61466C12.8281 5.97813 13.1228 6.27278 13.4862 6.27278Z" fill="#1773EA" stroke="#1773EA" strokeWidth="0.5"></path></svg>
                </div>
              </Tooltip>

              <div className='flex items-center gap-12'>

                {/* Helpbox */}
                <Tooltip title="Do you need help?" arrow={true} enterDelay={200} slotProps={{tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, arrow:{sx:{ color:"#323232"}}}}>
                  <div className='border border-solid px-3 py-2 border-gray-300 rounded-sm hover:border-[#1773EA] cursor-pointer'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_15637_114695)"><path d="M19.875 19.25C19.6488 18.2564 19.1333 17.3522 18.3936 16.6514C17.6538 15.9506 16.7231 15.4847 15.7188 15.3125C13.0938 14.8125 13.0938 14.25 13.0938 13.875V12.6562C13.5658 12.4582 13.9814 12.1462 14.3032 11.748C14.6249 11.3499 14.8429 10.8781 14.9375 10.375H16.0312C16.1406 10.3792 16.2496 10.3613 16.3518 10.3223C16.454 10.2834 16.5473 10.2242 16.6261 10.1484C16.7049 10.0725 16.7675 9.9815 16.8103 9.88081C16.8531 9.78016 16.8751 9.67188 16.875 9.5625V7.0625C16.875 6.847 16.7894 6.64034 16.637 6.48797C16.4847 6.33559 16.278 6.25 16.0625 6.25H15V5.125C15 1.59375 12.5 0 10 0C7.5 0 5 1.59375 5 5.125V6.25H3.96875C3.85944 6.24578 3.75044 6.26369 3.64822 6.30266C3.546 6.34159 3.45272 6.40078 3.37391 6.47663C3.29513 6.5525 3.23247 6.6435 3.18969 6.74419C3.14694 6.84484 3.12492 6.95312 3.125 7.0625V9.53125C3.125 9.74675 3.21059 9.95341 3.36297 10.1058C3.51534 10.2582 3.722 10.3438 3.9375 10.3438H5.3125C5.60469 11.3452 6.14169 12.2581 6.875 13V13.9062C6.875 13.9375 6.90625 14.8438 4.25 15.3125C3.25138 15.4903 2.32736 15.9587 1.59363 16.6591C0.859903 17.3595 0.349047 18.2607 0.125 19.25L0 20H20L19.875 19.25ZM6.25 6.21875C8.125 6.0625 9.0625 5.3125 9.84375 4.65625C10.625 4 10.9688 3.75 11.875 3.75C12.3344 3.71537 12.7889 3.86328 13.1399 4.16166C13.491 4.46003 13.7102 4.88478 13.75 5.34375V10C13.75 10.875 12.7812 11.5312 12.5 11.5312H12.2812C12.193 11.4385 12.0861 11.3654 11.9676 11.3169C11.8491 11.2685 11.7217 11.2457 11.5938 11.25H10.9062C10.6659 11.25 10.4354 11.3455 10.2654 11.5154C10.0955 11.6854 10 11.9159 10 12.1562C9.99581 12.2794 10.016 12.4021 10.0593 12.5175C10.1026 12.6328 10.1682 12.7385 10.2523 12.8285C10.3365 12.9184 10.4376 12.9909 10.5498 13.0418C10.662 13.0927 10.7831 13.121 10.9062 13.125H11.5625L11.8438 13.0625V13.8438C11.8064 14.3267 11.9514 14.8061 12.25 15.1875L10 18.3125L7.71875 15.2188C8.02306 14.8403 8.16869 14.3586 8.125 13.875C8.2595 13.8715 8.38928 13.8246 8.49503 13.7414C8.60078 13.6582 8.67684 13.5432 8.71197 13.4133C8.74706 13.2834 8.73931 13.1457 8.68987 13.0205C8.64041 12.8954 8.55191 12.7896 8.4375 12.7188C7.09375 11.9062 6.25 10.125 6.25 8.15625V6.21875Z" fill="#1773EA"></path></g><defs><clipPath id="clip0_15637_114695"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                  </div>
                </Tooltip>

                {/* User credentials */}
                <div ref={buttonRef} onClick={() => setUserDetailsVisible(prev => !prev)} className='relative flex items-center gap-3'>
                  <div className='flex flex-col items-end cursor-pointer'>
                    <p className='text-sm font-medium'>{dummyData.number}</p>
                    <p className='text-xs'>Owner</p>
                  </div>

                  <div className='bg-[#D1E3FB] rounded-full p-2.5 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="#1773EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>

                  <div ref={userDetailsRef} className='fixed top-[65px] -right-0 z-10 w-96' style={{ borderLeft: '1px solid #C5C5C5' }}>
                    {
                      userDetailsVisible  &&  <UserDetails details={dummyData} />
                    }
                  </div>
                </div>
              </div>
            </>
          )
      }
      
      


      
    </div>
  )
}

export default Navbar;