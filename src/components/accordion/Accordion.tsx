import React from "react";

type AccordionPT = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPT) => {


    return (

        <div>
            <AccordionTitle title={props.titleValue}/>
            {
                !props.collapsed && <AccordionBody/>
            }
        </div>
    );
};

// ////////////////////////////////////////////////////////////////////////

type AccordionTitlePT = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePT) => {
    return (
        <h3>{props.title}</h3>
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