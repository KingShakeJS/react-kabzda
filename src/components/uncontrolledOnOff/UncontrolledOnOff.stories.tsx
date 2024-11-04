import * as React from 'react';
import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
}

export const UncontrolledOn = () => {
  return (
      <UncontrolledOnOff
          onChange={()=>{}}
          defaultOn={true}
      />
  )
}
export const UncontrolledOff = () => {
    return (
        <UncontrolledOnOff
            onChange={()=>{}}
            defaultOn={false}
        />
    )
}

export const DefaultInputValue = () =>{
    return(
        <input
            type="text"
            defaultValue={'yo'}
        />

    )
}