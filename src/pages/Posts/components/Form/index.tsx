import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const FormPost = ({
  onFinish,
  initialValues,
}: {
  onFinish: (value: any) => void;
  initialValues?: any;
}) => {

  const { t } = useTranslation();

  return (
    <>
      <Form
        name="form-post"
        onFinish={onFinish}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item label={<label>{t("form.title")}</label>} name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item label={<label>{t("form.description")}</label>} name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item label={<label>{t("form.tags")}</label>} name="Name ">
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item className="text-end">
          <Button
            type="primary"
            className="w-[150px] h-[40px] text-base"
            htmlType="submit"
          >
            {t("form.btn")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPost;
