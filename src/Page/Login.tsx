import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Card, Typography } from 'antd';

const { Title } = Typography;

type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
    }}>
        <Card style={{ width: 450, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <Title level={3}>ĐĂNG NHẬP</Title>
                <p>Vui lòng nhập tài khoản để tiếp tục</p>
            </div>

            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên đăng nhập"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập username!' }]}
                >
                    <Input placeholder="Username của bạn..." />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' },{
                        min:6,message:'Password phải có ít nhất 6 ký tự'
                    }]}
                >
                    <Input.Password placeholder="Password..." />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked">
                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
);

export default Login;