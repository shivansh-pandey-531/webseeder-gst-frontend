import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // For the '...' icon
import { FaSort } from "react-icons/fa";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import { MdFilterListOff, MdFilterList } from "react-icons/md";
import { MdOutlineLoop } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { Tooltip } from '@mui/material';


const ColumnActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      {/* The button that opens the menu */}
      <Tooltip title="Column Actions"
        arrow={true} 
        placement='top' 
        enterDelay={200} 
        slotProps={{
          tooltip:{sx:{ bgcolor:"#323232", padding:'10px', fontSize:"13px" }}, 
          arrow:{sx:{ color:"#323232" }},
          popper: {sx:{ zIndex: 9999 }}
        }}
      >
        <IconButton onClick={handleClick} size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* The menu component */}
      <Menu className='flex flex-col gap-5'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      >

        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <FaSort color='#9CA3AF' />
          <p className='text-gray-400 text-xs'>Clear sort</p>
        </MenuItem>

        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <FaSortAlphaUp />
          <p className='text-xs'>Sort by Company Name ascending</p>
        </MenuItem>

        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <FaSortAlphaDown />
          <p className='text-xs'>Sort by Company Name descending</p>
        </MenuItem>

        <div className='w-full my-1 h-[0.05rem] bg-gray-400 flex justify-center'></div>
        
        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <MdFilterListOff color='#9CA3AF' />
          <p className='text-gray-400 text-xs'>Clear filter</p>
        </MenuItem>
        
        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <MdFilterList size={22} />
          <p className='text-xs'>Filter by Company Name</p>
        </MenuItem>

        <div className='w-full my-1 h-[0.05rem] bg-gray-400 flex justify-center'></div>
        
        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
        <MdOutlineLoop color='#9CA3AF' />
          <p className='text-gray-400 text-xs'>Reset column size</p>
        </MenuItem>
        
        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <IoMdEyeOff />
          <p className='text-xs'>Hide Company Name column</p>
        </MenuItem>
        
        <MenuItem onClick={handleClose} className='flex gap-4 items-center'>
          <PiSquaresFourFill color='#9CA3AF' />
          <p className='text-gray-400 text-xs'>Show all columns</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ColumnActionsMenu;