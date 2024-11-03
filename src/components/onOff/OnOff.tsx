import * as React from 'react';
import {useState} from "react";

type OnOffPT = {
    // on: boolean
};


export const OnOff = (props: OnOffPT) => {

    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>ON</div>
            <div style={offStyle} onClick={()=>setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};