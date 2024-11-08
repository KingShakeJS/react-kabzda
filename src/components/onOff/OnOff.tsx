import * as React from 'react';
import {useState} from "react";

type OnOffPT = {
    on: boolean
    setOn: (value: boolean) => void
};


export const OnOff = (props: OnOffPT) => {


    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};