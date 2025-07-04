import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';


// Define your desired default colors for *enabled* state fallback
const DEFAULT_PLACEHOLDER_COLOR = '#C5C5C5';
const DEFAULT_DROPDOWN_ICON_COLOR = '#888888';

// Define the specific colors for the *disabled* state
const DISABLED_PLACEHOLDER_COLOR = '#B3B3B3';
const DISABLED_BACKGROUND_COLOR = '#EFEFEF';


function CustomSelectMenu({
  placeholder,
  isDisabled = false,
  menuWidth,
  options,
  placeholderColor = DEFAULT_PLACEHOLDER_COLOR, // This now applies only when ENABLED (or if explicitly overridden)
  dropdownIconColor = DEFAULT_DROPDOWN_ICON_COLOR,
}) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');


  return (
    <Box sx={{ width: menuWidth, margin: '10px' }}>
      <Autocomplete
        disabled={isDisabled}
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
        sx={{ width: menuWidth }}
        noOptionsText="No options"
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                fontSize: '14px',
                padding: '0 8px',
                minHeight: '35px',
                maxHeight: '35px',

                '& fieldset': {
                  borderColor: '#C5C5C5',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: '#1773EA',
                  borderWidth: '1px',
                },
                '&.Mui-disabled:hover fieldset': {
                  borderColor: '#C5C5C5',
                  borderWidth: '1px',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1773EA',
                  borderWidth: '2px',
                },
                // --- Change: Apply specific disabled background color ---
                '&.Mui-disabled': {
                  backgroundColor: DISABLED_BACKGROUND_COLOR,
                },
              },
              '& .MuiInputBase-input': {
                padding: '4px 0 !important',
                // Placeholder color for ENABLED state (or if not disabled)
                '&::placeholder': {
                  color: placeholderColor,
                  opacity: 1,
                },
                // --- Change: Apply specific disabled placeholder color ---
                '&.Mui-disabled::placeholder': {
                  color: DISABLED_PLACEHOLDER_COLOR, // Specific color for disabled placeholder
                  WebkitTextFillColor: `${DISABLED_PLACEHOLDER_COLOR} !important`, // Force for WebKit
                  opacity: 1,
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                top: 'calc(50% - 0px)',
                '& .MuiSvgIcon-root': {
                  color: dropdownIconColor,
                },
              },
              // This rule styles the actual *typed text* in the disabled input
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'rgba(0, 0, 0, 0.6) !important', // Default faded text color for typed value
              }
            }}
          />
        )}

        ListboxProps={{
          sx: {
            padding: '0',
            '& .MuiAutocomplete-option': {
              fontSize: '14px',
              padding: '8px 12px',
              '&.Mui-focused': {
                backgroundColor: '#DCEAFC',
                color: '#1773EA',
              },
              '&[aria-selected="true"]': {
                backgroundColor: '#DCEAFC',
                color: '#1773EA',
              },
              '&[aria-selected="true"].Mui-focused': {
                backgroundColor: '#DCEAFC',
                color: '#1773EA',
              },
            },
            '& .MuiAutocomplete-noOptions': {
              color: '#888',
              fontStyle: 'italic',
              textAlign: 'center',
              padding: '12px 16px',
              fontSize: '14px',
            },
          },
        }}
        PaperComponent={({ children }) => (
          <Box sx={{
            border: '1px solid #C5C5C5',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            mt: 0,
            overflow: 'hidden',
            backgroundColor: 'white',
            fontSize: 14,
          }}>
            {children}
          </Box>
        )}
      />
    </Box>
  );
}

export default CustomSelectMenu;