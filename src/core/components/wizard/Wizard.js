import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//import GetSenderAddress from '../../../features/steps/GetSenderAddress';
//import {Card, CardContent,LinearProgress} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {PropTypes} from 'prop-types';
import Steps from '../../../features/steps/Steps';
import Header from '../../../core/components/wizard/Header';
import Buttons from '../../../core/components/wizard/Buttons';


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
            currentStep:1
        };
    }
    onSend = (e)=>{
     const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, from: {...state.wizardContext.from,[name]: value}}}));
     console.log(this.state.wizardContext.from)
    };
    onReceive = (e)=>{
     const value = e.target.value;
     const name=e.target.getAttribute("name")
     this.setState(state=>({...state, wizardContext: {...state.wizardContext, to: {...state.wizardContext.from,[name]: value}}}));
     console.log(this.state.wizardContext.from)
    };

    onPrev=()=>{
         const {currentStep} = this.state;
        this.setState({currentStep:this.state.currentStep - 1});
        console.log("next")
    };

    onNext =()=>{
         const {currentStep} = this.state;
        this.setState({currentStep:this.state.currentStep + 1});
        console.log("next")
    };

    render(){
        const { classes } = this.props;
        return(
            <>
                <Card  className={classes.root} variant="outlined">
                    <Header/>
                    <Steps wizardContext={this.state.wizardContext} onAction={this.onSend} onReceive={this.onReceive} steps={this.state.currentStep}/>
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