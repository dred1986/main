import {
  Tags,
  ComponentInfoInfo,
  ComponentPricePrice,
  Box,
  AdminUser,
} from "../../@types/queryTypes";
import { ItemMod } from "../../@types/utility";
import {
  actions,
  ConstructorActionTypes,
  pageType,
} from "../actions/constructor";

type ConstructorStateType = {
  info: ComponentInfoInfo;
  price: ComponentPricePrice;
  set: Array<ItemMod>;
  box: Box;
  created_by: AdminUser;
  updated_by: AdminUser;
  tags: Array<Tags>;
  page: pageType;
  details: ItemMod | Box;
  quantity: string;
};

const initial: ConstructorStateType = {
  info: null,
  price: null,
  set: null,
  box: null,
  created_by: null,
  updated_by: null,
  tags: null,
  page: "initial",
  details: null,
  quantity: "",
};

export default function constructorReducer(
  state = initial,
  action: ConstructorActionTypes
): ConstructorStateType {
  switch (action.type) {
    case actions.PICK_BOX:
      return {
        ...state,
        box: action.payload,
        set: new Array(action.payload.countmin).fill(null),
      };
    case actions.CHANGE_PAGE:
      return { ...state, page: action.payload };
    case actions.VIEW_ITEM_DETAILS:
      return { ...state, details: action.payload };
    case actions.CHANGE_QUANTITY:
      return { ...state, quantity: action.payload };
    case actions.ADD_ITEMS_TO_SET:
      let itemsToAdd = [...Array(action.quantity.length)].fill(action.payload);
      if (action.quantity.trim().length) {
        itemsToAdd = itemsToAdd.map((item, i) => ({
          ...item,
          letter: action.quantity[i],
        }));
      }
      const parts = [
        itemsToAdd.slice(0, state.set.length - action.fromIndex).reverse(),
        itemsToAdd.slice(state.set.length - action.fromIndex).reverse(),
      ];
      const update = (set: Array<ItemMod>, add: Array<ItemMod>, from: number) =>
        set.reduce((set, item, i) => {
          if (i >= from && !item && add.length > 0) {
            set[i] = add.pop();
          }
          return set;
        }, set);

      let updatedSet = update(state.set, parts[0], action.fromIndex);
      if (parts[0].length || parts[1].length) {
        updatedSet = update(updatedSet, [...parts[0], ...parts[1]], 0);
      }
      return { ...state, set: updatedSet, quantity: "" };
    case actions.DEL_ITEM:
      return {
        ...state,
        set: state.set.map((item, i) => (i === action.payload ? null : item)),
      };
    case actions.RESET:
      return initial;
    default:
      return state;
  }
}
