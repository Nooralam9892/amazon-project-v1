import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
                <img className="chekcout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="avd" />
                <div>
                    <h3 className="checkout--title">Your Shoping Details</h3>
                </div>
            </div>

            <div className="checkout--right">
                <Subtotal />
            </div>

        </div >
    )
}

export default Checkout
