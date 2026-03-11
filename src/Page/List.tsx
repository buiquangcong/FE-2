import React from 'react';
import { Table } from 'antd';

const List: React.FC = () => {

    const data = [
        { key: '1', id: "1", name: 'Bùi Quang Công', age: "20", major: "Lập trình web-FE" },
        { key: '2', id: "2", name: 'Nguyễn Văn A', age: "19", major: "Thiết kế đồ họa" },
        { key: '3', id: "3", name: 'Nguyễn Văn B', age: "18", major: "Marketing" },
        { key: '4', id: "4", name: 'Nguyễn Văn C', age: "21", major: "Lập trình web-FE" },
        { key: '5', id: "5", name: 'Nguyễn Văn D', age: "18", major: "Ngôn Ngữ Trung" },
        { key: '6', id: "6", name: 'Nguyễn Văn E', age: "21", major: "Ngôn Ngữ Hàn" },
        { key: '7', id: "7", name: 'Nguyễn Văn F', age: "19", major: "Lập trình web-BE" },
        { key: '8', id: "8", name: 'Nguyễn Văn G', age: "20", major: "Thiết kế đồ họa" },
        { key: '9', id: "9", name: 'Nguyễn Văn H', age: "18", major: "Sale" },
        { key: '10', id: "10", name: 'Nguyễn Văn I', age: "20", major: "Marketing" },
    ];

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Họ tên', dataIndex: 'name', key: 'name' },
        { title: 'Tuổi', dataIndex: 'age', key: 'age' },
        { title: 'Chuyên Ngành', dataIndex: 'major', key: 'major' },

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