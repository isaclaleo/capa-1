import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../button/button';
import TexField from '../text-field/textfield';

function card() {
  return (
    <Card className='card'>
      <p></p>
      <CardContent>
        <div className='text'>
          <TexField 
          >

          </TexField>
        </div>
      </CardContent>
      <CardActions>
      <Button />
      </CardActions>
    </Card>
  )
}

export default card;