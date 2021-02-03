import React from 'react';
import {PropTypes} from 'prop-types';
import GetSenderAddress from '../../features/steps/GetSenderAddress';
import GetReceiverAddress from '../../features/steps/GetReceiverAddress';
import GetWeight from '../../features/steps/GetWeight';
import GetShippingOption from '../../features/steps/GetShippingOption';
import Confirm from '../../features/steps/Confirm';


class Steps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prev: 1,
            next: 2,
            end: 3,
        }
    };

    wizardSteps() {
    switch (this.props.steps) {
      case 1: return <GetSenderAddress wizardContext={this.props.wizardContext} onSendHandler={this.props.onAction} /> 
      case 2: return <GetReceiverAddress wizardContext={this.props.wizardContext} onReceiveHandler={this.props.onReceive} />
      case 3: return <GetWeight wizardContext={this.props.wizardContext} weight={this.props.weight}/>
      case 4: return <GetShippingOption wizardContext={this.props.wizardContext} shipping={this.props.shipping}/>
      case 5: return <Confirm wizardContext={this.props.wizardContext} confirm={this.props.complete}/>
    default:     
    }
  };
        render(){
            const currentPage = this.wizardSteps();
        return(
            <>
               {currentPage}
            </>
        )
    };
}

Steps.propTypes = {
wizardContext: PropTypes.object.isRequired,
onAction: PropTypes.func.isRequired
};


export default Steps;