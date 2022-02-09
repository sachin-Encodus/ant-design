import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch("https://reqres.in/api/login", requestOptions);
    const data = await response.json();

    if (data.token) {
      notification["success"]({
        message: "Login successfully",
        description: data.token,
      });
    } else {
      notification["error"]({
        message: data.error,
        description: "",
      });
    }
  };

  return (
    <Form
      onFinish={handleSubmit}
      name="login-form"
      initialValues={{ remember: true }}
    >
      <p className="form-title">Welcome back</p>
      <p>Login to the Dashboard</p>
      <Form.Item name="email">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item name="password">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="login-form-button"
          style={{ backgroundColor: "#023047", color: "#fff" }}
        >
          LOGIN
        </Button>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="#">
          Forgot password
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
