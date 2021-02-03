import React from 'react';
import {TextField,InputLabel} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root:{
    },
  textField: {
      display:'inline-flex',
      padding: 5,
  },
  csz:{
      display:'inline-table',
      float:'left',
      marginTop:'1%'
  },
  nameStreet:{
      float:'left'
  },
  labelNameStreet:{
      marginTop:'1.5%'
  },
  labelcsz:{
      marginTop:'4%'
  },
  TextField:{
      width:'759px'
  }
 
});

class GetReceiverAddress extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <>
                <div>
                    <p class="sender">Enter Receivers's Address</p>
                </div>
                <form  noValidate >
                    <div className={classes.nameStreet}>
                        <div className={classes.textField}>
                            <InputLabel className={classes.labelNameStreet} htmlFor="standard-required">Name:</InputLabel> 
                            <TextField  name="name" className={classes.TextField}  size="small" label="Please enter a valid name" variant="outlined" value={this.props.wizardContext.to.name} onChange={this.props.onReceiveHandler}/>  
                        </div><br/>
                        <div className={classes.textField}>
                            <InputLabel className={classes.labelNameStreet} htmlFor="standard-required">Street:</InputLabel> 
                            <TextField name="street" className={classes.TextField}  size="small" label="Stree Address please!" variant="outlined" value={this.props.wizardContext.to.street} onChange={this.props.onReceiveHandler}/>
                        </div>
                    </div>
                    <div className={classes.csz}>
                        <div className={classes.textField}>
                            <InputLabel className={classes.labelcsz} htmlFor="standard-required">City: &nbsp;&nbsp;  </InputLabel>
                            <TextField  name="city" id="outlined-basic" size="small" label="name of the city" variant="outlined" value={this.props.wizardContext.city} onChange={this.props.onReceiveHandler}/>
                        </div>
                        <div className={classes.textField}>
                            <InputLabel className={classes.labelcsz} htmlFor="standard-required">State:</InputLabel> 
                            <TextField name="state" id="outlined-basic" size="small" label="state" variant="outlined" value={this.props.wizardContext.state} onChange={this.props.onReceiveHandler}/>
                        </div>
                        <div className={classes.textField}>
                            <InputLabel className={classes.labelcsz} htmlFor="standard-required">Zip:</InputLabel> 
                            <TextField name="zip" id="outlined-basic" size="small" label="zip code" variant="outlined" value={this.props.wizardContext.zip} onChange={this.props.onReceiveHandler}/>
                        </div>
                    </div>
            </form>
    </>
        )
    }

}

export default withStyles(styles)(GetReceiverAddress);