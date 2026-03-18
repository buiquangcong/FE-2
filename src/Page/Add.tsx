import { Form, Input, Button, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

interface Category {
    id: string;
    title: string;
}

export default function AddStory() {
    const {mutate , isSuccess, isPending} = useMutation({
        mutationFn: async (values: any) => {
          await axios.post("http://localhost:3000/stories",values);
        },
        onSuccess: ()=>{
            toast.success("them thanh cong")
        },
        onError: ()=>{
            toast.error("them that bai")
        }
    });
    const onFinish = async (values: any) => {
        console.log("success", values);
        mutate(values)
    }
    const {data: categories} = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/categories");
            return response.data;
        }
    })
    return (
        <div>
            <h1 className="text-center">Thêm Truyện</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Title" name="title">
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item label="Author" name="author">
                    <Input placeholder="Author" />
                </Form.Item>
                <Form.Item label="Image" name="image">
                    <Input placeholder="Image" />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item label="createAt" name="createAt">
                    <Input type="date" placeholder="createAt"  />
                </Form.Item>
                <Form.Item label="Category" name="category" rules={[{required:true, message:"vui long chon danh muc"}]}>
                    <Select
                        placeholder="Select a category"
                        style={{ width: 200 }}
                        options={categories?.map((category: Category) => ({
                            value: category.title,
                            label: category.title,
                        }))}
                    />
                </Form.Item>
                <Form.Item className="flex justify-center">
                    <Button type="primary" htmlType="submit" loading={isPending}>
                        Thêm
                    </Button>
                     {isSuccess && <p>Story submitted successfully!</p>}
                </Form.Item>
            </Form>
        </div>
    )
}