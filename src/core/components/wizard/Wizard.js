import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card} from '@material-ui/core';
import {PropTypes} from 'prop-types';
import Steps from '../../../features/steps/Steps';
import Header from '../../../core/components/wizard/Header';
import Buttons from '../../../core/components/wizard/Buttons';


 export function groundOrPriority(shippingOption) {
    if (shippingOption === "1") return "Ground";
    else if (shippingOption === "2") return "Priority";
    else return "select";
};

export function costCalc(weight, shippingOption){
    const shippingRate = 0.40;
    return (Number(weight) * shippingRate * (shippingOption === "1" ? 1 : 1.5)).toFixed(2);
};

const styles = (theme)=>({
  "root": {
   width: '70%',
   margin: 80,
  },
  "shipping": {
      float:'left',
      padding:'5px'
  },
});
// const Wizard = (props) => {
//     const [wizardContext, setwizardContext]= useState(props.wizardContext)
//     const classes = useStyles();
//     return (
//     <>
//         <Card className={classes.root} variant="outlined">
//             <CardContent>
//                 <div className={classes.shipping}>
//                     <h1>Shipping Label Maker</h1>
//                     <LinearProgress variant="determinate" value={50} />
//                     <p> Enter Sender's address:</p>
//                     <GetSenderAddress wizardContext={wizardContext.from}/>
//                 </div>
//             </CardContent>
//         </Card>
//     </>
//     )

// }
 class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            wizardContext:this.props.wizardContext,
            currentStep:1,
            };
                    this.success = this.success.bind(this);
                    // this.onSend = this.onSend.bind(this);
                    // this.onReceive = this.onReceive.bind(this);
                    // this.getWeight = this.getWeight.bind(this);
                    // this.getShipping=this.getShipping.bind(this);
                    // this.onPrev=this.onPrev.bind(this);
                    // this.onNext=this.onNext.bind(this);
    }
    onSend = (e)=>{
     const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, from: {...state.wizardContext.from,[name]: value}}}));
    };
    onReceive = (e)=>{
     const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, to: {...state.wizardContext.to,[name]: value}}}));
    };

    getWeight=(e)=>{
     const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, weight: {...state.wizardContext.weight,[name]: value}}}));
    };

    getShipping=(e)=>{
      const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, shippingOption: {...state.wizardContext.shippingOption,[name]: value}}}));
    };

    onPrev=()=>{
        this.setState({currentStep:this.state.currentStep - 1});
    };

    onNext =()=>{
        this.setState({currentStep:this.state.currentStep + 1});
    };

    success(wizardData) {
       this.props.onComplete(wizardData);
        console.log(wizardData)
    };

    render(){
        const { classes } = this.props;
        return(
            <>
                <Card  className={classes.root} variant="outlined">
                    <Header/>
                    <Steps wizardContext={this.state.wizardContext} onAction={this.onSend} onReceive={this.onReceive} steps={this.state.currentStep} 
                           weight={this.getWeight} shipping={this.getShipping} complete={this.success} />
                    <Buttons current={this.state.currentStep} next={this.onNext} prev={this.onPrev}/>
                </Card>
            </>
        )       
    }
}

Wizard.propTypes = { 
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};


export default withStyles(styles)(Wizard);