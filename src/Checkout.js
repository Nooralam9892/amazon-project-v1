import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
                <img className="chekcout--adv" src="https://www.amazon.in/gp/prime/&ref_=IN_Prime_Lepton_BAU_Annual_Acquisition_SWM_Desktop/?ie=UTF8&ref_=nav_swm_IN-Prime_Lepton_BAU_Annual_Acquisition_SWM_Desktop&pf_rd_p=b7094bcb-f51e-4fe1-9caf-65d131c53b43&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=E33CW7WHBE8QCYK11JNK" alt="avd" />
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
