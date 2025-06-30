import { useState } from 'react';
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { MdFilterListOff } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { RiFullscreenExitLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Tooltip, Button } from '@mui/material'
import ColumnActionsMenu from './ColumnActionsMenu';
import ColumnVisibilityMenu from './ColumnVisibilityMenu';
import CreateCompanyModal from './CreateCompanyModal';
import dummyData from '../static/dummyData_CompanySettings';


const tabs = ["All", "Monthly", "Quarlerly", "Deactivated", "Group"];

const columnVisibilityOptions = {
  'Company Name': true,
}


const CompanySettings = ({ fullscreen, setFullscreen }) => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [columnSearchEnabled, setColumnSearchEnabled] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const menuClickHandler = (idx) => {
    setSelectedTab(idx);
  }


  //Fullscreen handling
  const handleFullscreen = () => {
    setFullscreen(prev => !prev);
  };



  return (
    <div className={`flex flex-col py-6 px-7 mt-16 gap-6 bg-[#F8F8F8]`}>
      {/* Headings */}
      <div className='flex justify-between w-full items-center'>
        <h2 className='font-medium text-2xl'>Company Setting</h2>
        <div className='flex items-center gap-6'>
          <Tooltip title="Import" arrow={true} placement='top' enterDelay={200} slotProps={{tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, arrow:{sx:{ color:"#323232"}}}}>
            <BsBoxArrowInDownRight size={24} className='cursor-pointer' />
          </Tooltip>
          
          <button 
            onClick={handleOpenModal} 
            className='text-[#1773EA] py-1.5 px-5 font-medium text-center text-sm bg-[#F8F8F8] rounded-md border border-solid border-[#1773EA] cursor-pointer hover:bg-white transition-all duration-300'
          >
            Create Company
          </button>
          
          <CreateCompanyModal open={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>

      {/* Custom fullscreen style for the main box */}
      <style>
        {`
          .main-box {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            max-width: 100%;
            max-height: 100%;
            margin-left: 0;
            margin-right: 0;
            background: white;
            border-radius: 12px;
            box-shadow: 0 0 24px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(.4,0,.2,1);
          }
          .custom-fullscreen {
            position: fixed;
            top: 24px;
            left: 24px;
            right: 24px;
            bottom: 24px;
            z-index: 50;
            max-width: 95vw;
            max-height: 70vh;
            margin-left: auto;
            margin-right: auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 0 24px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(.4,0,.2,1);
          }
          .table-scroll-area {
            flex: 1 1 0%;
            overflow-y: auto;
            width: 100%;
          }
        `}
      </style>

      

      {/* Main Box */}
      <div
        style={fullscreen ? { maxHeight: "calc(100vh - 30px)" } : { minHeight: "100vh" }}
        className={`relative border border-solid border-[#C5C5C5] rounded-lg w-full ${fullscreen ? 'custom-fullscreen' : ''}`}
      >
        {/* Tabs Panel */}
        <div className='bg-white w-full px-1 rounded-lg flex justify-between gap-7' style={{borderBottom: '1px solid #C5C5C5', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 10, position: fullscreen ? 'sticky' : 'static', top: 0}}>
        
          {/* Left half */}
          {
            fullscreen?
             (
              <div className=' ml-2 flex items-center'>
                <h2 className='text-xl font-medium py-4'>Company Setting</h2>
              </div>
             )
              : 
              (
                <div className='flex gap-5 pt-2.5'>
                  {
                    tabs.map((tab, idx) => (
                      <div
                        key={idx}
                        onClick={() => menuClickHandler(idx)}
                        className={`${selectedTab === idx ? 'text-blue-500' : ''}
                          ${idx === 0 ? 'w-12 ml-2 -mr-1' : 'w-20'}
                          flex flex-col text-sm font-medium justify-end cursor-pointer`}
                      >
                        <div className='mb-2 text-center'>{tab}</div>
                        <div className={`${selectedTab === idx ? ' bg-gradient-to-r from-blue-400 to-blue-300' : ''} mx-1 h-[3px]`}></div>
                      </div>
                    ))
                  }
                </div>
              )
          }
          
          {/* Right half --> Filter, column, fullscreen icons */}
          <div className='flex items-center py-1.5 gap-3 pr-3'>            
            <input type="text" className='px-2 py-3 rounded-md h-full focus:outline-none focus:border-blue-500 focus:drop-shadow-md border border-solid border-gray-300 placeholder-gray-300 text-xs w-48 font-medium' placeholder='PAN/GSTIN/NAME/GROUP' />
            
            <div className='flex gap-1 items-center'>
              <div onClick={() => setColumnSearchEnabled(prev => !prev)} className='flex items-center justify-center w-8 h-8 rounded-sm hover:text-[#1773EA] hover:bg-[#DCEAFC] cursor-pointer'>      
                <Tooltip 
                  title={`${columnSearchEnabled ? "Hide column search" : "Show column search"}`} 
                  arrow={true} 
                  enterDelay={200} 
                  slotProps={{
                    tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, 
                    arrow:{sx:{ color:"#323232"}}
                  }}
                  PopperProps={{
                    sx: { zIndex: 50 }
                  }}
                >
                  <span className='flex justify-center items-center w-full h-full'>
                    <MdFilterListOff size={18} style={{ display: columnSearchEnabled ? 'inline' : 'none' }}/>
                    <IoFilterSharp size={18} style={{ display: columnSearchEnabled ? 'none' : 'inline' }}/>
                  </span>     
                </Tooltip>
              </div>

              <ColumnVisibilityMenu columnVisibilityOptions={columnVisibilityOptions} />
              
              <div onClick={handleFullscreen} className='flex items-center justify-center w-8 h-8 rounded-sm hover:text-[#1773EA] hover:bg-[#DCEAFC] cursor-pointer'>
                <Tooltip
                  title={`${fullscreen ? "Toggle exit full screen" : "Toggle full screen"}`}
                  arrow={true}
                  enterDelay={200}
                  slotProps={{
                    tooltip: { sx: { bgcolor: "#323232", padding: '10px', fontSize: "13px" } },
                    arrow: { sx: { color: "#323232" } }
                  }}
                  PopperProps={{
                    sx: { zIndex: 50 }
                  }}
                >
                  <span className='flex justify-center items-center w-full h-full'>
                    <RiFullscreenExitLine size={18} style={{ display: fullscreen ? 'inline' : 'none' }}/>
                    <RiFullscreenLine size={18} style={{ display: fullscreen ? 'none' : 'inline' }}/>
                  </span>      
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Table Heading + Table */}
        <div
          className="table-scroll-area"
          style={
            fullscreen
              ? {
                  height: 'calc(100vh - 320px)', // Adjust 320px as needed for your header/tabs/filters
                  overflowY: 'auto',
                  background: 'white',
                  borderRadius: '0 0 12px 12px',
                }
              : {}
          }
        >
          <table className='relative'>
            <style>
              {`
                table tr {
                  border-bottom: 2px solid #C5C5C5;
                }
                table thead tr {
                  border-bottom: none;
                }
                table {
                  border-collapse: separate;
                  border-spacing: 0;
                  width: 100%;
                }
                table th, table td {
                  padding: 8px 12px;
                  text-align: center;
                  border-right: 1px solid #C5C5C5;
                  border-bottom: 1px solid #C5C5C5;
                }
                table td {
                  padding: 9px;
                }
                table th {
                  position: sticky;
                  top: 0;
                  background: #C8E1FF;
                  z-index: 20;
                  padding-top: 20px; 
                  padding-bottom: 20px; 
                  font-size: 21px;
                  box-shadow: 0 2px 8px -2px rgba(0,0,0,0.08);
                  border-bottom: 2px solid #C5C5C5;
                }

                table tr:last-child td,
                table tr:last-child th {
                  border-bottom: none;
                }

                .underline-anim {
                  position: absolute;
                  left: 50%;
                  bottom: 0;
                  height: 2px;
                  background: #207AD3;
                  width: 0;
                  transform: translateX(-50%) scaleX(0);
                  transition: transform 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1);
                  transform-origin: center;
                }
                .underline-anim.active {
                  width: calc(100% - 12px);
                  transform: translateX(-50%) scaleX(1);
                }
              `}
            </style>
            <thead className={`bg-[#C8E1FF]`}>
              <tr>
                <th style={{ minWidth: '50px', width: '80px' }}>Sr.No.</th>
                <th style={{ minWidth: '400px', width: '700px' }}>
                  <div className='relative flex flex-col gap-1 justify-center items-center'>
                    <div className='flex items-center'>
                      <p>Company Name</p>
                      <div className='absolute -right-3 z-50'>
                        <ColumnActionsMenu />
                      </div>
                    </div>
                    {
                      columnSearchEnabled  &&
                        <div className='relative w-[60%] flex flex-col justify-center items-center'>
                          <input type="text"
                          onFocus={() => setUnderlineActive(true)}
                          onBlur={() => setUnderlineActive(false)}
                          className='w-full focus:outline-none p-1 mt-2 text-xs font-light border-none' placeholder='Filter by Company Name / GST Number / State' />
                          <div className={`underline-anim absolute ${underlineActive ? 'active' : ''}`}></div>
                          <div className='cursor-text'>
                            <Tooltip title="Clear filter" arrow={true} placement='right' enterDelay={200} slotProps={{tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, arrow:{sx:{ color:"#323232"}}}}>
                              <RxCross1 className='absolute right-1 top-4' size={10} color='#4B5563' />
                            </Tooltip>
                          </div>
                        </div>
                      }
                  </div>
                </th>
                <th style={{borderRight: '0px', width: '260px', minWidth: '200px' }}>Actions</th>
              </tr>
            </thead>

            {/* Actual data */}
            <tbody>
              {
                dummyData.length === 0? 
                  <tr>
                    <td colSpan={10} className='py-96'>There are no records to display</td>
                  </tr>
                  :
                  dummyData.map((item) => {
                    return (
                      <tr key={item.srNo} className='bg-[#F8F8F8]'>
                        <td>{item.srNo}</td>
                        <td>{item.companyName}</td>
                        <td style={{borderRight: '0px'}} className='flex gap-12 justify-center items-center'>
                          {
                            item.actions.map(action => (
                              <Button
                                key={`${item.srNo}-${action.label}`} 
                                onClick={() => action.handler(item.srNo)}
                                variant="contained"
                                color={action.color}
                              >
                                {action.label}
                              </Button>
                            ))
                          }
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default CompanySettings;