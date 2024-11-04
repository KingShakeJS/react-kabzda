// @flow
import * as React from 'react';
import {useState} from "react";
import {RaringValueType} from "../rating/Rating";

type Props = {
    defaultValue?: RaringValueType
    onChange: (value: RaringValueType) => void
};
export const UncontrolledRating = (props: Props) => {
    const [value, setValue] = useState<RaringValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star
                selected={value > 0}
                setValue={()=> {
                    setValue(1)
                    props.onChange(1)
                }}
                value={1}
            />

            <Star
                selected={value > 1}
                setValue={()=> {
                    setValue(2)
                    props.onChange(2)
                }}
                value={2}
            />

            <Star
                selected={value > 2}
                setValue={()=> {
                    setValue(3)
                    props.onChange(3)
                }}
                value={3}
            />

            <Star
                selected={value > 3}
                setValue={()=> {
                    setValue(4)
                    props.onChange(4)
                }}
                value={4}
            />

            <Star
                selected={value > 4}
                setValue={()=> {
                    setValue(5)
                    props.onChange(5)
                }}
                value={5}
            />

        </div>
    );

};

type StarPT = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}
const Star = (props: StarPT) => {

    return (
        <span
            onClick={() => props.setValue(props.value)}
        >
                  {props.selected
                      ? <b>star </b>
                      : 'star '
                  }
        </span>
    )
};