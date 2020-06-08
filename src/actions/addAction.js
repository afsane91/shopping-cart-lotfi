import { Add_PRODCUCT_BASKET } from "./types";

export const addToBasket = (productName) => {
  return(dispatch) =>{
      // console.log('adding basket')
      //   console.log(productName);
    dispatch({
      type: Add_PRODCUCT_BASKET,
      payload: productName,
    });
  };
};
