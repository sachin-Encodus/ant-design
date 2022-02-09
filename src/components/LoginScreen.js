import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import LoginForm from "./LoginForm";

const LoginScreen = ({ screens }) => {
  return (
    <Row className="login-page">
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={10}
      >
        <div>
          <LoginForm />
        </div>
      </Col>

      <Col
        style={{
          backgroundColor: "#023047",
          display: screens.md ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={14}
      >
        <div className="illustration-wrapper">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/innovative-business-idea-creation-and-implementation-3985424-3324603.png"
            alt="Login"
            className="illustration-wrapper-img"
          />
        </div>
      </Col>

      <div className="login-box"></div>
    </Row>
  );
};

export default LoginScreen;
