import { Col, Modal, Row, Select, DatePicker, TimePicker, Input, Tooltip } from "antd";
import dayjs from 'dayjs';
import { PlusOutlined, InfoCircleOutlined, EditOutlined, } from '@ant-design/icons';
import './addTimeModal.scss';
import { useState } from "react";

export const AddTimeModel = (props: any) => {
    const { isAddModalOpen, setIsAddModalOpen } = props;
    const format = 'HH:mm';
    const { TextArea } = Input;
    const [openAddReason, setOpenAddReason] = useState(false);
    const [openAddNote, setOpenAddNote] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            // setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    return (
        <Row>

            <Modal
                title="Add Time"
                open={isAddModalOpen}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={() => setIsAddModalOpen(false)}
                okText="Save"
                centered
                width={800}
                className="showTimeCalender"
            >


                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12} lg={12}>
                        <label>Project</label>
                        <Select

                            // style={{ width: 230 }}
                            options={[
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                            ]}
                        />
                    </Col>
                </Row>

                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12}>
                        <label>Task</label>
                        <Select

                            // style={{ width: 395 }}
                            options={[
                                { value: 'User Stories ', label: 'User Stories ' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <label>Date</label><br />
                        <DatePicker />
                    </Col>

                </Row>

                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12}>
                        <label>From</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} />
                    </Col>
                    <Col xs={24} md={12}>
                        <label>To</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} />
                    </Col>

                </Row>

                <Row>
                    <button className='addTimeBtnCalender cursor-pointer fs-14 font-Poppins p-0' onClick={() => setOpenAddReason(!openAddReason)}><PlusOutlined className="Addicon" />Add Reason</button>
                    {openAddReason &&
                        <TextArea
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>
                <Row>
                    <button className='addTimeBtnCalender cursor-pointer fs-14 font-Poppins p-0' onClick={() => setOpenAddNote(!openAddNote)}><EditOutlined className="Addicon" />Add Note   <Tooltip title="Add Additional Notes" placement="right"><InfoCircleOutlined className="infoIcon" /> </Tooltip></button>
                    {openAddNote &&
                        <TextArea
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>

            </Modal>

        </Row>
    )
}
