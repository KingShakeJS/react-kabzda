import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff
}

const callback =  action('попытка сделвть')

export const ON = () => {
    return (
        <OnOff
            setOn={callback}
            on={true}
        />
    )
}

export const OFF = () => {
    return (
        <OnOff
            setOn={callback}
            on={false}
        />
    )
}

export const ChangeOnOff = () => {
    const [on, setOn] = useState<boolean>(true)
    return (
        <OnOff
            setOn={setOn}
            on={on}
        />
    )
}
