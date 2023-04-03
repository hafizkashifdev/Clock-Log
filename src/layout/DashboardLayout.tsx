import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./navBar";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Layout, Row } from "antd";
import "../sass/common.scss";
import "./style.scss";
import CustomizedDashboard from "../shared/CustomizedDashboard/customizedDashboard";
import SelectUserFilter from "../shared/selectUser/selectUser";
import { useContext, useEffect } from "react";
import { FilterContext } from "../components/DatePicker/datePicker";
import DateRangePickerComp from "../shared/datePicker/DatePicker";
// import City from "../shared/CityZone/CityZoneTime";
import Category from "../shared/Category/category";
import ExportOption from "../shared/Export/ExportOptions";
// import AddModal from "../components/webApps/AddModal";
import TimeZone from "../shared/timeZone/timeZone";
import InviteUserModal from "../shared/inviteUser";
import AddServcesModal from "../shared/AddServices/addServices";
import { AddIntegrationBtn } from "../pages/Integrations";
import AddWorkSchedules from "../shared/WorkSchedule";
import ScheduleReports from "../shared/ScheduleReports";
const { Content } = Layout;

const DashboardLayout = ({ children }: any) => {
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  const selectUsersPaths = [
    "Dashboard",
    `${role === "Admin" || role === "Manager" ? "Screencasts" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports web-app-usage" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports activity-log" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports project-task/1" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports timeline" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports customized" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports hour-tracked" : ""}`,
    `${
      role === "Admin" || role === "Manager" ? "Reports workload-balance" : ""
    }`,
  ];
  // const adWorkSchedulePath = ["Settings work-schedule"];
  const datePickerPaths = [
    "Screencasts",
    "Dashboard",
    "Reports web-app-usage",
    "Reports project-task/1",
    "Reports timeline",
    "Reports customized",
    "hour-tracked",
    "Reports workload-balance",
    "Reports comparison",
    "Reports timesheet",
    "Reports attendance",
    "Reports hour-tracked",
    `${role === "Admin" || role === "Manager" ? "Reports activity-log" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports top-users" : ""}`,
  ];
  const scheduleReportPaths = [
    "Reports web-app-usage",
    "Reports project-task/1",
    "Reports timeline",
    "Reports customized",
    "hour-tracked",
    "Reports workload-balance",
    "Reports comparison",
    "Reports timesheet",
    "Reports attendance",
    "Reports hour-tracked",
    `${role === "Admin" ? "Settings web-apps" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports activity-log" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports top-users" : ""}`,
  ];
  const ExportPaths = [
    "Dashboard",
    "Reports project-task/1",
    // `${(role === "Admin") ? "Screencasts" : ""}`,
    `${role === "Admin" ? "Settings web-apps" : ""}`,
    `${role === "Admin" || role === "Employee" ? "Reports web-app-usage" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports activity-log" : ""}`,
    "Reports web-app-usage",
    "Reports attendance",
    "Reports timeline",
    "Reports workload-balance",
    "Reports hour-tracked",
    "Settings web-apps",
    "Reports top-users",
    "Reports comparison",
    "Users-management",
    "Reports timesheet",
  ];
  const TimeZonePaths = [
    "Screencasts",
    "Settings ",
    "Reports project-task/1",
    "Reports web-app-usage",
    `Reports ${role === "Admin" || role === "Manager" ? "web-app-usage" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports activity-log" : ""}`,
    `${role === "Admin" || role === "Manager" ? "Reports timeline" : ""}`,
  ];
  // const [addCategory, setAddCategory] = useState<boolean>(false);
  const location = useLocation();
  const reportPath = location?.pathname?.includes("reports");
  const accountPath = location?.pathname?.includes("my-account");
  // const {token: { colorBgContainer }} = theme.useToken();
  const captilizeStrinng = (value: string) => {
    let newValue = value.replace("-", " ");
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
    return newValue;
  };

  let path = location?.pathname.slice(1);
  path = path.replaceAll("/", " ");
  path = path.charAt(0).toUpperCase() + path.slice(1);
  const index = path.indexOf("/");
  const result = path.slice(0, index);
  let breadCrumbItems = path.includes("project-task")
    ? result.trim().split(" ")
    : path.trim().split(" ");

  breadCrumbItems = breadCrumbItems.map((item: string) =>
    captilizeStrinng(item)
  );
  breadCrumbItems = breadCrumbItems.map((item: string) => {
    if (item === "Web apps") {
      return "Website & App Classification";
    } else if (item === "Web app-usage") {
      return "Website and App Usage";
    } else if (item === "Project task") {
      return "Project & Tasks";
    } else {
      return item;
    }
  });

  const { state, dispatch }: any = useContext(FilterContext);
  function showUserFilter() {
    dispatch({ type: "updateComponentFilter", payload: true });
    dispatch({ type: "updateComponentFilterScreenCast", payload: true });
    dispatch({ type: "updateComponentFilterActivity", payload: true });
    dispatch({ type: "updateComponentFilterReports", payload: true });
  }
  useEffect(() => {
    showUserFilter();
  }, []);
  const { dashboard, screenCasts, activityLog, reports } = state;
  return (
    <>
      {" "}
      <Layout className="layout">
        {" "}
        <NavBar />{" "}
        <Content className="main-content bgLight-color">
          {" "}
          {path !== "Dashboard" && (
            <Breadcrumb
              separator=">"
              className="title-color capitalize"
              style={{ padding: "0.1rem 0 0" }}
            >
              {" "}
              <Breadcrumb.Item>
                {" "}
                <HomeOutlined style={{ color: "#E76F51" }} />{" "}
              </Breadcrumb.Item>{" "}
              <Breadcrumb.Item>
                {" "}
                <Link to="/dashboard">Dashboard</Link>{" "}
              </Breadcrumb.Item>{" "}
              {breadCrumbItems.map((breadCrumb: string, index: number) =>
                breadCrumbItems.length - 1 !== index ? (
                  <Breadcrumb.Item key={uuidv4()}>
                    {" "}
                    <Link
                      to={
                        breadCrumb === "Reports"
                          ? "/reports/activity-log"
                          : `/${breadCrumb.toLocaleLowerCase()}`
                      }
                    >
                      {breadCrumb}
                    </Link>{" "}
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item className="title-color" key={uuidv4()}>
                    {" "}
                    {breadCrumb}
                  </Breadcrumb.Item>
                )
              )}
            </Breadcrumb>
          )}
          {/* top title and icon section */}
          <Row
            style={{
              padding: `${
                path === "Dashboard" ? "0.4rem 0 1.25rem" : "0rem 0 1.5rem"
              }`,
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
            className="d-flex justify-between align-items-center"
          >
            {" "}
            <Col>
              {" "}
              <h1
                style={{ display: "inline-block" }}
                className="title-color fs-24 fw-600 capitalize"
              >
                {" "}
                {breadCrumbItems[breadCrumbItems.length - 1] ===
                "Website and App Usage"
                  ? "Website & App Usage"
                  : breadCrumbItems[breadCrumbItems.length - 1]}
              </h1>{" "}
            </Col>{" "}
            <Col style={{ display: "block" }}>
              {" "}
              <Row
                style={{
                  gap: 12,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {" "}
                {scheduleReportPaths?.includes(path) && (
                  <Col>
                    {" "}
                    <ScheduleReports />{" "}
                  </Col>
                )}
                {path === "Settings web-apps" && <AddServcesModal />}
                {path === "Reports customized" && (
                  <Col>
                    {" "}
                    <p
                      style={{ textAlign: "center", marginRight: 6 }}
                      className="m-0 border-color"
                    >
                      {" "}
                      March 16,2022
                    </p>{" "}
                  </Col>
                )}
                {selectUsersPaths?.includes(path) && (
                  <Col>
                    {" "}
                    <SelectUserFilter
                      activityLog={activityLog}
                      dashboard={dashboard}
                      reports={reports}
                    />{" "}
                  </Col>
                )}
                {path === "Dashboard" && (
                  <Col>
                    {" "}
                    <CustomizedDashboard dashboard={dashboard} />{" "}
                  </Col>
                )}
                {path === "Screencasts" && (
                  <Col>
                    {" "}
                    <Category
                      activityLog={activityLog}
                      screenCasts={screenCasts}
                      path={path}
                    />{" "}
                  </Col>
                )}
                {path === "Users-management" && (
                  <Col>
                    {" "}
                    <InviteUserModal />{" "}
                  </Col>
                )}
                {TimeZonePaths?.includes(path) && (
                  <Col>
                    {" "}
                    <TimeZone
                      activityLog={activityLog}
                      screenCasts={screenCasts}
                      path={path}
                    />{" "}
                  </Col>
                )}
                {datePickerPaths?.includes(path) && (
                  <Col>
                    {" "}
                    <DateRangePickerComp />
                  </Col>
                )}
                {ExportPaths?.includes(path) && (
                  <Col>
                    {" "}
                    <ExportOption />{" "}
                  </Col>
                )}
                {path === "Integrations" && <AddIntegrationBtn />}
                {path === "Settings work-schedule" && <AddWorkSchedules />}
              </Row>{" "}
            </Col>{" "}
          </Row>{" "}
          {/* pages render */}
          {path === "Dashboard" || path === "My-account" ? (
            <>{children || <Outlet />}</>
          ) : (
            <div
              className={`${
                result?.includes("Reports")
                  ? "site-layout-reports"
                  : "site-layout-content card-bg-color"
              } common-layout-margin `}
              style={{
                background: reportPath || accountPath ? "transparent" : "",
                minHeight: "80vh",
                borderRadius: "8px",
              }}
            >
              {" "}
              {children || <Outlet />}
            </div>
          )}
        </Content>{" "}
      </Layout>{" "}
    </>
  );
};
export default DashboardLayout;
