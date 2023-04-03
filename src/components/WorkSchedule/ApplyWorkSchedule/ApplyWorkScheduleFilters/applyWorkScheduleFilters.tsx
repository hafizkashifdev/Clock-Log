import { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MoveSelectedUser from "./moveSelectedUser";
import SelectStatus from "./selectStatus";
import SelectUserFilter from "./selectUser";
import AddModal from "../addModal/addModal";
import "./applyWorkScheduleFilters.scss";

const ApplyWorkScheduleFilters = () => {
  const [isAddModal, setIsAddModal] = useState(false);

  return (
    <div className="gripper-main-filters">
      <Row style={{ gap: "10px" }} className="apply-work-shedule-filters w-100">
        <Col xs={24} md={24} lg={5} className="select-users">
          <SelectUserFilter />
        </Col>
        <Col xs={24} md={24} lg={5} className="select-status">
          <SelectStatus />
        </Col>
        <Col xs={24} md={24} lg={5} className="select-status">
          <MoveSelectedUser />
        </Col>
        <Col xs={24} md={24} lg={5} className="select-status">
          <div
            className="apply-work-schedule-btn border-radius-6 fs-16 fw-500 grey-color d-flex align-center cursor-pointer"
            onClick={() => setIsAddModal(true)}
          >
            Apply Work Schedule
          </div>
        </Col>
      </Row>
      <Input
        className="search-input"
        placeholder="Search Schedule"
        prefix={<SearchOutlined />}
        style={{ height: "40px" }}
      />
      <AddModal isAddModal={isAddModal} setIsAddModal={setIsAddModal} />
    </div>
  );
};

export default ApplyWorkScheduleFilters;
