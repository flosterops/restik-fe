import React from "react";
import { Col, Row, Typography } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";
import "./index.scss";

export const Header = () => {
  return (
    <Col className="header">
      <Row align="middle" justify="center" className="header__container">
        <ScheduleOutlined className="header__icon" />
        <Typography.Title className="header__title">Restik</Typography.Title>
      </Row>
    </Col>
  );
};
