import React, { useState } from 'react';
import Card from '../../components/card/card';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TexField from '../../components/text-field/textfield';

import './exercise4.css'

function positiveInteger() {
    return (
        <div className='positive'>
            <Card className='card-posiive'>
                <CardContent className='content'>
                    <div className='text-field-1'>
                        <TexField
                        label="numeros"
                        className=''
                        variant='outlined'
                        />
                    </div>
                    <div className='text-field-2'>
                        <TexField
                        label="numeros"
                        className=''
                        variant='outlined'
                        />
                    </div>
                    <div className='text-field-3'>
                        <TexField
                        label="numeros"
                        className=''
                        variant='outlined'
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export  default positiveInteger;