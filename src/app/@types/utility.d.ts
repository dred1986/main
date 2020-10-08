import { Item } from "./queryTypes";

export type Possibly<T> = T | null | undefined;

export interface ItemMod extends Item {
  letter?: string;
}
