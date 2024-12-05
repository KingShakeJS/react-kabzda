import * as React from 'react';
import {useEffect, useState} from "react";


type Props = {};
export const Clock = (props: Props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
                setDate(new Date())
            }, 1000)
       return ()=>{clearInterval(id)}

    }, [])

    const getTimeString = (number: number) => number < 10 ? `0${number}` : number

    return (
        <div>
            <span>{getTimeString(date.getHours())}</span>
            :
            <span>{getTimeString(date.getMinutes())}</span>
            :
            <span>{getTimeString(date.getSeconds())}</span>

        </div>
    );
};