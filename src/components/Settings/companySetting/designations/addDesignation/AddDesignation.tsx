import { Col, Modal, Row } from "antd";
import { FC, useState } from "react";
import AddDesignationImage from "../../../../../assets/images/settings/AddDesignation.png";
import AddDesignationForm from "./addDesignationForm/AddDesignationForm";
import './AddDesignation'

interface IDesignationModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isEdited: boolean
    seIsEdited:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddDesignation = (props: IDesignationModal) => {
    const { open, setOpen, isEdited,seIsEdited } = props
    // const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
        seIsEdited(false)
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Row className="showTime">
            <Col md={12} sm={24}  className="addTimeButton">
                <button style={{}} onClick={showModal} className="d-flex border-radius-4">
                    <img src={AddDesignationImage} width="20px" height="19px" alt="icon" />
                    <p className="fs-16 fw-500">Add Designation</p>
                </button>
            </Col>
            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText={isEdited ? 'Update' : 'Add'}
                width={450}
                centered
            >
                <AddDesignationForm isEdited={isEdited} />
            </Modal>
        </Row>
    )
}
