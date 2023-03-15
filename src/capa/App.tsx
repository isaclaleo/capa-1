import React, {useState} from 'react';
import Card from './components/card/card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from './components/button/button';
import TextField from './components/text-field/textfield';
import "./App.css"


function App() {
  const [answer, setAnswer] = useState<string>("");
  const [isPalindromo, setPalindromo] = useState<string>("")

  const palindromos = (word: string) => {
    const answer = word.split("").reverse().join("")
    
    return answer ===  word ? 
    "Espalindromo" :
    "No es palindromo"
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleOnclick = () => {
    const isPalindromo = palindromos(answer)
    setPalindromo(isPalindromo)
  }


  

  return (
    <div className="app">
      <div className="app2">
        <Card className="cards">
          <div className='cons'>
            <CardContent className="content">
              <div className='text'>
                <TextField
                  label="Ingresa frase o palabra" 
                  className='input'
                  variant="outlined" 
                  onChange={handleChange}
                    />
                  
                </div>
                <div className='text'>
                <TextField
                className='input'
                label="Respuesta"
                value={isPalindromo}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                onClick={handleOnclick}
                >
                Comprobar
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
