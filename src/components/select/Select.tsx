import * as React from 'react';
import {KeyboardEvent, useEffect, useState} from 'react';
import {itemType} from "../accordion/Accordion";
import s from './Select.module.css'

type SelectPT = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
};
export const Select = (props: SelectPT) => {
    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredEl)

    const [active, setActive] = useState(true)
    const [hoveredEl, setHoveredEl] = useState(props.value)




    useEffect(() => {
        setHoveredEl(props.value)
    }, [props.value])


    const toggleActive = () => {
        setActive(!active)
    }
    const onItemClick = (value: string) => {
        props.onChange(value)
        toggleActive()
    }

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredEl) {
                    const pretendent = e.key === 'ArrowDown'
                         ? props.items[i+1]
                         : props.items[i-1]
                    if (pretendent){
                        props.onChange(pretendent.value)
                        return
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)

            }
        }


        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }


    }

    return (
        <>


            <div
                tabIndex={0}
                className={`${s.select}`}
                onKeyUp={onKeyPress}>
                        <span className={s.main}
                              onClick={toggleActive}
                        >{selectedItem && selectedItem.title}
                        </span>
                {
                    active && <div className={s.options}>
                        {
                            props.items.map(item => (
                                <div

                                    onMouseEnter={() => {
                                        setHoveredEl(item.value)
                                    }}
                                    className={`${s.option} ${hoveredItem === item ? s.selected : ''}`}
                                    key={item.value}
                                    onClick={() => {
                                        onItemClick(item.value)
                                    }}
                                >{item.title}</div>
                            ))
                        }
                    </div>

                }


            </div>
        </>
    );
};