import React, { useState } from 'react';
import Card from '../../components/card/card';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TextField from '../../components/text-field/textfield';

import './exercise2.css'

function StrictlyIncreasingOrder() {
  const [arrayOrder, setArrayOrde] =  useState<number[]>([]);
  const [missInteger, setMissInteger] = useState<number>();
  const [answer, setAnswer] = useState<number>();

const ordenStrinctly = (arr: number[], ka: number) => {
  let prev = 0
  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - prev - 1;
    if (ka > diff) ka -= diff;
    else return prev + ka;
    prev = arr[i];    
  }
  return prev + ka
};

const handleArrayOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arrayOrder = event.target.value
    .split(',')
    .map((orde) => Number(orde.trim()))
    setArrayOrde(arrayOrder);
};

const handleMissInteger = (event: React.ChangeEvent<HTMLInputElement>) => {
   const  missInteger = Number(event.target.value)
   setMissInteger(missInteger);
};

const handleOnclick = () => {
  if (arrayOrder && missInteger) {
    const answer = ordenStrinctly(arrayOrder, missInteger);
    setAnswer(answer)
  }
};

  return (
    <div className='order'>
      <Card className='card-order'>
        <CardContent className='content'>
          <div className='text-filed-1'>
            <TextField
            label="Strictly Increasing Order"
            className=''
            variant='outlined'
            onChange={handleArrayOrder}
            value={arrayOrder.join(",")}
            />
          </div>
          <div className='text-filed-2'>
            <TextField
            label="Possitive integer missing"
            className=''
            variant='outlined'
            onChange={handleMissInteger}
            />
          </div>
          <div className='text-filed-3'>
            <TextField 
            label="Answer"
            className=''
            variant='outlined'
            value={answer}
            />
          </div>
          <Button onClick={handleOnclick}>
            Comporbar
          </Button>
        </CardContent>
      </Card>
      </div>
      );
}

export default StrictlyIncreasingOrder;