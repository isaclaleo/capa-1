import React, {useState} from 'react';
import Card from '../../components/card/card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TextField from '../../components/text-field/textfield';
import "./exercise.css"


function Palindromo() {
  const [answer, setAnswer] = useState<string>("");
  const [isPalindromo, setPalindromo] = useState<string>("")

  const palindromos = (word: string) => {
    const phrase  = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    return phrase === phrase.split("").reverse().join("")
    
    // return answer ===  word ? 
    // "Espalindromo" :
    // "No es palindromo"
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleOnclick = () => {
    const result = palindromos(answer) ? "Es Palindromo" : "No es palindromo"
    setPalindromo(result)
  }


  

  return (
    <div className="app">
      <div className="app2">
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
      </div>
    </div>
  );
}

export default Palindromo;
