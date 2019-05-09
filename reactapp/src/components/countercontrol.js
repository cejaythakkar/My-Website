import React from 'react'

export default function CounterControl(props) {
  return (
    <div>
        <button onClick={() => props.clickHandler(props.value)}>{`${props.label} ${(props.value)?props.value:''}`}</button>
    </div>
  )
}
