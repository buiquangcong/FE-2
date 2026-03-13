import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select } from 'antd';



const Lap3: React.FC = () => (
    <div>
    <Form action="" layout="vertical" autoComplete='off'>
        <Form.Item label="Username" name="username"
            rules={[{ required: true, message: "vui long nhap username" }]}>
            <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email"
            rules={[{ required: true, message: "vui long nhap email" }]}>
            <Input type="text" />
        </Form.Item>
        <Form.Item label="password" name="password"
            rules={[{ required: true, message: "vui long nhap password" }, {
                min: 6, message: "  toi thieu 6 ky tu"
            }]}>
            <Input.Password type="text" />
        </Form.Item>

        <Form.Item
            label="nhap lai password"
            name="confirmpassword"
            dependencies={['password']}
            rules={[
                { required: true, message: "vui long nhap lai password" },{min:6, message:"toi thieu 6 ky tu"},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Hai mật khẩu không khớp nhau!'));
                    },
                }),
            ]}
        >
            <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>

        <Form.Item label="gioi tinh" name="gioitinh" rules={[{required:true}]}>
            <Select
                options={[
                    { value: '1', label: 'Nam' },
                    { value: '2', label: 'Nữ' },
                ]}
            />
        </Form.Item>

        <Form.Item >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button>Dang Ky</Button>
    </Form>
    <hr />
    <h1 className='text-center'>Bai 4</h1>
    <Form layout="vertical">
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}>
            <Input placeholder="Nhập tiêu đề bài viết" />
        </Form.Item>

        <Form.Item label="Slug" name="slug">
            <Input placeholder="nhap-duong-dan-bai-viet" />
        </Form.Item>

        <Form.Item label="Content" name="content">
            <Input.TextArea rows={4} placeholder="Nhập nội dung bài viết" />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
            <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" block>
                Add Post
            </Button>
        </Form.Item>
    </Form>
    </div>
)

export default Lap3