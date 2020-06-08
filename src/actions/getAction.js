import { Get_Numbers_Basket } from "./types";

export const getNumbers = (value) => {
  return function (dispatch) {
    // console.log("getting");
    dispatch({
      type: Get_Numbers_Basket,
    });
  };
};
