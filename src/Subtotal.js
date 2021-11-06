import { Button, Checkbox } from '@mui/material'
import React from 'react'
import './Subtotal.css';

function Subtotal() {
    return (
        <div className="subtotal">
            <p>SubTotal (0 items) <strong>0</strong></p>
            <small className="subtotal--gift">
                <input type="Checkbox" /> This order contains a gift
            </small>

            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
