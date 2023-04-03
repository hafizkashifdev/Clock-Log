import {
  Form,
  Input,
  Modal,
  DatePicker,
  DatePickerProps,
  Button,
  Pagination,
} from "antd";
import { useState } from "react";
import "./CreateProject.scss";
import { Checkbox, Col, Row } from "antd";
import crossIcon from "../../../assets/icons/settings/projectandtasks/cross.svg";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

// date function
const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export const CreateProject = ({createProjectTabs, setCreateProjectTabs, setIsCreateModalOpen}: any) => {

  console.log("createProjectTabs", typeof createProjectTabs)
  console.log("createProjectTabs", setIsCreateModalOpen)

  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************",role)
  // state start here
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal functionality
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [menuValue, setMenuValue] = useState([]);
  const HandleCheckBoxValue = (list: any) => {
    setMenuValue(list);
  };

  // cross functionality start here
  const crossHandler = (item: any) => {
    const filtered = menuValue.filter((name) => {
      return name !== item;
    });
    setMenuValue(filtered);
  };



  return (
    <div className="wrap-create-project">
      {(createProjectTabs === "project" || createProjectTabs === "" || createProjectTabs === null) && (
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            className="fs-12 fw-500"
            name={["projectName"]}
            label="Project Name"
            // rules={[{ required: true }]}
          >
            <Input style={{ height: "39px" }} />
          </Form.Item>

          <Form.Item
            className="fs-12 fw-500"
            name={["dueDate"]}
            label="Due Date"
          >
            {/* <Input style={{height:"39px"}}/> */}
            <DatePicker
              style={{ marginBottom: "36px", height: "39px" }}
              onChange={onDateChange}
              className="w-100"
            />
          </Form.Item>
          <div className="d-flex justify-between wrap-button">
            <div>
              <Button
                onClick={() => setIsCreateModalOpen()}
                type="primary"
                htmlType="submit"
                className="fs-16 fw-500 line-height-24 cancel-btn"
              >
                Cancel 
              </Button>
            </div>
            <div className="wrap-btns">
              <Button
                onClick={() => setIsCreateModalOpen()}
                type="primary"
                htmlType="submit"
                className="secondary-color fs-16 fw-500 line-height-24 save-close-btn"
              >
                Save & close
              </Button>
              {
                <Button
                  onClick={() => {
                    setCreateProjectTabs("members");
                  }}
                  className="fs-16 fw-500 line-height-24"
                  type="primary"
                  htmlType="submit"
                >
                  Next
                </Button>
              }
            </div>
          </div>
        </Form>
      )}

      {createProjectTabs === "members" && (
        <div className="create-project-members">
          <label>Teams</label>
          <div className="wrapper-inner-modal-teams">
          <div className="selected-teams">
            {menuValue.map((item: any, i: any) => (
              <div key={i} className="selected-members">
                {item}
                <img
                  src={crossIcon}
                  alt=""
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={() => {
                    crossHandler(item);
                  }}
                />
              </div>
            ))}
            

            {/* modal */}
            <Modal
              title="Add Users"
              centered
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                style={{
                  marginBottom: "24px",
                  marginTop: "24px",
                  height: "40px",
                }}
              />
              {/* <Checkbox.Group style={{ width: "100%" }} onChange={onChange}> */}
              <Checkbox.Group
                style={{ marginBottom: "40px" }}
                value={menuValue}
                onChange={HandleCheckBoxValue}
              >
                <Row>
                  <Col span={8}>
                    <Checkbox value="Daniyal">Daniyal</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Taimoor">Taimoor</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Kiran">Kiran</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="M Asif">M Asif</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Ahmed">Ahmed</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Usama">Usama</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Umer">Umer</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Adnan">Adnan</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Saqib">Saqib</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="Ali">Ali</Checkbox>
                  </Col>
                </Row>
                
              </Checkbox.Group>
              <Pagination
                style={{ display: "flex", justifyContent: "end" }}
                defaultCurrent={1}
                total={1}
              />
            </Modal>
          </div>
          <button className="fs-14 fw-400" onClick={showModal}>
              + Add More Teams
          </button>
          </div>
          {
            <div className="d-flex justify-between"style={{flexWrap:"wrap"}}>
              <div className="d-flex"style={{gap:"11px"}}>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "transparent",
                    color: "#3B4D60",
                    border: "1px solid gray",
                    marginBottom:"10px"
                  }}
                  onClick={() => setIsCreateModalOpen()}
                >
                  Cancel
                </Button>
              </div>
              <div className="d-flex"style={{gap:"11px"}}>
                <Button
                 onClick={() => {
                  setCreateProjectTabs("project");
                }}
                  type="primary"
                  style={{
                    backgroundColor: "transparent",
                    color: "#3B4D60",
                    border: "1px solid gray",
                  }}
                >
                  Back
                </Button>
                <Button type="primary" htmlType="submit" onClick={() => setIsCreateModalOpen()}>
                  save
                </Button>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};
