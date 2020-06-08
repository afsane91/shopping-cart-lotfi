import {INCRESE_QUANTITY,DECRESE_QUANTITY} from './types'

export const productQuantity = (action,name) => {
  return (dispatch) =>{
     console.log("incre");
      console.log(action+'action');
       console.log(name);
    dispatch({
      type: action === "increase" ? INCRESE_QUANTITY : DECRESE_QUANTITY,
      payload:name
    });
  };
};