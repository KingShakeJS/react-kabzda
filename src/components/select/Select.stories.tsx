import * as React from 'react';
import {Select} from "./Select";
import {useState} from "react";
import {itemType} from "../accordion/Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories',
    component: Select
}

export const x = () => {
    const [items, setItems] = useState<itemType[]>([
        {value: 'aaa', title: '111'},
        {value: 'sss', title: '222'},
        {value: 'ddd', title: '333'},
        {value: 'fff', title: '444'},
    ])
    const callback = action('нажато')
    return (
        <Select
            value={'aaa'}
            items={items}
            onChange={callback}
        />
    )
}