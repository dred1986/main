import { Box } from "../../@types/queryTypes";
import { ItemMod } from "../../@types/utility";

export enum actions {
  CHANGE_PAGE = "CHANGE_PAGE",
  PICK_BOX = "PICK_BOX",
  VIEW_ITEM_DETAILS = "VIEW_ITEM_DETAILS",
  RESET = "RESET",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  ADD_ITEMS_TO_SET = "ADD_ITEMS_TO_SET",
  DEL_ITEM = "DEL_ITEM",
}

export enum constructorPage {
  "initial",
  "box",
  "slot",
  "items",
  "details",
}
export type pageType = keyof typeof constructorPage;

interface IchangePage {
  type: typeof actions.CHANGE_PAGE;
  payload: pageType;
}

export const changePage = (page: pageType): IchangePage => ({
  type: actions.CHANGE_PAGE,
  payload: page,
});

interface IpickBox {
  type: typeof actions.PICK_BOX;
  payload: Box;
}

export const pickBox = (box: Box): IpickBox => ({
  type: actions.PICK_BOX,
  payload: box,
});

interface IviewItemDetails {
  type: typeof actions.VIEW_ITEM_DETAILS;
  payload: ItemMod | Box;
}

export const viewItemDetails = (input: ItemMod | Box): IviewItemDetails => ({
  type: actions.VIEW_ITEM_DETAILS,
  payload: input,
});

interface IconstructorReset {
  type: typeof actions.RESET;
}

export const constructorReset = () => ({
  type: actions.RESET,
});

interface IchangeQuantity {
  type: typeof actions.CHANGE_QUANTITY;
  payload: string;
}

export const changeQuantity = (quantity: string) => ({
  type: actions.CHANGE_QUANTITY,
  payload: quantity,
});

interface IaddItemsToSet {
  type: typeof actions.ADD_ITEMS_TO_SET;
  payload: ItemMod;
  quantity: string;
  fromIndex: number;
}

export const addItemsToSet = (
  item: ItemMod,
  quantity: string = "",
  fromIndex: number
) => ({
  type: actions.ADD_ITEMS_TO_SET,
  payload: item,
  quantity,
  fromIndex,
});

interface IRemoveItemFromSet {
  type: typeof actions.DEL_ITEM;
  payload: number;
}

export const RemoveItemFromSet = (id: number) => ({
  type: actions.DEL_ITEM,
  payload: id,
});

export type ConstructorActionTypes =
  | IchangePage
  | IpickBox
  | IviewItemDetails
  | IchangeQuantity
  | IaddItemsToSet
  | IRemoveItemFromSet
  | IconstructorReset;
