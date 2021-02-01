import React from 'react';
import {PropTypes} from 'prop-types';
import GetSenderAddress from '../../features/steps/GetSenderAddress';
import GetReceiverAddress from '../../features/steps/GetReceiverAddress';


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
      console.log(this.props.steps);
      case 2: return <GetReceiverAddress wizardContext={this.props.wizardContext} onReceiveHandler={this.props.onReceive} />
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