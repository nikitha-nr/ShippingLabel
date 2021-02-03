import React from 'react';
import Confirm from '../steps/Confirm';
import {Card} from '@material-ui/core';

const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.wizardData;


    return (
                <div> 
                    <Card>
                        <h4>Shipping Label:</h4>
                        <div>
                            From: {from.name}
                        </div><br/>
                    
                        <div>
                            To: {to.name}
                        </div><br/>
                        <div>
                            Weight:{weight.weight}  lbs
                        </div><br/>
                        <div>
                            Shipping Option: {shippingOption.shipping}
                        </div>
                    </Card>
                </div>
            )
};

export default ShippingLabel;