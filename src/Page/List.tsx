import React from 'react';
import { Table, Button, Space, Image } from 'antd';

const List: React.FC = () => {

    const data = [
        { key: '1', id: "1", name: 'Bùi Quang Công', age: "20", major: "Lập trình web-FE", avatar: "https://i.pravatar.cc/150?u=1", status: "active" },
        { key: '2', id: "2", name: 'Nguyễn Văn A', age: "19", major: "Thiết kế đồ họa", avatar: "https://i.pravatar.cc/150?u=2", status: "active" },
        { key: '3', id: "3", name: 'Nguyễn Văn B', age: "18", major: "Marketing", avatar: "https://i.pravatar.cc/150?u=3", status: "inactive" },
        { key: '4', id: "4", name: 'Nguyễn Văn C', age: "21", major: "Lập trình web-FE", avatar: "https://i.pravatar.cc/150?u=4", status: "active" },
        { key: '5', id: "5", name: 'Nguyễn Văn D', age: "18", major: "Ngôn Ngữ Trung", avatar: "https://i.pravatar.cc/150?u=5", status: "inactive" },
        { key: '6', id: "6", name: 'Nguyễn Văn E', age: "21", major: "Ngôn Ngữ Hàn", avatar: "https://i.pravatar.cc/150?u=6", status: "active" },
        { key: '7', id: "7", name: 'Nguyễn Văn F', age: "19", major: "Lập trình web-BE", avatar: "https://i.pravatar.cc/150?u=7", status: "active" },
        { key: '8', id: "8", name: 'Nguyễn Văn G', age: "20", major: "Thiết kế đồ họa", avatar: "https://i.pravatar.cc/150?u=8", status: "inactive" },
        { key: '9', id: "9", name: 'Nguyễn Văn H', age: "18", major: "Sale", avatar: "https://i.pravatar.cc/150?u=9", status: "active" },
        { key: '10', id: "10", name: 'Nguyễn Văn I', age: "20", major: "Marketing", avatar: "https://i.pravatar.cc/150?u=10", status: "active" },
    ];

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        {
            title: "Avatart",
            dataIndex: "avatar",
            render: (avatar: string) => <Image width={50} src={avatar} />,
        },
        { title: 'Họ tên', dataIndex: 'name', key: 'name' },
        { title: 'Tuổi', dataIndex: 'age', key: 'age' },
        { title: 'Chuyên Ngành', dataIndex: 'major', key: 'major' },
        {
            title: 'status', dataIndex: 'status', render: (status: string) => (
                <span style={{ color: status === "active" ? "green" : "red" }}>{status}</span>
            )
        },
        {
            title: 'Hành động',
            key: 'action',
            render: () => (
                <Space>
                    <Button type="primary">Sửa</Button>
                    <Button type="primary" danger>Xóa</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <strong style={{ fontSize: '18px' }}>Danh sách người dùng</strong>
            </div>
            <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
        </div>
    );
};

export default List;