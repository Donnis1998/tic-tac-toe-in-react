import React from 'react'

export default function Square({ state, onClick }) {
    return (
        <span className="square" onClick={onClick} >{state}</span>
    )
}
