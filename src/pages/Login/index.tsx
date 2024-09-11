import { Button, Form, Input } from "antd";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const { handlerLogin } = useAuth();

  return (
    <>
      <section className="w-[200px] h-[100vh] mx-auto flex justify-center items-center">
        <div>
          <h1 className="text-[50px] font-medium text-center mb-6">Login</h1>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={handlerLogin}
          >
            <Form.Item label="Username" name="username">
              <Input className="w-[250px] h-[40px] bg-white" />
            </Form.Item>

            <Form.Item className="text-center">
              <Button
                type="primary"
                className="w-[150px] h-[35px]"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
