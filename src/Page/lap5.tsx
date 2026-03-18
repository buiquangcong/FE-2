import { QueryClient, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Table, Image, Button, Popconfirm, Input } from "antd"
import { useState } from "react"
import toast from "react-hot-toast"
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"

interface Category {
    id: string;
    title: string;
}

export default function Lap5() {
    const [searchText, setSearchText] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: () => axios.get("http://localhost:3000/stories").then((res) => res.data),
    })

    const reload = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (id: string) => {
            await axios.delete(`http://localhost:3000/stories/${id}`)
        },
        onSuccess: () => {
            toast.success("xoa thanh cong")
            reload.invalidateQueries({ queryKey: ["stories"] });
        },
        onError: () => {
            toast.error("xoa that bai")
        }
    })
    const columns = [
        {
            title: "Ten truyen",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Tac gia",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Danh muc",
            dataIndex: "category",
            key: "category",
            render: (category: string) => <p>{category}</p>
        },
        {
            title: "Ngay tao",
            dataIndex: "createAt",
            render: (text: Date) => <p>{new Date(text).toLocaleString()}</p>
        },
        {
            title: "hinh anh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} alt="" width={100} height={100} />,
        },
        {
            title: "Action",
            key: "action",
            render: (text: string, record: any) => (
                <Popconfirm
                    title="Xóa truyện"
                    description="Bạn có chắc chắn muốn xóa truyện này không?"
                    onConfirm={() => mutate(record.id)}
                    okText="Đồng ý"
                    cancelText="Hủy"
                >
                    <Button type="primary" danger>
                        Delete
                    </Button>
                </Popconfirm>
            ),
        }
    ]

    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (isError) {
        return <p>Loi call api</p>
    }
    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Input.Search
                    placeholder="Tìm kiếm truyện theo tên..."
                    allowClear
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: 300 }}
                />
            </div>
            <Table columns={columns} dataSource={filteredData} loading={isLoading} pagination={{ pageSize: 5 }} />
        </div>
    )
}   