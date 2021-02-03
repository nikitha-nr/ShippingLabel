import React,{useState} from 'react';
import {PropTypes} from 'prop-types';
import GetSenderAddress from '../../features/steps/GetSenderAddress';
import GetReceiverAddress from '../../features/steps/GetReceiverAddress';
import GetWeight from '../../features/steps/GetWeight';
import GetShippingOption from '../../features/steps/GetShippingOption';
import Confirm from '../../features/steps/Confirm';


const Steps =(props)=>{

    const[state,setState] = useState({prev:1,next:2,end:3});

      const wizardSteps=() => {
      switch (props.steps) {
      case 1: return <GetSenderAddress wizardContext={props.wizardContext} onSendHandler={props.onAction} /> 
      case 2: return <GetReceiverAddress wizardContext={props.wizardContext} onReceiveHandler={props.onReceive} />
      case 3: return <GetWeight wizardContext={props.wizardContext} weight={props.weight}/>
      case 4: return <GetShippingOption wizardContext={props.wizardContext} shipping={props.shipping}/>
      case 5: return <Confirm wizardContext={props.wizardContext} confirm={props.complete}/>
      default:     
    }
  };
      const currentPage = wizardSteps();
        return(
            <>
               {currentPage}
            </>
        );
}

Steps.propTypes = {
wizardContext: PropTypes.object.isRequired,
onAction: PropTypes.func.isRequired
};


export default Steps;