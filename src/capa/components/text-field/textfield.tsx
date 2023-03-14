import React from 'react';
import Box from '@mui/material/Box';
import { TextField, TextFieldProps} from '@mui/material';

export type InputProps = TextFieldProps & {
  label: string;
}

function texField({ label, ...props} : InputProps) {
  return (
    <Box
    component="form"
    noValidate
    autoComplete='off'
    >
      <div className=''>
        <TextField
          label={label}
          variant="outlined"
          size="small"
          multiline
          maxRows={4}
          {...props}
        />
      </div>
    </Box>
  )
};

export default texField;