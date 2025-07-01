import React, { useState, useEffect } from 'react'; // Import useEffect
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
  placeholderColor = DEFAULT_PLACEHOLDER_COLOR,
  dropdownIconColor = DEFAULT_DROPDOWN_ICON_COLOR,
}) {
  // Initialize 'value' state for default selection
  const [value, setValue] = useState(() => {
    if (placeholder === 'Operation' && options && Array.isArray(options) && options.length > 0) {
      // Find the option with id: 1 (assumed to be "All")
      const allOption = options.find(option => option.id === 1);
      return allOption || null; // Return it if found, otherwise null
    }
    return null; // Default: no option selected for other menus
  });

  // Controlled inputValue state to manage what's displayed in the TextField
  const [inputValue, setInputValue] = useState('');

  // Use useEffect to update inputValue whenever 'value' (selected option) or 'placeholder' changes
  useEffect(() => {
    if (value) {
      // If an option is selected, format inputValue based on 'placeholder'
      if (placeholder === 'Operation') {
        setInputValue(`Operation: ${value.label}`);
      } else {
        setInputValue(value.label); // For other menus, just display the option's label
      }
    } else {
      // If no option is selected, clear inputValue so placeholder can show
      setInputValue('');
    }
  }, [value, placeholder]); // Dependency array: re-run when value or placeholder changes

  return (
    <Box sx={{ width: menuWidth, margin: '10px' }}>
      <Autocomplete
        disableClearable // Prevents the 'X' icon from clearing the selection, reinforcing "select-only"
        disabled={isDisabled}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); // Update the selected value
          // The inputValue will be updated by the useEffect linked to 'value'
        }}
        // Provide inputValue to Autocomplete. It will use this as the source of truth for the input text.
        inputValue={inputValue}
        // IMPORTANT: We remove onInputChange from Autocomplete.
        // This means Autocomplete will not try to update its internal inputValue based on user typing
        // or other internal events, as we are explicitly controlling it via our useEffect.
        // This is crucial for a pure select menu experience.
        
        options={options}
        getOptionLabel={(option) => option.label}
        sx={{ width: menuWidth }}
        noOptionsText="No options"
        // Crucial for comparing objects in the options array
        isOptionEqualToValue={(option, val) => option.id === val.id}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
                ...params.inputProps,
                value: inputValue, // Explicitly set the TextField's display value to our controlled inputValue
                readOnly: true, // Make the input field read-only to disable typing
            }}
            placeholder={placeholder} // This placeholder will show only if inputValue is empty
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
                '&.Mui-disabled': {
                  backgroundColor: DISABLED_BACKGROUND_COLOR, // Disabled background
                },
              },
              '& .MuiInputBase-input': {
                padding: '4px 0 !important',
                '&::placeholder': {
                  color: placeholderColor,
                  opacity: 1,
                },
                '&.Mui-disabled::placeholder': {
                  color: DISABLED_PLACEHOLDER_COLOR, // Disabled placeholder color
                  WebkitTextFillColor: `${DISABLED_PLACEHOLDER_COLOR} !important`,
                  opacity: 1,
                },
                // Style for the read-only input text
                '&:read-only': {
                  cursor: 'pointer', // Indicate it's clickable like a select
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                top: 'calc(50% - 0px)',
                '& .MuiSvgIcon-root': {
                  color: dropdownIconColor,
                },
              },
              // This rule styles the actual *typed text* in the disabled input (less relevant now that it's readOnly)
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'rgba(0, 0, 0, 0.6) !important',
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