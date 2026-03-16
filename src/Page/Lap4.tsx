import { Form, Input, Button, Checkbox } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

interface Category {
    id: number;
    title: string;
    description: string;
    active: boolean;
}

export default function Lap4() {
    const {mutate , isSuccess, isPending} = useMutation({
        mutationFn: async (values: Category) => {
          await axios.post("http://localhost:3000/categories",values);
        },
        onSuccess: ()=>{
            toast.success("them thanh cong")
        },
        onError: ()=>{
            toast.error("them that bai")
        }
    });
    const onFinish = async (values: Category) => {
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
            <h1 className="text-center">Thêm Danh Mục</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Title" name="title" rules={[{required:true, message:"vui long nhap ten danh muc"}]}>
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{required:true, message:"vui long nhap mo ta"}]}>
                    <Input.TextArea rows={4} placeholder="Description" />
                </Form.Item>
                <Form.Item label="Active" name="active">
                    <Checkbox>Active</Checkbox>
                </Form.Item>
                      <Form.Item className="flex justify-center">
                    <Button type="primary" htmlType="submit" loading={isPending}>
                        Thêm
                    </Button>
                     {isSuccess && <p>Story submitted successfully!</p>}
                </Form.Item>
            </Form>
            <hr />
            <h1>bai4</h1>
            <table>
                <select name="category" id="category">
                    {categories?.map((category: Category) => (
                        <option key={category.id} value={category.title}>
                            {category.title}
                        </option>
                    ))}
                </select>
            </table>
        </div>
        
    )
}