import React from 'react'
import { useState } from 'react';

export default function IncDec() {

    const [change, setChange] = useState(0);

    const increamentFunction = () => setChange(change + 5);
    const decreamentFunction = () => setChange(change - 5);

    return (
        <div className="container">
            <h1 className="heading">Click</h1>

            <div>
                <button onClick={decreamentFunction}>-</button>

                <input value={change} />

                <button onClick={increamentFunction}>+</button>
            </div>

        </div>
    )
}
