import React,{useState} from 'react';
import Wizard from '../../core/components/wizard/Wizard';
import Header from '../../core/components/wizard/Header';
import ShippingLabel from '../shipping-label-maker/ShippingLabel';


const ShippingLabelMaker =()=>{
    const [state,setState]=useState({isComplete:false});

    const createLabel=(wizardData)=>{
        setState({wizardData:wizardData, isComplete:true})
    };
    
        return (
            <div>
             {(state.isComplete) ? (<ShippingLabel wizardData={state.wizardData}/>): 
                (<Wizard header={Header} wizardContext={{
                        from: {
                            name: "",
                            street: "",
                            city: "",
                            state: "",
                            zip: ""
                        },
                        to: {
                            name: "",
                            street: "",
                            city: "",
                            state: "",
                            zip: ""
                        },
                        weight: "",
                        shippingOption: 1
                    }} steps={["GetSenderAddress", "GetReceiverAddress", "GetWeight", "GetShippingOption", "Confirm"]} onComplete={createLabel}/>)}
            </div>
        );
    
}

export default ShippingLabelMaker;