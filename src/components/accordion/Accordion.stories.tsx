import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = action('нажато')

export const Collapsed = () => {
    return (
        <Accordion
            collapsed={true}
            titleValue={'Collapsed Accordion'}
            onChange={callback}
        />
    )
}

export const UnCollapsed = () => {
    return (
        <Accordion
            collapsed={false}
            titleValue={'UnCollapsed Accordion'}
            onChange={callback}
        />
    )
}

export const ChangeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <Accordion
            collapsed={collapsed}
            titleValue={'Change Accordion'}
            onChange={() => setCollapsed(!collapsed)}
        />
    )
}