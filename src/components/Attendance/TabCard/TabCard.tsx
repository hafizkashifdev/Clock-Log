import React from "react";
import { Divider, Progress, Space } from "antd";

// Components
import CommonCard from "../../card";

// Interfaces
import { IEmployeeWorkingLogs } from "../../../types/reports/AttendanceInterface";


// Mock Data
import { EmployeeWorkingLogs } from "../../../mock/reports/AttendanceMockData";

// SCSS
import "./TabCard.scss";



const TabCard = () => {
  return (
    <div className="card-wrapper custom-scroll-hor">
      {!!EmployeeWorkingLogs.length && EmployeeWorkingLogs.map((item: IEmployeeWorkingLogs) => (
        <div key={item?.id} className="card" style={{ minWidth: "252px", minHeight: "244px" }}>
          <CommonCard color={item?.colorClasses?.color} hoverColor={item?.colorClasses?.hoverColor}>
            <div className="w-100" style={{ padding: "1rem" }}>
              <Space size={16}>
                <img
                  src={item?.headerImage}
                  alt="calendar"
                  width="24px"
                  height="24px"
                  className="hover-white-image"
                />
                <h2 className="fs-16 fw-700 line-height-24 m-0" >
                  {item?.name}
                </h2>
              </Space>
              <Space
                className="fs-12  d-block title-color text-center"
                style={{
                  marginTop: "0.875rem",
                }}
              >
                <Progress
                  type="circle"
                  percent={item?.total}
                  width={80}
                  format={(percent) => `${!(item?.overtime || item?.hoursWorked || item?.lastWorkingDays) ? percent : ""} ${item?.hoursWorked || item?.overtime || item?.lastWorkingDays || item?.name.split(" ")[0] }`}
                  strokeColor={item?.colorClasses?.strokeColor}
                  trailColor="#D9DBE9"
                  className="fs-12 fw-600 m-auto text-center"
                />
              </Space>
              <Space
                size={4}
                className="w-100 justify-between"
                style={{ marginTop: "1.25rem" }}
              >
                <span className="fs-14 fw-600 darkBluee-color line-height-22">
                  Total {item?.title.split(" ")[0]}
                </span>
                <p className="fs-14 fw-400 line-height-22 m-0">{item?.total}{item?.title.includes("Days") && " Days"}</p>
              </Space>
              <Divider
                style={{ marginTop: "0.313rem", marginBottom: "0.625rem" }}
              />
              <Space size={4} className="w-100 justify-between ">
                <span className="fs-14 fw-600 darkBluee-color line-height-22">
                  {item?.title}
                </span>
                <p className="fs-14 fw-400 line-height-22 m-0">{item?.total}{item?.title.includes("Days") && " Days"}</p>
              </Space>
            </div>
          </CommonCard>
        </div>
      ))}
    </div>
  );
};

export default TabCard;
