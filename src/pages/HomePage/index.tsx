import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/user/actions";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    login("Denys", "Veklych")(dispatch);
  }, [dispatch]);

  return <div>Home page</div>;
};
