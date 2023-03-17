import React, { useState } from 'react';
import Card from '../../components/card/card';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TexField from '../../components/text-field/textfield';

import './exercise4.css'

function PositiveInteger() {
    const [integerNums, setIntegerNums] = useState<number[]>([])
    const [answe, setAnswer] = useState<number>()

    const intergerNums = () => {
        
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
                        />
                    </div>
                    <div className='text-field-2'>
                        <TexField
                        label="Answer"
                        className=''
                        variant='outlined'
                        />
                    </div>
                    <Button onClick={() => {}}>
                        Positive Integer
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export  default PositiveInteger;