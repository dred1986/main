export enum actions {
  TOGGLE_CONSTRUCTOR = "TOGGLE_CONSTRUCTOR",
  TOGGLE_POPUP = "TOGGLE_POPUP",
}

interface IchangeConstructorWidth {
  type: typeof actions.TOGGLE_CONSTRUCTOR;
  payload: number;
}

export const changeConstructorWidth = (
  size: number
): IchangeConstructorWidth => ({
  type: actions.TOGGLE_CONSTRUCTOR,
  payload: size,
});

interface ItoggleHeaderPopup {
  type: typeof actions.TOGGLE_POPUP;
  payload: "auth" | "cart" | null;
}

export const ToggleHeaderPopup = (popup: "auth" | "cart" | null) => ({
  type: actions.TOGGLE_POPUP,
  payload: popup,
});

export type ViewActionTypes = IchangeConstructorWidth | ItoggleHeaderPopup;
