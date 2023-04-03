import { Col, DatePicker, Form, Modal, Row, Select, TimePicker } from 'antd'
import React, { useState } from 'react';
import { appliedWorkSchedule, applyMorningWorkSchedule, selectSchedule, selectUser } from '../../../../mock/applyWorkSchedule';
import WeeksDays from '../../../../shared/weeksDays/weeksDays';
import './addModal.scss';

interface IProps {
    isAddModal: boolean;
    setIsAddModal: any;
}

const AddModal = (props: IProps) => {
    const { isAddModal, setIsAddModal } = props;
    const [weeksArray, setWeeksArray] = useState<any>([]);
    const [applyWorkData, setApplyWorkData] = useState<any>({
        selectUser: {},
        selectSchedule: {},
        effectiveFromDate: {},
        effectiveToDate: {}
    })
    const [form] = Form.useForm();

    const onFinish = () => {

    };


    const handleAddModal = (value: any, type: string) => {
        switch (type) {
            case 'selectUser':
                setApplyWorkData({ ...applyWorkData, selectUser: value });
                break;
            case 'selectSchedule':
                setApplyWorkData({ ...applyWorkData, selectSchedule: value });
                break;
            case 'effectiveFromDate':
                setApplyWorkData({ ...applyWorkData, effectiveFromDate: value });
                break;
            case 'effectiveToDate':
                setApplyWorkData({ ...applyWorkData, effectiveToDate: value });
                break;
            default:
                break;
        }
    }

    console.log('applyWorkData', applyWorkData);



    return (
        <>
            <Modal title="Apply Work Schedule" open={isAddModal} onOk={() => setIsAddModal(false)} onCancel={() => setIsAddModal(false)} className="add-work-modal-wrapper" okText="Save" width="100%" style={{ maxWidth: "" }}>
                <div className='apply-work'>
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row gutter={[22, 16]} align="bottom">
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap ">
                                <Form.Item label="Select User" name={["selectUser"]} rules={[{ required: true, message: "Input required" }]} >
                                    <Select
                                        labelInValue
                                        style={{ width: "100%", }}
                                        defaultValue={{ value: 'Select', label: 'Select' }}
                                        onChange={(val) => handleAddModal(val, 'selectUser')}
                                        options={selectUser}
                                    />
                                </Form.Item>

                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Select Schedule" name={["selectSchedule"]} rules={[{ required: true, message: "Input required" }]}>
                                    <Select
                                        labelInValue
                                        style={{ width: "100%", }}
                                        defaultValue={{ value: 'Select', label: 'Select' }}
                                        onChange={(val) => handleAddModal(val, 'selectSchedule')}
                                        options={selectSchedule}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Effective From" name={["effectiveFrom"]} rules={[{ required: true, message: "Input required" }]}>
                                    <DatePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={12} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Effective To" name={["effectiveTo"]} rules={[{ required: true, message: "Input required" }]}>
                                    <DatePicker onChange={(val) => handleAddModal(val, 'effectiveToDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Schedule Start Time" name={["scheduleStartTime"]} rules={[{ required: true, message: "Input required" }]}>
                                    <TimePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Schedule End Time" name={["scheduleEndTime"]} rules={[{ required: true, message: "Input required" }]}>
                                    <TimePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap d-flex align-center" >
                                <label className='fs-14 fw-600 m-0'>Total Hours: </label> &nbsp;
                                <span className='fs-20 fw-500 primary-color m-0'>7h</span>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Break Start Time" name={["breakStartTime"]} rules={[{ required: true, message: "Input required" }]}>
                                    <TimePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Break End Time" name={["breakEndTime"]} rules={[{ required: true, message: "Input required" }]}>
                                    <TimePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap d-flex align-center" >
                                <label className='fs-14 fw-600 m-0'>Min.Effective Hours: </label> &nbsp;
                                <span className='fs-20 fw-500 primary-color m-0'>6.5h</span>
                            </Col>
                        </Row>

                        {applyWorkData?.selectSchedule?.label === 'Morning' &&
                            <>
                                <div className='add-work-schedule'>
                                    <Row gutter={[0, 30]} justify="space-between">
                                        {applyMorningWorkSchedule.map((item) => (
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="apply-work-field-wrap" key={item.id}>
                                                <label className='fs-14 fw-600 line-height-18 grey-color'>{item.title}</label>
                                                <p className='fs-14 line-height-20 border-color m-0'>{item.desc}</p>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </>
                        }
                        {applyWorkData?.selectSchedule?.label === 'Morning' && 
                        <WeeksDays label={"Applied On"} setWeeksArray={setWeeksArray} weeksArray={weeksArray} />
                        }
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AddModal