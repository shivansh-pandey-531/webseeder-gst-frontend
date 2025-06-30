import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // For the '...' icon
import FilterListIcon from '@mui/icons-material/FilterList'; // For filter icon

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
      <IconButton onClick={handleClick} size="small">
        <MoreVertIcon fontSize="small" />
      </IconButton>

      {/* The menu component */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <FilterListIcon sx={{ mr: 1 }} />
          Clear sort
        </MenuItem>
        <MenuItem onClick={handleClose}>Sort by Company Name ascending</MenuItem>
        <MenuItem onClick={handleClose}>Sort by Company Name descending</MenuItem>
        <MenuItem onClick={handleClose}>Clear filter</MenuItem>
        <MenuItem onClick={handleClose}>Filter by Company Name</MenuItem>
        <MenuItem onClick={handleClose}>Reset column size</MenuItem>
        <MenuItem onClick={handleClose}>Hide Company Name column</MenuItem>
        <MenuItem onClick={handleClose}>Show all columns</MenuItem>
      </Menu>
    </div>
  );
};

export default ColumnActionsMenu;