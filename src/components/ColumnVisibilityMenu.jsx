import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { TfiLayoutColumn3Alt } from "react-icons/tfi";


const ColumnVisibilityMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [columnVisibility, setColumnVisibility] = useState({
    'Company Name': true,
    'GSTR-1/IFF Status': true,
    'GSTR-3B Status (Beta)': true,
    'GSTR-9': true,
    'GSTR-9C': true,
  });

  // Helper to check if all columns are visible
  const allVisible = Object.values(columnVisibility).every(Boolean);
  // Helper to check if all columns are hidden
  const allHidden = Object.values(columnVisibility).every(v => !v);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (columnName) => {
    setColumnVisibility(prev => ({
      ...prev,
      [columnName]: !prev[columnName]
    }));
  };
  
  const handleToggleAll = (showAll) => {
    const newVisibility = Object.fromEntries(
      Object.keys(columnVisibility).map(key => [key, showAll])
    );
    setColumnVisibility(newVisibility);
  };

  const open = Boolean(anchorEl);

return (
    <div
        className='flex items-center justify-center w-8 h-8 rounded-sm hover:text-[#1773EA] hover:bg-[#DCEAFC] cursor-pointer group'
    >
        {/* Button to open the menu */}
        <Tooltip
            title="Show/Hide columns"
            arrow={true}
            enterDelay={200}
            slotProps={{
                tooltip: { sx: { bgcolor: "#323232", padding: '10px', fontSize: "13px" } },
                arrow: { sx: { color: "#323232" } }
            }}
        >
            <IconButton
                onClick={handleClick}
                size="small"
                disableRipple
                disableFocusRipple
                sx={{
                    color: "inherit",
                    backgroundColor: "transparent !important",
                    "&:hover": {
                        backgroundColor: "transparent !important",
                        color: "inherit"
                    }
                }}
            >
                <TfiLayoutColumn3Alt fontSize="medium" className="text-inherit" />
            </IconButton>
        </Tooltip>
        
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span className={`font-medium cursor-pointer ${allHidden ? 'text-[#BDBDBD]' : 'text-[#267ED4]'}`} onClick={() => handleToggleAll(false)}>HIDE ALL</span>
                    <span className={`font-medium cursor-pointer ${allVisible?  'text-[#BDBDBD]' : 'text-[#267ED4]'}`} onClick={() => handleToggleAll(true)}>SHOW ALL</span>
                </div>
                <div className='w-full h-[1px] bg-gray-400 mb-2'></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {Object.keys(columnVisibility).map(column => (
                        <FormControlLabel
                            key={column}
                            control={
                                <Switch
                                    checked={columnVisibility[column]}
                                    onChange={() => handleToggle(column)}
                                />
                            }
                            label={column}
                        />
                    ))}
                </div>
            </div>
        </Popover>
    </div>
);
};

export default ColumnVisibilityMenu;