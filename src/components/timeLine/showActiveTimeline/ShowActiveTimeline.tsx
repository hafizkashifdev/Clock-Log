
import { useState } from 'react';
import {Col, Row, Tooltip , Modal, Select, DatePicker, TimePicker, Input } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import userProfile from '../../../assets/images/timeline/individualuserprofile.png';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';
import './ShowActiveTimeline.scss';


const ShowActiveTimeline = (props: any) => {
    const [showInActiveTime, setShowInActiveTime] = useState(true);
    const [open, setOpen] = useState(false);
    const [openAddReason, setOpenAddReason] = useState(false);
    const [openAddNote, setOpenAddNote] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const format = 'HH:mm';
    const { TextArea } = Input;
    // const { showAddButton } = props;
    console.log(props.numberOfActive);

    const showModal = () => {
        setOpen(true);
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

       <div>   
        <Row className="ShowActiveTimeline">
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Tooltip placement="top" title={showInActiveTime && 'ClockLog (3h 10m)Task : User Stories'} color="#264653">
            <Col xs={0} md={2} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
            </Tooltip>
            <Col xs={0} md={0} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>}  </Col>
            <Col xs={3} md={2} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}> {!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Tooltip placement="top" title={showInActiveTime && 'Manual Time (15m)'} color="#264653">
            <Col xs={0} md={0} xl={1} className={showInActiveTime ? 'addManualTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
             </Tooltip>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />} </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
           

            <Modal
                title="Add Time"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Save"
            >

                <Row className="d-flex BreadCrum_main">
                    <Col span={3}>
                        <img src={userProfile} width="75%" alt='userProfile' />
                    </Col>
                    <Col span={12}>
                        <h6 className="m-0 fs-16 font-Poppins">Esther Howard</h6>
                        <p className="m-0 fs-12 font-Poppins">Program Manager</p>
                    </Col>
                </Row>
                <Row gutter={14} className="dateTime">
                    <Col xs={24} md={12} lg={12}>
                        <label>Project</label>
                        <Select
                            defaultValue="Buzz Hr"
                            // style={{ width: 230 }}
                            options={[
                                { value: 'Buzz Hr', label: 'Buzz Hr' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </Col>
                </Row>

                <Row gutter={14} className="dateTime">
                    <Col xs={24} md={12}>
                        <label>Task</label>
                        <Select
                            defaultValue="User Stories"
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

                <Row gutter={14} className="dateTime">
                    <Col xs={24} md={12}>
                        <label>From</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} />
                    </Col>
                    <Col xs={24} md={12}>
                        <label>To</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} />
                    </Col>

                </Row>

                <Row className="showTimeClock" justify="space-between">
                    <Col span={2} xs={8} md={4} xl={2} className="AvaliableTimeSlot"><p className="fs-10 font-Poppins">12 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2} className="AvaliableTimeSlot"><p className="fs-10 font-Poppins">2 am</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">4 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">6 am</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">8 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">10 am</p> </Col>
                    <Col span={2} xs={8} md={4} xl={2}><p className="fs-10 font-Poppins">12 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">2 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">4 pm</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">8 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">10 pm</p> </Col>
                    <Col span={2} xs={8} md={4} xl={2}><p className="fs-10 font-Poppins">12 pm</p> </Col>
                </Row>
                <Row>
                    <button className='addTimeBtn cursor-pointer fs-14 font-Poppins p-0' onClick={() => setOpenAddReason(!openAddReason)}><PlusOutlined className="Addicon" />Add Reason</button>
                    {openAddReason &&
                        <TextArea
                            // value={value}
                            // onChange={(e) => setValue(e.target.value)}
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>
                <Row>
                    <button className='addTimeBtn cursor-pointer fs-14 font-Poppins p-0' onClick={() => setOpenAddNote(!openAddNote)}><EditOutlined className="Addicon" />Add Note<InfoCircleOutlined className="infoIcon" /></button>
                    {openAddNote &&
                        <TextArea
                            // value={value}
                            // onChange={(e) => setValue(e.target.value)}
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>

            </Modal>
        </Row>

     </div>

    )
}

export default ShowActiveTimeline