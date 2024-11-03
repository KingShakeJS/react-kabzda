// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {
    titleValue: string
};
export const UncontrolledAccordion = (props: Props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (

        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}
            />
            {
                !collapsed && <AccordionBody/>
            }
        </div>
    );
};

// ////////////////////////////////////////////////////////////////////////

type AccordionTitlePT = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePT) => {
    return (
        <h3
            onClick={props.onClick}
        >{props.title}</h3>
    );
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};