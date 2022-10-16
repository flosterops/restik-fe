import React, { PropsWithChildren } from "react";
import { Col } from "antd";
import "./index.scss";

export const FormContainer = ({ children }: PropsWithChildren) => {
  return <Col className="form-container w-100">{children}</Col>;
};
