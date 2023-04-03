import { Button, Modal } from "antd";
import { InputNumber, Form } from "antd";

interface Props {
  isShowCustomModal: any;
  setIsShowCustomModal: any;
}
const CustomModal = (props: Props) => {
  const { isShowCustomModal, setIsShowCustomModal } = props;

  const onChange: any = (value: number) => {
    console.log("changed", value);
  };
  const onFinish = (values: any) => {
    console.log(values);
    setIsShowCustomModal(false)

  }
  return (
    <>
      <Modal
        title="Custom Idle Minutes %"
        open={isShowCustomModal}
        onOk={() => setIsShowCustomModal(false)}
        onCancel={() => setIsShowCustomModal(false)}
        centered
        footer={null}
      >
        <div
          className="customScrteenShots"
          style={{
            marginTop: "25px",
          }}
        >
          <Form onFinish={onFinish}>
            <Form.Item
              name="myNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter a positive number",
                },
                {
                  pattern: /^[1-9]\d*$/,
                  message: "Please enter a positive number",
                },
              ]}
            >
              <InputNumber
                onChange={onChange}
                placeholder="Less than 40%"
                style={{ width: "100%" }}
                size="large"
                type="number"
                min='1'

                pattern="^[1-9]\d*$|^0$"
                required
              />
            </Form.Item>
              <div className="d-flex justify-end" style={{gap:'10px'}}>
                <Button key="back" onClick={() => setIsShowCustomModal(false)}>
                  Cancel
                </Button>
                <Button
                  key="submit"
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
