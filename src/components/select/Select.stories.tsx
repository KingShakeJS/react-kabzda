import * as React from 'react';
import {Select} from "./Select";
import {useState} from "react";
import {itemType} from "../accordion/Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories',
    component: Select
}
const callback = action('нажато')

export const BaseExample = () => {
    const items = [
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ]

    const [value, setValue] = useState('sss')

    return (
        <Select
            value={value}
            items={items}
            onChange={setValue}
        />
    )
}

export const WithOutValue = () => {
    const [value, setValue] = useState<string | null>(null)
    const items = [
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ]
    return (
        <Select
            items={items}
            onChange={setValue}
            value={value}
        />
    )
}