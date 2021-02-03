import React from 'react';
import Confirm from '../steps/Confirm';

const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.wizardData;


    return (
                <div> 
                    <p>Shipping Label:</p>
                   <div>
                        From: {from.name}
                    </div>
                   
                    <div>
                        To: {to.name}
                    </div>
                     <div>
                        Weight:{weight.weight}  lbs
                    </div>
                     <div>
                        Shipping Option: {shippingOption.shipping}
                    </div>
                </div>
            )
};

export default ShippingLabel;