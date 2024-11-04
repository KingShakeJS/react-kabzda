import React from "react";


export type itemType = {
    title: string
    value: any
}

type AccordionPT = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick: (value: string) => void

}
export const Accordion = (props: AccordionPT) => {


    return (

        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={() => props.onChange()}
            />
            {
                !props.collapsed && <AccordionBody
                    onClick={props.onClick}
                    items={props.items}
                />
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

type AccordionBodyPT = {
    items: itemType[]
    onClick: (value: string) => void
}
const AccordionBody = (props: AccordionBodyPT) => {
    return (
        <ul>
            {
                props.items.map((item, i) => <li
                    onClick={() => {
                        props.onClick(item.value)
                    }}
                    key={i}
                >{item.title}</li>)
            }
        </ul>
    );
};