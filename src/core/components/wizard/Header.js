import React from 'react';
import {CardContent,LinearProgress} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
class Header extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <>
                
                    <CardContent header ={this.props.header}>
                        <div className={classes.shipping}>
                            <h1>Shipping Label Maker</h1>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                    </CardContent>
            </>
        )
    }
}

export default withStyles(styles)(Header);