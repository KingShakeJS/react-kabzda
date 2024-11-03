import * as React from 'react';
import {useState} from "react";

type UncontrolledOnOffPT = {
    onChange: (value: boolean) => void
};


export const UncontrolledOnOff = (props: UncontrolledOnOffPT) => {

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON
            </div>
            <div style={offStyle} onClick={offClicked}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};