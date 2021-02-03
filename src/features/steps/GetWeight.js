import React from 'react';
import {TextField,InputLabel} from '@material-ui/core';


const GetWeight=(props)=>{
        return (
                 <div class="weight">
                    <InputLabel  class="labelWeight">Enter Weight:</InputLabel>
                     <TextField name="weight"  placeholder="enter weight" variant="outlined" size="small" value={props.wizardContext.weight.weight} onChange={props.weight}/>
                </div>
        );

}

export default GetWeight;