import * as React from 'react';
import {useMemo, useState} from "react";

export default {
    title: 'useSate'
}
const generateData = () => {
    console.log('generateData')
    return 32423423423
}

export const Example1 = () => {
    console.log('Example1')
    // const init =useMemo( generateData,[])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        console.log('changer')
      return state + 1
    }

    return (
        <div>
            <button
                onClick={() => setCounter(changer)}
            >+
            </button>
            {counter}
        </div>
    )
}