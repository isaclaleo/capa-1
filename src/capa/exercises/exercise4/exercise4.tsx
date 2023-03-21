import React, { useState } from 'react';
import Card from '../../components/card/card';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TexField from '../../components/text-field/textfield';

import './exercise4.css'

function PositiveInteger() {
    const [numss, setNums] = useState<number[]>([]);
    const [answer, setAnswer] = useState<number>(0);

    const positiveNums = (numss: number[]) => {
        const split = numss.toString().split("")
        let sum =0
        for (let i = 0; i < split.length; i++) {
            const element = split.map(Number);
            let oposit = element[i] * - 1;
            i % 2 === 0 ?
            sum += element[i] :
            sum += oposit            
        }
        return sum
    }

    const handleNumss = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numss = event.target.value
        .split(',')
        .map((nums) => Number(nums.trim()))
        setNums(numss)
    }

    const handleOnclik = () => {
        if (numss !== undefined) {
            const result = positiveNums(numss);
            setAnswer(result);
        }
    }
    return (
        <div className='positive'>
            <Card className='card-posiive'>
                <CardContent className='content'>
                    <div className='text-field-1'>
                        <TexField
                        label="Numeros"
                        className=''
                        variant='outlined'
                        onChange={handleNumss}
                        />
                    </div>
                    <div className='text-field-2'>
                        <TexField
                        label="Answer"
                        className=''
                        variant='outlined'
                        value={answer}
                        />
                    </div>
                    <Button onClick={handleOnclik}>
                        Result
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export  default PositiveInteger;