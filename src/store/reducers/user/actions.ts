import { Dispatch } from "redux";
import { EUserActionTypes } from "./types";

export const login =
  (name: string, password: string) => (dispatch: Dispatch<any>) => {
    dispatch({
      type: EUserActionTypes.LOGIN,
      payload: true,
    });
  };

export const logout = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: EUserActionTypes.LOGOUT,
  });
};
