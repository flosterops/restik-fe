import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/user/actions";
import { Col } from "antd";

export const HomePage = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();

  useEffect(() => {
    login("Denys", "Veklych")(dispatch);
  }, [dispatch]);

  return <Col>HomePage</Col>;
};
