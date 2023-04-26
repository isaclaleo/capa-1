import React, { useState } from 'react';
import Card from '../../../components/card/card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../../../components/button/button';
import TextField from '../../../components/text-field/textfield'; 
import { Link } from "react-router-dom";

import './exerceses1.css'

function Exercese1PAge() {

  const [answer, setAnswer] = useState<string>("");
  const [isPalindromo, setPalindromo] = useState<string>("")

  const palindromos = (word: string) => {
    const phrase = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return phrase === phrase.split("").reverse().join("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };
  
  const handleOnclick = () => {
    const result = palindromos(answer) ? "Es Palindromo" : "No es palindromo"
    setPalindromo(result)
  }

  return (
    <div className="">
      <h3>Palindromo</h3>
        <Card className="cards">
          <div className='cons'>
            <CardContent className="content">
              <div className='text'>
                <TextField
                  label="Write a Palindrome" 
                  className='input'
                  variant="outlined" 
                  onChange={handleChange}
                    />
                  
                </div>
                <div className='text'>
                <TextField
                className='input'
                label="Answer"
                value={isPalindromo}
                />
              </div>
              <CardActions>
                <Button
                  onClick={handleOnclick}
                  >
                  Result
                </Button>
              </CardActions>
            </CardContent>
          </div>
        </Card>
    <Link to="/">
    Home
    </Link>
    </div>
  )
}

export default Exercese1PAge;