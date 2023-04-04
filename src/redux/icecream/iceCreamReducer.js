import { BUY_ICECREAM } from "./iceCreamTypes";

const initalState = {
  numOfIceCreams: 10,
};

const iceCreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
