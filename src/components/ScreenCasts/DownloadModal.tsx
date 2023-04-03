import { Button, Col, Modal, Row } from "antd";
import DownloadIocn from "../../assets/icons/download-icon.svg";
import "./ScreenCasts.scss";
interface props {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DownloadModal = (props: props) => {
    const { isModalOpen, setIsModalOpen } = props;

    return (
        <Modal centered open={isModalOpen} className="delete_modal modal-theme" footer={null} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}
            okText="Delete"
            cancelText="Cancel"
        >
            <Row style={{ textAlign: "center" }}>
                <Col xs={24}>
                    <div className="actions-modal">
                        <div className="img-container">
                            <img width="30px" src={DownloadIocn} alt="delete" />
                        </div>
                        <h2 className="fs-24 fw-600 heading-color">Download ScreenCasts ? </h2>
                        <Button className="btn-cancel" style={{ margin: "20px 20px" }} onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button className="btn-primary" onClick={() => setIsModalOpen(false)}>Download</Button>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};

export default DownloadModal;
