import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box'; // For layout if needed, though not strictly for the select menu itself


const options = [
  { label: 'Apex Enterprises', id: 1 },
  { label: 'NextGen Pvt Ltd.', id: 2 },
  { label: 'Synergy Corp', id: 3 },
  { label: 'Green Leaf Ventures', id: 4 },
  { label: 'Global Corp', id: 5 },
  // Add more dummy data as needed
];

function CustomSelectMenu({placeholder}) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');


  return (
    <Box sx={{ width: 300, margin: '10px' }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        getOptionLabel={(option) => option.label}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder} // Placeholder text
            variant="outlined" // Use outlined variant for the border style
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px', // Rounded corners for the input
                fontSize: '14px', // Smaller font size for the input text
                padding: '0 8px', // Adjust padding inside the input
                minHeight: '40px', // Ensure a minimum height for the input

                '& fieldset': {
                  borderColor: '#C5C5C5', // Default border color (matching your table borders)
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: '#1773EA', // Border color on hover (blue from your app)
                  borderWidth: '1px',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1773EA', // Border color when focused
                  borderWidth: '2px', // Slightly thicker when focused for emphasis
                },
              },
              '& .MuiInputBase-input': {
                  padding: '4px 0 !important', // Adjust text padding to vertically center
              },
              '& .MuiAutocomplete-endAdornment': { // Adjust dropdown icon position
                top: 'calc(50% - 0px)', // Vertically center the dropdown icon
              }
            }}
          />
        )}

        // Styles for the dropdown paper and listbox
        ListboxProps={{
          sx: {
            padding: '0', // Remove default listbox padding
            '& .MuiAutocomplete-option': {
              fontSize: '14px', // Font size for list items
              padding: '8px 12px', // Padding for list items
              '&.Mui-focused': {
                backgroundColor: '#DCEAFC', // Background color for focused item
                color: '#1773EA', // Text color for focused item
              },
              '&[aria-selected="true"]': {
                backgroundColor: '#DCEAFC', // Background for selected item
                color: '#1773EA',
              },
              '&[aria-selected="true"].Mui-focused': {
                backgroundColor: '#DCEAFC', // Ensure focused selected item has same background
                color: '#1773EA',
              },
            },
          },
        }}
        PaperComponent={({ children }) => (
          <Box sx={{ 
            border: '1px solid #C5C5C5', // Border around the dropdown menu
            borderRadius: '8px', // Rounded corners for the dropdown menu
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
            mt: 0, // Margin top from the input
            overflow: 'hidden', // Ensure content stays within border radius
            backgroundColor: 'white'
         }}>
            {children}
          </Box>
        )}
      />
    </Box>
  );
}

export default CustomSelectMenu;