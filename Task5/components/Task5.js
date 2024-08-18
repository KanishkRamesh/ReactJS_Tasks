import React from 'react'

import '../Style.css';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Color } from 'antd/es/color-picker';

export function Task5() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <>
    <div className='t5bg1'>
        <h1 className='task5'>ReactJS Task 5</h1>
    <div className='t5bg2'>
      
    <h1 className='m1'>Member Login</h1>
       <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input className='five1' prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input  className='five2' prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item className='five3'>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password ?</a>
        </Flex>
      </Form.Item>

      <Form.Item >
        <Button className='five4' block type="primary" htmlType="submit">
          LOGIN
        </Button>
        <div className='five5'>or <a  href="">Create your account !</a></div>
      </Form.Item>
    </Form>
    
    </div>
    </div>
    </>
  )
}
