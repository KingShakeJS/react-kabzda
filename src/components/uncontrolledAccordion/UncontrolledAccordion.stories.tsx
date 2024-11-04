import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";



export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
}


export const Uncontrolled = () => {
    return (
        <UncontrolledAccordion
            titleValue={'Collapsed Accordion'}
        />
    )
}

