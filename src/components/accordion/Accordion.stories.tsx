import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {Accordion, itemType} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = action('нажато')

export const Collapsed = () => {

    const [items, setItems] = useState<itemType[]>([
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ])
    const callback = action('нажфто')
    return (
        <Accordion
            collapsed={true}
            titleValue={'Collapsed Accordion'}
            onChange={callback}
            items={items}
            onClick={callback}

        />
    )
}

export const UnCollapsed = () => {

    const [items, setItems] = useState<itemType[]>([
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ])

    return (
        <Accordion
            collapsed={false}
            titleValue={'UnCollapsed Accordion'}
            onChange={callback}
            items={items}
            onClick={callback}

        />
    )
}

export const ChangeAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const [items, setItems] = useState<itemType[]>([
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ])

    return (
        <Accordion
            collapsed={collapsed}
            titleValue={'Change Accordion'}
            onChange={() => setCollapsed(!collapsed)}
            items={items}
            onClick={callback}
        />
    )
}