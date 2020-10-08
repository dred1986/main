import { Product } from "../../@types/queryTypes";

export enum actions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

interface IaddToCart {
  type: typeof actions.ADD_TO_CART;
  payload: Product;
}

export const AddToCart = (product: Product): IaddToCart => ({
  type: actions.ADD_TO_CART,
  payload: product,
});

interface IremoveFromCart {
  type: typeof actions.REMOVE_FROM_CART;
  payload: string;
}

export const RemoveFromCart = (id: string): IremoveFromCart => ({
  type: actions.REMOVE_FROM_CART,
  payload: id,
});

export type CartActionTypes = IaddToCart | IremoveFromCart;
