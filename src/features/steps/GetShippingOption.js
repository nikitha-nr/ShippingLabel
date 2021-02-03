import React from 'react';
import {FormLabel} from '@material-ui/core';


const GetShippingOption =(props)=>{
      return (
                 <div class="shipping">
                    <FormLabel component="legend">Slect Shipping Option:</FormLabel>
                        <div class="radio">
                            <div>
                                 <input type="radio" name="shipping" value="1" onChange={props.shipping}/>Ground
                            </div><br/>
                            <div>
                                 <input type="radio" name="shipping" value="2" onChange={props.shipping}/>Priority 
                            </div>
                        </div>                         
                </div>
        );

}

export default GetShippingOption;