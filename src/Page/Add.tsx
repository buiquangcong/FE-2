import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

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