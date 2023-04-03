import { Checkbox, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import "./AddMember.scss";

export const AddMember = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuValue, setMenuValue] = useState([]);
  const [managerValue, setManagerValue] = useState([]);

  const HandleCheckBoxValue = (list: any) => {
    setMenuValue(list);
  };
  const HandleManagerValue = (list: any) => {
    setManagerValue(list);
  };

  // cross functionality start here
  const crossHandler = (item: any) => {
    const filtered = menuValue.filter((name) => {
      return name !== item;
    });
    setMenuValue(filtered);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="wrap-add-member">
      <div className="wrap-teammates">
        <label>Teammates</label>
        <div className="w-100 team-mates">
          {menuValue.map((item: any, i: any) => (
            <div key={i} className="selected-members">
              {item}
              <img
                // src={crossIcon}
                alt=""
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => {
                  crossHandler(item);
                }}
              />
            </div>
          ))}

          <button onClick={showModal}>+ Add More Teammates</button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              placeholder="Basic usage"
              style={{
                marginBottom: "24px",
                marginTop: "24px",
                height: "40px",
              }}
            />
            <Checkbox.Group
              // options={["dfdf", "dfwerfw"]}
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
          </Modal>
        </div>
      </div>

      <div className="wrap-manager">
        <label>Managers</label>
        <div
          className="w-100 add-member"
          style={{ border: "1px solid #E8ECEE", height: "155px" }}
        >
          <button>+ Add More Manager</button>
        </div>
      </div>
    </div>
  );
};
