// @flow
import * as React from 'react';

type Props = {

};
export const UncontrolledRating = (props: Props) => {
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
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