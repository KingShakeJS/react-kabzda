import React from "react";

type AccordionPT = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
export const Accordion = (props: AccordionPT) => {


    return (

        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={() => props.onChange()}
            />
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    );
};

// ////////////////////////////////////////////////////////////////////////

type AccordionTitlePT = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePT) => {
    return (
        <h3
            onClick={props.onChange}
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