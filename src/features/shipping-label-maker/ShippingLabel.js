import React from 'react';


const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.wizardData;
    return (
                <div> 
                    <p>Shipping Label:</p>
                    <div>
                        From: {from}
                    </div>
                    <div>
                        To: {to}
                    </div>
                     <div>
                        Weight: {weight} lbs
                    </div>
                     <div>
                        Shipping Option: {shippingOption} 
                    </div>
                </div>
            )
};

export default ShippingLabel;