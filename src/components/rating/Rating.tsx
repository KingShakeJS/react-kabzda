import React from "react";

export type RaringValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPT = {
    value: RaringValueType
    onClick: (value: RaringValueType) => void
}
export const Rating = (props: RatingPT) => {

    return (
        <div>
            <Star
                selected={props.value > 0}
                onClick={()=>props.onClick(1)}

            />
            <Star
                selected={props.value > 1}
                onClick={()=>props.onClick(2)}


            />
            <Star
                selected={props.value > 2}
                onClick={()=>props.onClick(3)}


            />
            <Star
                selected={props.value > 3}
                onClick={()=>props.onClick(4)}


            />
            <Star
                selected={props.value > 4}
                onClick={()=>props.onClick(5)}


            />
        </div>
    );

};

type StarPT = {
    selected: boolean
    onClick: () => void

}
const Star = (props: StarPT) => {


    return (
        <span
            onClick={props.onClick}
        >
                  {props.selected
                      ? <b>star </b>
                      : 'star '
                  }
            </span>
    )


};