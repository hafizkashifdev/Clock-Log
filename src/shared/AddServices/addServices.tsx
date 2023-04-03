import { useState } from "react";
import { Button, Modal, Input, Form, Select } from "antd";
import addServices from "../../assets/images/WebApp/addServices.png";
import "./addServices.scss";

function AddServcesModal() {
  // const { addCategory, setAddCategory } = props
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [errorUsers, setErrorUsers] = useState("");
  const [borderUsers, setBorderUsers] = useState("#E6E6E6");
  const [selectErrorColor, setSelectError] = useState("#ff4d4f");
  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {};
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddCategory(false);
  };
  return (
    <>
      <Button
        className="addServicesbtn d-flex align-items-center justify-between fs-16 fw-500"
        onClick={() => {
          setAddCategory(true);
        }}
      >
        <img src={addServices} alt="AddCategory" /> <span> Add Services</span>
      </Button>
      <Modal
        title="Add Service"
        open={addCategory}
        onOk={() => {
          setAddCategory(false);
        }}
        onCancel={() => {
          setAddCategory(false);
          form.resetFields();
        }}
        closable={false}
        centered
        wrapClassName="addException-modal-classes"
      >
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="ServiceTitle" hasFeedback rules={[{ required: true, message: "Please enter a Service Title" }]} className="mb-10">
            <Input placeholder="Service Title" id="ServiceTitle" style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }} />
          </Form.Item>

          <Form.Item name="ServiceURL" hasFeedback rules={[{ required: true, message: "Please enter a Service URL" }]} className="mb-10">
            <Input placeholder="Service URL" id="ServiceURL" style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }} />
          </Form.Item>

          <Form.Item name="Category" hasFeedback rules={[{ required: true, message: "Please Select Categorye" }]} className="mb-10">
            <Select
              placeholder="Select Category"
              options={[
                { value: "Design", label: "Design" },
                { value: "Email", label: "Email" },
                { value: "Social Media", label: "Social Media" },
                { value: "Music", label: "Music" },
              ]}
            />
          </Form.Item>

          <Form.Item name="ProductivityStatus" hasFeedback rules={[{ required: true, message: "Please Select Productivity Status" }]} className="mb-10">
            <Select
              placeholder="Select Productivity Status"
              options={[
                { value: "Neutral", label: "Neutral" },
                { value: "Productive", label: "Productive" },
                { value: "Unproductive", label: "Unproductive" },
              ]}
            />
          </Form.Item>

          <Form.Item name="Screencast" hasFeedback rules={[{ required: true, message: "Please Select No of Screencast" }]} className="mb-10">
            <Select
              placeholder="No of Screencasts"
              options={[
                { value: "3 Min - 1 Screenshot", label: "3 Min - 1 Screenshot" },
                { value: "5 Min - 2 Screenshot", label: "5 Min - 2 Screenshot" },
                { value: "10 Min - 3 Screenshot", label: "10 Min - 3 Screenshot" },
                { value: "15 Min - 4 Screenshot", label: "15 Min - 4 Screenshot" },
                { value: "20 Min - 5 Screenshot", label: "20 Min - 5 Screenshot" },
                { value: "Custom", label: "Custom" },
              ]}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "end" }}>
            <Button
              style={{ marginRight: "15px", marginTop: "10px" }}
              onClick={() => {
                setAddCategory(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                setErrorUsers("Please Select Value");
                setBorderUsers("#ff4d4f");
                setSelectError("#ff4d4f");
              }}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddServcesModal;
