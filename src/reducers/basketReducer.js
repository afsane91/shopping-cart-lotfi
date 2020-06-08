import {
  Add_PRODCUCT_BASKET,
  Get_Numbers_Basket,
  DECRESE_QUANTITY,
  INCRESE_QUANTITY,
} from "../actions/types";
const initialState = {
  basketNumbers: 0,
  cardCost: 0,
  products: {
    melateEshgh: {
      name: "ملت عشق",
      tagName: "melateEshgh",
      price: 8000,
      numbers: 0,
      inCart: false,
    },
    bishori: {
      name: "بی شعوری",
      tagName: "bishori",
      price: 15000,
      numbers: 0,
      inCart: false,
    },
    maghaze: {
      name: "مغازه خودکشی",
      tagName: "maghaze",
      price: 17000,
      numbers: 0,
      inCart: false,
    },
    jozazkol: {
      name: "جزء از کل",
      tagName: "jozazkol",
      price: 12000,
      numbers: 0,
      inCart: false,
    },
  },
};


export default (state = initialState, action) => {
  let productSelcected="";
  switch (action.type) {
    case Add_PRODCUCT_BASKET:
       productSelcected = { ...state.products[action.payload] };

      productSelcected.numbers += 1;
      productSelcected.inCart = true;

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cardCost: state.cardCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelcected,
        },
      };
    case Get_Numbers_Basket:

      return { ...state };

    case INCRESE_QUANTITY:
      productSelcected = { ...state.products[action.payload] };
      productSelcected.numbers +=1
      return {
        ...state,
        cardCost: state.cardCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelcected,
        },
      };

    case DECRESE_QUANTITY:

      productSelcected = { ...state.products[action.payload] };
      if(productSelcected.numbers ===0 ){
        productSelcected.numbers =0;
      }
      else{
         productSelcected.numbers -= 1;
      }
     
      return {
        ...state,
        cardCost: state.cardCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelcected,
        },
      };

    default:
      return state;
  }
};
