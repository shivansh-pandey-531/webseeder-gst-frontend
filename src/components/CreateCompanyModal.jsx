import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from '@mui/material';


const CreateCompanyModal = ({open, onClose}) => {

    //   const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [groupName, setGroupName] = useState('');

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Button to open the modal */}
      {/* <Button variant="contained" onClick={handleOpen}>
        Open Create Company Modal
      </Button> */}

      {/* The Dialog/Modal component */}
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason === "backdropClick") return;
          onClose(event, reason);
        }}
        PaperProps={{
          sx: {
            width: 800,           // or '600px' or any CSS value
            maxWidth: '90vw',     // responsive max width
            height: 422,          // or '500px'
            maxHeight: '90vh',    // responsive max height
          }
        }}
      >
        <DialogTitle sx={{backgroundColor: "#ECECEC"}}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              Create Company
            </Grid>
            <Grid item>
              <div className='bg-white border border-solid border-[#686868] rounded-md hover:bg-[#F8F8F8]'>
                <IconButton aria-label="close" onClick={onClose} sx={{
                    color: "inherit",
                    backgroundColor: "transparent !important",
                    "&:hover": {
                        backgroundColor: "transparent !important",
                        color: "inherit"
                    }
                }}>
                  <CloseIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </DialogTitle>


        <DialogContent dividers sx={{ pb: 0 }}>
          <Grid container spacing={3} columnSpacing={4.3}>
            <Grid item xs={12} sm={6}>
              <div className='mb-1 font-medium'>Company GSTIN<span className='text-red-600'>*</span></div>
              <TextField
                required 
                fullWidth 
                // label="Company GSTIN" 
                placeholder="Enter GSTIN" 
                helperText={
                  <span className='font-medium -ml-3 text-black'>
                    Enter your 15 digit GSTIN number
                  </span>
                }
                InputProps={{
                  sx: { height: 30, width: 350, fontSize: 13 } // height and horizontal padding
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='mb-1 font-medium'>Display Name<span className='text-red-600'>*</span></div>
              <TextField 
                required 
                fullWidth 
                // label="Display Name" 
                placeholder="Enter Display Name" 
                helperText={
                  <span
                    style={{
                      fontWeight: 500,
                      marginLeft: '-12px',
                      color: 'black',
                      maxWidth: '21rem',
                      display: 'inline-block',
                    }}
                  >
                    Business which registered to GST, need to display name type here.
                  </span>
                }
                InputProps={{
                  sx: { height: 30, width: 350, fontSize: 13 } // height and horizontal padding
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='mb-1 font-medium'>GST Portal Username</div>
              <TextField 
                fullWidth 
                // label="GST Portal Username" 
                placeholder="Enter Username"
                InputProps={{
                  sx: { height: 30, width: 350, fontSize: 13 } // height and horizontal padding
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='mb-1 font-medium'>GST Portal Password</div>
              <TextField
                fullWidth
                // label="GST Portal Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                InputProps={{
                  sx: { height: 30, width: 350, fontSize: 13 }, // height and horizontal padding
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff sx={{ fontSize: 16 }} /> : <Visibility sx={{ fontSize: 16 }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} style={{ marginBottom: 0 }}>
              <div className='mb-1 font-medium'>Group Name</div>
              <FormControl fullWidth>
                {/* <InputLabel id="group-name-label" sx={{ height: 30, fontSize: 13 }}>Select Group Name</InputLabel> */}
                <Select
                  labelId="group-name-label"
                  value={groupName}
                  // label="Select Group Name"
                  onChange={(e) => setGroupName(e.target.value)}
                  sx={{ height: 30, width: 350, fontSize: 13 }} // Move sx here for Select
                  displayEmpty
                >
                  <MenuItem value="">
                    <div className='text-gray-400 font-light tracking-tight'>Select Group Name</div>
                  </MenuItem>
                  <MenuItem value="Group A">Group A</MenuItem>
                  <MenuItem value="Group B">Group B</MenuItem>
                  <MenuItem value="Group C">Group C</MenuItem>
                  <MenuItem value="Group D">Group D</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>

        <Grid container justifyContent="space-between" spacing={2} sx={{ p: 2 }}>
          <Grid item>
            <Button variant="outlined" color='inherit' onClick={onClose}>Cancel</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Create</Button>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default CreateCompanyModal;