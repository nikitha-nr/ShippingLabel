import React,{useState} from 'react';
import Wizard from '../../core/components/wizard/Wizard';
import Header from '../../core/components/wizard/Header';
import ShippingLabel from '../shipping-label-maker/ShippingLabel';


// const ShippingLabelMaker=()=>{
 
//  const [state,setState] = useState({isComplete: false});

//   const success=(data)=> {
//     setState({data: data, isComplete: true});
//     };
class ShippingLabelMaker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isComplete:false,
        };
                this.createLabel = this.createLabel.bind(this);

    }
    createLabel=(wizardData)=>{
        this.setState({wizardData:wizardData, isComplete:true})
       // console.log(data)
    };
    render(){
        return (
            <div>
             {(this.state.isComplete) ? (<ShippingLabel wizardData={this.state.wizardData}/>): 
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
                    }} steps={["GetSenderAddress", "GetReceiverAddress", "GetWeight", "GetShippingOption", "Confirm"]} onComplete={this.createLabel}/>)}
            </div>
        );
    }
}

export default ShippingLabelMaker;