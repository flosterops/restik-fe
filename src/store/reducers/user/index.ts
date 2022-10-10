import { EUserActionTypes } from "./types";

const initialState = {};

export const userReducer = (state = initialState, action: any) => {
  switch (action) {
    case EUserActionTypes.LOGIN:
    case EUserActionTypes.LOGOUT:
    default:
      return { ...state };
  }
};
