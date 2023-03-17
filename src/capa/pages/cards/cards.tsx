import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import './cards.css'



function mediaCard() {

  return (
    <div className='flex-cards'>
    <Card>
    <div className='cards'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div className=''>
          <p>
            <Link to="exercise1"
            >
              Excersis 1
            </Link>
          </p>
        </div>
      </CardActions>
    </div>
    </Card>
    <Card>
    <div className='cards'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div className=''>
          <p>
            <Link to="exercise2"
            >
              Excersis 2
            </Link>
          </p>
        </div>
      </CardActions>
    </div>
    </Card>
    <Card>
    <div className='cards'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div className=''>
          <p>
            <Link to="exercise3"
            >
              Excersis 3
            </Link>
          </p>
        </div>
      </CardActions>
    </div>
    </Card>
    <Card>
    <div className='cards'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div className=''>
          <p>
            <Link to="exercise1"
            >
              Excersis 1
            </Link>
          </p>
        </div>
      </CardActions>
    </div>
    </Card>
    </div>
  );
}

export default  mediaCard;