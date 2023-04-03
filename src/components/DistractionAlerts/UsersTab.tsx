import { Col, Input, Row, Checkbox, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import "./distractionAlerts.scss";

function UsersTab() {
  const checkboxOptions = ["Sharik", "Danial", "Nouman", "Usman"];
  const onCheckChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Row className="tabs">
      <Col xs={24} md={12}>
        <Input type="text" style={{borderRadius:"2px",border:" 1px solid rgba(160, 172, 187, 0.4)",height:"40px"}} placeholder="Search" prefix={<SearchOutlined />} />
      </Col>
      <Col xs={24} md={24}>
        <Checkbox.Group options={checkboxOptions} onChange={onCheckChange} />
      </Col>
      <Col xs={24} md={24}>
        <Pagination
          size="small"
          total={checkboxOptions.length}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </Col>
    </Row>
  );
}

export default UsersTab;
