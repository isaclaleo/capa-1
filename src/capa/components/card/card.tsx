import React, {useState} from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../button/button';
import TexField from '../text-field/textfield';
import './card.css'

export type cardProps = {
  className: string
}

const onclik = () => {
  return console.log("hola")
}


function card({className, ...props }: cardProps) {;

  return (
    <Card
     className="card"
     {...props}
     >
      <div className='cons'>
      <CardContent className='content'>
        <div className='text'>
          <TexField
          label="Ingresa palindromo" 
          className='input'
          variant="standard"
          />
          <TexField
          className='input'
          label="Comprobacion"
          />
        </div>
      </CardContent>
      <CardActions className='action'>
      <Button
      onClick={() => onclik()}
      >
        hola
      </Button>
      </CardActions>
      </div>
    </Card>
  )
}

export default card;