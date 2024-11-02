import React from "react";

type PageTitlePT = {
    title: string
}
export const PageTitle = (props: PageTitlePT) => {
    return (<h1>{props.title}</h1>)
};