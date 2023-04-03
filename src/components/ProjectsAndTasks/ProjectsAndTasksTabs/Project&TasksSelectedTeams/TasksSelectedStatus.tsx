import { useState } from "react";
import { Checkbox, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import "./TasksSelectedStatus.scss";

const plainOptions = ["All", "To Do", "In Progress", "Review", "Completed"];

const TasksSelectedStatus = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox.Group
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      ),
      key: "1",
    },
  ];

  return (
    <div className="select-sim-filters">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        open={isOpenDropdown}
        onOpenChange={setisOpenDropdown}
        className="card-bg-color card-bg-3-border-color title-color"
      >
        <div
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{
            height: "39px",
            backgroundColor: "#F4F9FF",
            padding: "6px",
            width: "116px",
          }}
          className="select-dropdown-btn fs-14 fw-400 border-radius-4"
        >
          <Space>
            Status
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};

export default TasksSelectedStatus;
