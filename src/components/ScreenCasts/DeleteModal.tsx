import { Button, Col, Modal, Row } from "antd";
import DeleteIcon from "../../assets/icons/delete-icon.svg";
import "../usersManagement/Modals/modals.scss";
interface props {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeleteModal = (props: props) => {
    const { isModalOpen, setIsModalOpen } = props;

    return (
        <Modal centered open={isModalOpen} className="delete_modal modal-theme" footer={null} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}
            okText="Delete"
            cancelText="Cancel"
        >
            <Row style={{ textAlign: "center" }}>
                <Col xs={24}>
                    <div className="action-modal">
                        <img src={DeleteIcon} alt="delete" />
                        <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
                        <p className="fs-14" style={{ color: "#9D9D9D" }}>
                            Do you want to delete this?
                        </p>
                        <Button className="btn-cancel" style={{ margin: "20px 20px" }} onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button className="btn-danger" onClick={() => setIsModalOpen(false)}>Delete</Button>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;
