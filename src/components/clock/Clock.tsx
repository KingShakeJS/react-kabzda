import * as React from 'react';
import {useEffect, useState} from "react";
import './AnalogClock.css'


type ClockProps = {
    mode?: 'analog' | 'digital'
};
const getTimeString = (number: number) => number < 10 ? `0${number}` : number

export const Clock = ({mode}: ClockProps) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }

    }, [])


    return (
        <div>
            {
                mode === 'digital'
                    ? <DigitalClockView date={date}/>
                    : <AnalogClockView date={date}/>
            }
        </div>
    );
};


type ClockViewPropsType = {
    date: Date
}
export const DigitalClockView = ({date}: ClockViewPropsType) => {

    return (
        <>
            <span>{getTimeString(date.getHours())}</span>
            :
            <span>{getTimeString(date.getMinutes())}</span>
            :
            <span>{getTimeString(date.getSeconds())}</span>
        </>
    )
}

export const AnalogClockView = ({date}: ClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={"clock"}>

            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>

        </div>
    )
}