import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Register extends Component{
  render(){
    const onSubmit = values => {
      console.log(values);
    }
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }
    return (
      <Form
        {...layout}
        name="basic"
        initialValues= {[]}
        onFinish={this.props.onSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  };
}
export default Register;