import React from 'react'; 
import Card from '@mui/material/Card';

export type cardProps = {
  className: string
  children: React.ReactNode
}

// 


function card({className, ...props }: cardProps) {;

  return (
    <Card
     {...props}
     >
    </Card>
  )
}

export default card;