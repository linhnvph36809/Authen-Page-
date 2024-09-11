import { Button, Form, Input } from "antd";

const FormPost = ({
  onFinish,
  initialValues,
}: {
  onFinish: (value: any) => void;
  initialValues?: any;
}) => {
  return (
    <>
      <Form
        name="form-post"
        onFinish={onFinish}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item label="Name" name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item label="Name" name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item label="Name" name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item className="text-end">
          <Button
            type="primary"
            className="w-[150px] h-[40px] text-base"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPost;
