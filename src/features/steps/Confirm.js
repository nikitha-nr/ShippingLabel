import React from 'react';
import {Button} from '@material-ui/core';
import {groundOrPriority} from '../../core/components/wizard/Wizard'
import {costCalc} from '../../core/components/wizard/Wizard'


const Confirm =(props)=>{

    const { from } = props.wizardContext;
    const { to } = props.wizardContext;
    const { weight } = props.wizardContext;
    const { shippingOption } = props.wizardContext;
    const { confirm } = props;
    const confirmInfo = () => confirm(props.wizardContext);

    return (
       <>
        <div class="sender">
            <p><b>Sender's Information:</b></p>
                <div>Name:{from.name}</div><br/>
                <div>Street:{from.street}</div> <br/>
                <div>City:{from.city}</div> <br/>
                <div> State:{from.state}</div> <br/>
                <div> Zip Code:{from.zip}</div> <br/>          
        </div>
        <hr/>
        <div class="receiver-confirm">
            <p><b>Receiver's Information:</b></p>
                <div>Name:{to.name}</div><br/>
                <div>Street:{to.street}</div> <br/>
                <div>City:{to.city}</div> <br/>
                <div> State:{to.state}</div> <br/>
                <div> Zip Code:{to.zip}</div>   <br/>         
        </div>
        <div>
                <div class="weight-confirm">Weight:{weight.weight}lbs</div><br/>
        </div>
        <div>
                <div>Shipping as:{groundOrPriority(shippingOption.shipping)}</div><br/>
        </div>
        <div>
                <div>Cost: <b>$</b>{costCalc(weight.weight, shippingOption.shipping)}</div><br/>
        </div>
         
        <div class="confirm">
            <Button variant="outlined" size="small" color="primary" onClick={confirmInfo}>Confirm</Button> 
        </div>
       </> 
    );
}
export default Confirm;