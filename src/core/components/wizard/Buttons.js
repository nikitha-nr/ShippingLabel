import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';


const styles = (theme) => ({
  btn:{
      marginTop:'20%',
      padding:15,
      marginLeft:'25%'
  }
});

const Buttons= (props)=>{
        const { classes, current } = props;
        return (
                 <>
                    <div className={classes.btn}>
                      {current===1 ? null:(<Button variant="outlined" size="small" color="secondary" onClick={props.prev}>Previous</Button> )}&nbsp;&nbsp;
                        
                        {current > 4 ? null:(<Button variant="outlined" size="small" color="primary" onClick={props.next}>Next</Button>)}
                    </div>
                </>
        )
    

}

export default withStyles(styles)(Buttons);