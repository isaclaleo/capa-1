import React, { useState } from 'react';
import Card from '../../components/card/card';
import CardContent from '@mui/material/CardContent';
import Button from '../../components/button/button';
import TexField from '../../components/text-field/textfield';

import './exercise3.css'

function  TargetNums() {
    const [isArray, setIsArray] = useState<number[]>([])
    const [isTarget, setTarget] = useState<number>()
    const [answer, setAnswer] = useState<number[]>([])

    const targetNums = (nums: number[], istarget: number) => {
        const maps: any ={}
        for (let i = 0; i < nums.length; i++) {
            const dife = istarget - nums[i];

            if (dife in maps) {
               return [maps[dife], i];     
            }
            maps[nums[i]] = i;
        }

        return [];
    }

    const handleIsArray = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isArray = event.target.value
        .split(',')
        .map((arr) => Number(arr.trim()))
        setIsArray(isArray);
     }

     const handleTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isTarget = Number(event.target.value)
        setTarget(isTarget)
     }

     const handleOnclik = () => {
        if (isArray && isTarget) {
            const answer = targetNums(isArray, isTarget);
            setAnswer(answer)
        }
     }




    return (
        <div className='target'>
            <Card className='card-target'>
                <CardContent className='content'>
                    <div className='text-field-1'>
                        <TexField
                        label="Nums of arrayas"
                        className=''
                        variant='outlined'
                        onChange={handleIsArray}
                        value={isArray.join(",")}
                        />
                    </div>
                    <div className='text-field-2'>
                        <TexField
                        label="Target"
                        className=''
                        variant='outlined'
                        onChange={handleTarget}
                        />
                    </div>
                    <div className='text-field-3'>
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

export default TargetNums;