import React from 'react'
import './Checkout.css';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
                {/* <img className="chekcout--adv" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="avd" /> */}
                <div>
                    <h3 className="checkout--title">Your Shoping Details</h3>
                </div>
            </div>

            <div className="checkout--right">
                <h3>SubTotal (2 items)</h3>
            </div>

        </div>
    )
}

export default Checkout
