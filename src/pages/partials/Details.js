import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Details() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{padding:"40px"}}
    >
  
      <TextField  id="standard-basic" label="Booking Name" variant="standard" />
    </Box>
  );
}
