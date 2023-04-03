
import { Button, Checkbox, Modal, Pagination, Space } from 'antd'
import { useEffect, useState } from 'react';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ArrowLeftOutlined } from '@ant-design/icons';
import Search from "antd/es/transfer/search";
import '../members/manageModal.scss';

const AddProjects = (props: any) => {
    const { project, setProjects } = props;
    const [open, setOpen] = useState(false);
    const [projectValues, setProjectValues] = useState<any>([]);
    const showModal = () => setOpen(true);
    const handleCancel = () => setOpen(false);
    const onChange = (checkedValues: CheckboxValueType[]) => setProjectValues(checkedValues);
    const handleOk = () => {
        setOpen(false);
        setProjects(projectValues)

    }
    useEffect(() => {
        setProjectValues(project)
    }, [project])


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

    return (
        <div>
            <button
                type="button"
                onClick={showModal}
                className="add-more-btn fw-400 fs-12"
            >
                + Add More Projects
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
                        <span className="fs-16 title-color fw-400">Add Manager</span>
                    </span>
                }
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                wrapClassName="addMoreProject"
                footer={[
                    <Space style={{ paddingTop: "18px" }}>
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Add
                        </Button>
                    </Space>
                ]}
            >
                <Search placeholder="Search Managers" />
                <div className="checkboxes-wrapper">
                    <Checkbox.Group options={projects} value={projectValues} onChange={onChange} />
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

export default AddProjects