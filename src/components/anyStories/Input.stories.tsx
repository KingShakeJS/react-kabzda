import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useRef, useState} from "react";

export default {
    title: 'input stories'
}

export const UncontrolledInput = () => {
    return (
        <input type="text"/>
    )
}

export const UncontrolledInputWithTrackingValue = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <input
                type="text"
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <p>{value}</p>
        </>
    )
}
export const GetValueOfUncontrolledInputByBtmPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <input
                ref={inputRef}
                type="text"
            />
            <button
                onClick={() => {
                    const el = inputRef.current as HTMLInputElement
                    setValue(el.value)
                }}
            >отправить
            </button>
            <p>{value}</p>
        </>
    )
}

export const ControlledInputWithFixedValue = () => {
    return (
        <input
            type="text"
            value={'it-incubator'}
        />
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return (
        <>
            <input
                type="text"
                value={parentValue}
                onChange={(e) => {

                    setParentValue(e.currentTarget.value)
                }}
            />
        </>
    )
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    return (
        <>
            <input
                type="checkbox"
                checked={parentValue}
                onChange={(e) => {
                    setParentValue(e.currentTarget.checked)
                }
                }
            />
        </>
    )
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return (
        <>
            <select
                value={parentValue}
                onChange={(e) => {
                    setParentValue(e.currentTarget.value)
                }}
            >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

            </select>
        </>
    )
}