import { Fragment, useState } from "react";
import { Col, Row, Space, Collapse, Progress, Divider, Tooltip } from "antd";
import Table, { ColumnsType } from "antd/es/table";

// Images
import userImage from "../../../assets/images/users/user-1.svg";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

// Components
import CommonCard from "../../card";
import TabCard from "../TabCard/TabCard";
import AttendanceTable from "../AttendanceTable/AttendanceTable";

// SCSS
import "../../hoursTracked/hoursTracked.scss";
import "./ChildTab.scss";

// Mock Data and Interfaces
import {
  IEmployeeHoursTrackedData,
  IEmployeeHoursTrackedTable,
  IEmployeeWorkingLogs,
} from "../../../types/reports/AttendanceInterface";
import {
  EmployeeHoursTrackedData,
  EmployeeWorkingLogs,
  SingleEmployeeRecordTableData,
} from "../../../mock/reports/AttendanceMockData";

const ChildTab = ({ renderChild }: any) => {
  const { Panel } = Collapse;
  const [childAccordianActive, setChildAccordianActive] = useState<
    string[] | string | number | undefined
  >();
  const onChange = (key: string | string[]) => {
    setChildAccordianActive(key);
  };

  console.log("childAccordianActive +++++++++++++++++", childAccordianActive);

  // Single Employee Working Hours Table Colums SINGLEEMPLOYEERECORDTABLECOLUMN
  const SingleEmployeeRecordTableColumn: ColumnsType<IEmployeeHoursTrackedTable> = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Shift Name",
      dataIndex: "shiftName",
      key: "shiftName",
    },
    {
      title: "Actual Start Time",
      dataIndex: "actualStartTime",
      key: "actualStartTime",
    },
    {
      title: "Actual End Time",
      dataIndex: "actualEndTime",
      key: "actualEndTime",
    },
    {
      title: "Overtime",
      dataIndex: "overtime",
      key: "overtime",
    },
    {
      title: "Total Tracked Time",
      dataIndex: "totalTrackedTime",
      key: "totalTrackedTime",
    },
    {
      title: "Attendance Breakdown",
      key: "attendanceBreakdown",
      dataIndex: "attendanceBreakdown",

      render: (_, { attendanceBreakdown }: any) => (
        <>
          <div className="multi-progress-bar">
            {!!attendanceBreakdown.length ? (
              attendanceBreakdown?.map((values: any, i: any) => {
                return (
                  <Fragment key={i}>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Computer Time"
                      color="#37B4A4"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--green"
                        style={{ width: `${values.computerTime}` }}
                      ></div>
                    </Tooltip>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Mobile Time"
                      color="#FF4D4F"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--red"
                        style={{ width: `${values.mobileTime}` }}
                      ></div>
                    </Tooltip>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Manual Time"
                      color="#FDCA64"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--yellow"
                        style={{ width: `${values.manualTime}` }}
                      ></div>
                    </Tooltip>
                  </Fragment>
                );
              })
            ) : (
              <Tooltip
                overlayClassName="class-tooltip day-off"
                title="Day Off"
                color="#D9D9D9"
                placement="topLeft"
              >
                <div className="bar-slots p--grey" style={{ width: "100%" }}></div>
              </Tooltip>
            )}
          </div>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: "1.4rem" }}>
      {renderChild.key === "My" || renderChild.key === undefined ? (
        <>
          <Row gutter={[33, 24]} justify="space-between">
            <Col xs={12} lg={20} className="gutter-row">
              <Space direction="horizontal" size={11}>
                <img
                  src={userImage}
                  alt="user"
                  width="40px"
                  height="40px"
                  className="border-radius-50"
                />
                <h2 className="fs-16 fw-600 title-color">Tayyaba Gul</h2>
              </Space>
            </Col>
            <Col xs={12} lg={4} className="gutter-row text-end">
              <p className="fs-12 fw-400 line-height-16 border-color ">
                Sep 05, 2022 &mdash; Sep 11, 2022
              </p>
            </Col>
          </Row>

          {/* My Tab Cards */}
          <Row>
            <TabCard />
          </Row>

          {/* My Attendance Table */}
          <Row style={{ marginTop: "1.5rem" }}>
            <AttendanceTable />
          </Row>
        </>
      ) : (
        <div className="other-child-tab without-gradient-bg-2">
          <div className="wrapper-tracked-info-content no-scroll-track  without-gradient-bg-2">
            <Collapse
              accordion
              bordered={false}
              onChange={onChange}
              className="accordian-bg-color card-bg-3-border-color border-radius-4"
            >
              {!!EmployeeHoursTrackedData.length &&
                EmployeeHoursTrackedData.map((data: IEmployeeHoursTrackedData) => (
                  <Panel
                    className="accordian-bg-color"
                    key={data?.id}
                    header={
                      <div
                        className={`h--auto bg--light wrapper-header without-gradient-bg-2 title-color  ${
                          childAccordianActive == data?.id
                            ? "h--auto bg--none wrapper-header"
                            : "h--100 bg--light wrapper-header"
                        }`}
                      >
                        <Row align="middle" gutter={16}>
                          <Col>
                            <img src={data?.userImage} alt="User Icon" />
                          </Col>
                          <Col>
                            <div className="fs-16 fw-600 title-color line-height-24">
                              {data?.userName}
                            </div>
                          </Col>
                          {childAccordianActive == data?.id ? (
                            <UpOutlined className="down-icon ico--active title-color" />
                          ) : (
                            <DownOutlined className="down-icon title-color" />
                          )}
                        </Row>
                        <div
                          className={`tracked-info-flex custom-scroll ${
                            childAccordianActive == data?.id
                              ? "dispBlock tracked-info-flex custom-scroll"
                              : "dispNone"
                          }`}
                        >
                          {!!data.timesSlots &&
                            data.timesSlots.map((ele: any, i: any) => (
                              <div
                                className="tracked-info-inner-cards-low accordian-bg-color card-bg-3-border-color"
                                key={i}
                                style={{ color: `${ele?.defaultColor}` }}
                              >
                                <Space>
                                  <img src={ele?.timeIcon} alt="Time Track" />
                                  <h2 className="fs-14 fw-700 ">{ele?.timeHead}</h2>
                                </Space>
                                <span className="fs-14 fw-400 ">{ele?.timeDuration}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    }
                  >
                    <div className="detailed-time-cards ">
                      <div className="card-wrapper custom-scroll-hor ">
                        {!!EmployeeWorkingLogs.length &&
                          EmployeeWorkingLogs.map((item: IEmployeeWorkingLogs) => (
                            <div
                              key={item?.id}
                              className="card without-gradient-bg-2 card-bg-3-border-color"
                              style={{ minWidth: "252px", minHeight: "244px" }}
                            >
                              <CommonCard
                                color={item?.colorClasses?.color}
                                hoverColor={item?.colorClasses?.hoverColor}
                              >
                                <div className="w-100 " style={{ padding: "1rem" }}>
                                  <Space size={16}>
                                    <img
                                      src={item?.headerImage}
                                      alt="calendar"
                                      width="24px"
                                      height="24px"
                                      className="hover-white-image"
                                    />
                                    <h2 className="fs-16 fw-700 line-height-24 m-0">
                                      {item?.name}
                                    </h2>
                                  </Space>
                                  <Space
                                    className="fs-12 fw-600 line-height-18 d-block text-center"
                                    style={{
                                      marginTop: "0.875rem",
                                    }}
                                  >
                                    <Progress
                                      type="circle"
                                      percent={item?.total}
                                      width={80}
                                      format={(percent) => `${percent} ${item?.name}`}
                                      strokeColor={item?.colorClasses?.strokeColor}
                                      trailColor="#D9DBE9"
                                      className="fs-12 m-auto text-center"
                                    />
                                  </Space>
                                  <Space
                                    size={4}
                                    className="w-100 justify-between"
                                    style={{ marginTop: "1.25rem" }}
                                  >
                                    <span className="fs-14 line-height-22 darkBlue-color fw-600">
                                      {item?.title}
                                    </span>
                                    <p className="fs-14 fw-400 line-height-22 m-0">
                                      {item?.total}
                                      {item?.title.includes("Days") && " Days"}
                                    </p>
                                  </Space>
                                  <Divider
                                    style={{ marginTop: "0.313rem", marginBottom: "0.625rem" }}
                                  />
                                  <Space size={4} className="w-100 justify-between ">
                                    <span className="fs-14 line-height-22 darkBlue-color fw-600 d-block ">
                                      {item?.title}
                                    </span>
                                    <p className="fs-14 fw-400 line-height-22 m-0 ">
                                      {item?.total}
                                      {item?.title.includes("Days") && " Days"}
                                    </p>
                                  </Space>
                                </div>
                              </CommonCard>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="">
                      <Table
                        className="wrapper-table"
                        columns={SingleEmployeeRecordTableColumn}
                        dataSource={SingleEmployeeRecordTableData}
                        pagination={{ pageSize: 5 }}
                      />
                    </div>
                  </Panel>
                ))}
            </Collapse>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildTab;
