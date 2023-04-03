import { useState } from "react";
import { Checkbox, Modal, Pagination } from "antd";
import Search from "antd/es/transfer/search";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import "./invite-users.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface Props {
  setProjects: any;
}

const AddTeamModal = (props: Props) => {
  const { setProjects } = props;
  const [open, setOpen] = useState(false);
  const [checkTeam, setCheckTeam] = useState<any>([]);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setProjects(checkTeam);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckTeam(checkedValues);
  };

  const teams = [
    "BA Team",
    "Design Team",
    "Manager Team",
    "HR Team",
    "Finance Team",
    "Marketing Team",
    "Developer Team",
    "QA Team",
    "Tester Team",
  ];

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
        + Add More Team
      </button>
      <Modal
        title={<span>
            <ArrowLeftOutlined onClick={()=>{setOpen(false)}}  style={{fontSize:"15px",paddingRight:"10px"}} />
            <span className="fs-16 title-color fw-400">Add Team</span>
          </span>}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        wrapClassName="addMoreProject modal-theme"
      >
        <Search placeholder="Search Teams" />
        <div className="projects-checkboxes">
          <Checkbox.Group options={teams} onChange={onChange} />
        </div>
        <Pagination
          total={teams.length}
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

export default AddTeamModal;
