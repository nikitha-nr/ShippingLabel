import React from 'react';
import Wizard from '../../core/components/wizard/Wizard';
import Header from '../../core/components/wizard/Header';


class ShippingLabelMaker extends React.Component{
 
    render(){
        return (
            <div>
                <Wizard header={Header} wizardContext={{
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
                    }} steps={["GetSenderAddress", "GetReceiverAddress", "GetWeight", "GetShippingOption", "Confirm"]} onComplete={"need function"}/>
            </div>
        );
    }
}

export default ShippingLabelMaker;