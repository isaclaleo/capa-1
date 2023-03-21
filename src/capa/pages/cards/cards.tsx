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
          Palindormo
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Given a string to say if its Palindrome or not 
              <h4>Example</h4>
              <li>Input: Oso</li>
              <li>Output: it is Palindrome or it is not Palindrome</li>
              <li>Explanation:A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards</li>
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
          Positive numbers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Given an array (arr) of positive integers sorted in a <strong>strictly increasing order,</strong> and an integer (k). Return the K <strong>positive</strong> integer that is <strong>missing</strong> from this array
          <h4>Example</h4>
          <li>Input: arr = [2,3,4,7,11 ], k = 5</li>
          <li>Output: 9</li>
          <li>Explanation: The missing positive integers are [1,5,6,8,9,10,12,13..] The 5 missing positive integer is 9</li>
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
          Indeces of two nums
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Given an array of integers (nums) and an integer (target), return indeces of the two numbers such that they add up to target. You may assume tha each inpt would have exactly one solution, and you may not use the same element twice.
          <h4>Example</h4>
          <li>Input: nums= [2,7,11,15], taget = 9</li>
          <li>Ouput: [0,1]</li>
          <li>Explanation: Because nums[0] + nums[1] == 9, we return [0,1]</li>
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
          Most significant digit 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You are given a positive integer (n) Each digit of (n) has a sing according to the following rules:
          <li>The <strong>most significant digit</strong> is assigned a positive sign</li>
          <li>Eacj other digit has an opposite sign to its adjacent digits</li>
          Return the sum of digits with their corresponding sign
          <li>Input: n = 521</li>
          <li>Output: 4</li>
          <li>Explanation: (+5) + (-2) + (+1) = 4</li>
        </Typography>
      </CardContent>
      <CardActions>
        <div className=''>
          <p>
            <Link to="exercise4"
            >
              Excersis 4
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