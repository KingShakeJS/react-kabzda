// @flow 
import * as React from 'react';
import {itemType} from "../accordion/Accordion";

type SelectPT = {
    value: any
    onChange: (value: any) => void
    items: itemType[]
};
export const Select = (props: SelectPT) => {
    return (
        <select value={props.value}>
            {
                props.items.map(item => (
                    <option key={item.value} value={item.value}>{item.title}</option>
                ))
            }
        </select>
    );
};