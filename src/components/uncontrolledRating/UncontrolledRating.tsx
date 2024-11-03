// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {

};
export const UncontrolledRating = (props: Props) => {
    const [value, setValue]=useState<number>(0)
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={()=>setValue(1)}>+</button>

            <Star selected={value > 1}/>
            <button onClick={()=>setValue(2)}>+</button>

            <Star selected={value > 2}/>
            <button onClick={()=>setValue(3)}>+</button>

            <Star selected={value > 3}/>
            <button onClick={()=>setValue(4)}>+</button>

            <Star selected={value > 4}/>
            <button onClick={()=>setValue(5)}>+</button>

        </div>
    );

};

type StarPT={
    selected: boolean
}
const Star = (props: StarPT) => {

    if (props.selected) {
        return (
            <span><b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        )
    }

};