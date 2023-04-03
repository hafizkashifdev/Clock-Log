import { Modal, Space } from 'antd'
import './actionModal.scss';

import deleteCrossIcon from '../../assets/icons/cancel.svg';



const ActionModal = (props: any) => {
    const { isModalOpen, setOpenModal, submitHandler, actionClass, actionText, mainText, secondaryText, image } = props;
    return (
        <Modal centered style={{ textAlign: "center" }} wrapClassName="action-modal-wrapper modal-theme"
            onCancel={() => setOpenModal(false)}
            open={isModalOpen}
            footer={[
                <Space size={30} className=" d-flex justify-center align-center  cursor-pointer">
                    <div className={` button-size`} onClick={() => setOpenModal(false)}>
                        Cancel
                    </div>
                    <div className={`${actionClass} button-size text-white cursor-pointer`} onClick={submitHandler}>
                        {actionText}
                    </div>
                </Space >
            ]}
            width={445}
            closeIcon={<img src={deleteCrossIcon} alt="cross" height={24} width={24} style={{ filter: "var(--dynamic-img-filter)" }} />}

        >
            <div className="image-container">
                <img src={image} alt="deleteIcon" className='deletebutton'
                    style={{
                        display: "block", margin: "auto", width: "30px", height: "30px",
                    }} />
            </div>
            <p className='fs-24 fw-700 sure' style={{ color: "#0E0E0E", textAlign: "center", margin: "20px" }}>{mainText}</p>
            <p className='fs-14' style={{ color: "#9D9D9D", textAlign: "center", margin: "8px" }}>{secondaryText}</p>


        </Modal >

    )
}

export default ActionModal