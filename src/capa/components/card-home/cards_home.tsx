import React from 'react';
import Card from '@mui/material/Card';
import CardActions  from '@mui/material/CardActions';
import CardContent  from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../button/button';


export type cardsHomeProps = {
  children: React.ReactNode
  className: string
  onClick: () => void
  title: string
  content: string
  img: string
}

function Cards_Home({
  onClick,
  className,
  title,
  content,
  img,
  ...props
}: cardsHomeProps) {
  return (
    <div className=''>
      <Card 
      className=''
      {...props}
      >
        <CardMedia
        image=''
        {...props}
        />
        <div className=''>
          <CardContent
          className=''
          {...props}
          >
            <div className=''>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </CardContent>
          <CardActions className=''>
            <Button 
            onClick={() => {}}
            >
              {content}
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  )
}

export default Cards_Home;