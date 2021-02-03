import React from 'react';


const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.wizardData;


    return (
                <div> 
                    <p>Shipping Label:</p>
                   <div>
                        From: 
                    </div>
                   
                    <div>
                        To: 
                    </div>
                     <div>
                        Weight:  lbs
                    </div>
                     <div>
                        Shipping Option: 
                    </div>
                </div>
            )
};

export default ShippingLabel;