import * as React from 'react';
import Button  from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack  from '@mui/material/Stack';
import "./button.css"

function button() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant='contained' startIcon={<SendIcon />}>
        Sent
      </Button>
    </Stack>
  )
}

export default button;
