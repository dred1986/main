import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import viewReducer from "./viewReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import constructorReducer from "./constructorReducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  router: routerReducer,
  view: viewReducer,
  cart: cartReducer,
  user: userReducer,
  bundle: constructorReducer,
});

export default rootReducer;
