
import * as React from 'react';
import {Clock} from "./Clock";

export default {
    title:'Clock Stories',
    component: Clock
}
export const BaseDigitalExample = () => {
    return (
        <div>
            <Clock mode={'digital'} />
        </div>
    );
};


export const BaseAnalogExample = () => {


    return (
        <div>
            <Clock mode={'analog'} />
        </div>
    );
};

