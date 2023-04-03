import { Col, Input, Row } from "antd";
import './AddDepartmentForm.scss';

interface IAddDepartmentForm {
  isEdited: boolean
}
const AddDepartmentForm = (props: IAddDepartmentForm) => {
  const { isEdited } = props
  return (
    <div className="add-designation-form">
      <h1 className="fw-500 fs-16 m-0" style={{ marginBottom: "20px", color: "#0E0E0E" }}>{isEdited ? 'Edit Department' : 'Add Department'}</h1>
      <Row

        className="m-t"

      >
        <Col span={24}>
          <label className="grey-color">Department Name</label>
          <Input placeholder="Enter Designation" />
        </Col>
      </Row>
    </div>
  );
};

export default AddDepartmentForm;
