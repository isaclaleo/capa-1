import * as React from 'react';
import Button  from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack  from '@mui/material/Stack';
import "./button.css"

export type buttonsProps = {
  onClick: () => void
  children: React.ReactNode;
}

function button({
  onClick,
  ...props
}: buttonsProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
      variant='contained' 
      startIcon={<SendIcon />}
      onClick={onClick}
      {...props}
      />
    </Stack>
  )
}

export default button;
