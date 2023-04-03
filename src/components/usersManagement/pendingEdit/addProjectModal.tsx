import { useState } from "react";
import { Checkbox, Modal, Pagination } from "antd";
import Search from "antd/es/transfer/search";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import "./invite-users.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface Props {
  setProjects: any;
}

const AddProjectModal = (props: Props) => {
  const { setProjects } = props;
  const [open, setOpen] = useState(false);
  const [checkProjects, setCheckProjects] = useState<any>([]);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setProjects(checkProjects);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckProjects(checkedValues);
  };

  const projects = [
    "DriverTok",
    "Clocklog",
    "Buzz Hr",
    "Forestor",
    "Chit Chat",
    " Code",
    "DiverTok",
    "Clockslog",
    "Buz Hr",
    "Forstor",
  ];
  console.log(checkProjects);

  return (
    <div>
      <button
        type="button"
        onClick={showModal}
        className="btn-simple border-radius-10 fs-12"
        style={{
          position: "absolute",
          bottom: "15px",
          left: "15px",
        }}
      >
        + Add More Project
      </button>
      <Modal
        title={
          <span>
            <ArrowLeftOutlined
              onClick={() => {
                setOpen(false);
              }}
              style={{ fontSize: "15px", paddingRight: "10px" }}
            />
            <span className="fs-16 title-color fw-400">Add Projects</span>
          </span>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        wrapClassName="addMoreProject modal-theme"
      >
        <Search placeholder="Search Projects" />
        <div className="projects-checkboxes">
          <Checkbox.Group options={projects} onChange={onChange} />
        </div>
        <Pagination
          total={projects.length}
          showTotal={(total, range) => (
            <p className="fs-12 m-0" style={{ color: "#8D8D8D" }}>
              {range[0]}-{range[1]} of {total}
            </p>
          )}
          defaultCurrent={1}
          size="small"
        />
      </Modal>
    </div>
  );
};

export default AddProjectModal;
