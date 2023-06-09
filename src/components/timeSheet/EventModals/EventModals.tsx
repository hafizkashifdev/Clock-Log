import React from "react";
import { Col, Modal, Progress, Row, Table } from "antd";
import "./EventModals.scss";
import { activitiesMockData, scheduledEventMockData } from "../../../mock/timeSheetMockData";
import DeleteIcon from "../../../assets/images/timeSheet/deleteIcon.png";

const EventModals = (props: any) => {
    const { isModalOpen, setIsModalOpen, timeSheetEvent } = props;
    const event = timeSheetEvent?.event?._def;
    const eventId = timeSheetEvent?.event?._def.publicId
    return (
        <>
            <Modal title={event?.title} open={eventId === '2' || eventId === '3' ? isModalOpen : ''} className="timesheet-modal-wrapper" onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                {eventId === '2' && (
                    <>
                        <div className="event-modal-wrap">
                            {scheduledEventMockData.map((item) => (
                                <div className="event-modal-item d-flex align-center" key={item.id}>
                                    <h2 className="fs-16 fw-600 title-color m-0 ">{item.title}:</h2> &nbsp;
                                    <p className="title-color fs-14 fw-500 m-0 grey-color">{item.desc}</p>
                                    <p className="title-color fs-14 fw-500 m-0 event-link cursor-pointer">{item.link}</p>
                                </div>
                            ))}
                        </div>
                        <div className="delete-modal d-flex align-center cursor-pointer">
                            <img src={DeleteIcon} alt="" />
                            <p className="fs-12 fw-500 grey-color m-0">Delete</p>
                        </div>
                    </>
                )}
                {eventId === '3' && (
                    <>
                        <Row gutter={14} className="gmailModal">
                            <Col xs={16}>
                                <h6 className="fs-16 fw-600">Name</h6>
                                <p className="m-15 fs-14 fw-500">Gmail</p>
                                <p className="m-15 fs-14 fw-500">Outlook</p>
                                <p className="m-15 fs-14 fw-500">Monday</p>
                            </Col>
                            <Col xs={8}>
                                <h6 className="fs-16 fw-600">%usage</h6>
                                <div className="d-flex align-items-center m-15">
                                    <span className="fs-14 fw-500">50%</span> <Progress percent={50} strokeColor="#2A9D8F" />
                                </div>
                                <div className="d-flex align-items-center m-15">
                                    <span className="fs-14 fw-500">35%</span> <Progress percent={35} strokeColor="#2A9D8F" />
                                </div>
                                <div className="d-flex align-items-center m-15">
                                    <span className="fs-14 fw-500">20%</span> <Progress percent={20} strokeColor="#2A9D8F" />
                                </div>
                            </Col>
                        </Row>
                    </>
                )}

            </Modal>
        </>
    );
};

export default EventModals;
