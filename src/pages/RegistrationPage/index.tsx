import React from "react";
import { Col, Row } from "antd";
import { RegistrationForm } from "../../components/RegistrationForm";
import "./index.scss";

export const RegistrationPage = () => {
  return (
    <Col className="reg-page">
      <Row justify="center" align="middle" className="w-100 h-100">
        <RegistrationForm />
      </Row>
    </Col>
  );
};
