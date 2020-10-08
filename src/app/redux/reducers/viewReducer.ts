import { actions, ViewActionTypes } from "../actions/view";

type ViewStateType = {
  consructorWindow: number;
  headerPopup: string | null;
};

const initial: ViewStateType = {
  consructorWindow: 0,
  headerPopup: null,
};

export default function viewReducer(
  state = initial,
  action: ViewActionTypes
): ViewStateType {
  switch (action.type) {
    case actions.TOGGLE_CONSTRUCTOR:
      return { ...state, consructorWindow: action.payload };
    case actions.TOGGLE_POPUP:
      return { ...state, headerPopup: action.payload };
    default:
      return state;
  }
}
