import { Product } from "../../@types/queryTypes";
import { actions, CartActionTypes } from "../actions/cart";

type CartStateType = {
  list: Array<Product>;
};

const InitialState: CartStateType = { list: [] };

export default function cartReducer(
  state = InitialState,
  action: CartActionTypes
): CartStateType {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { ...state, list: [...state.list, action.payload] };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}
