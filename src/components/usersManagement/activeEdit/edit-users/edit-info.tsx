import { Fragment, useState } from "react";
import {
  Col,
  Radio,
  Select,
  Space,
  Row,
  Form,
  Input,
  Button,
  Switch,
  Popover
  ,
} from "antd";
import UserImg from "../../../../assets/images/users/user-1.svg";
import CustomScreenShotModal from "../../Modals/customScreenSHots";
import PhoneInput from "react-phone-input-2";
import "../../../../sass/common.scss";
interface Props {
  setIsEditPage: any;
  setDeactivateModal: any;
  setTabKey: any;
}
const EditInfo = (props: Props) => {
  const { setIsEditPage, setDeactivateModal, setTabKey } = props;
  ///////////************************* */
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [getPhone, setPhone] = useState<any>();
  const [userData, setUserData] = useState<any>({
    role: "",
    department: "",
    designation: "",
    shift: "",
    location: "",
  });

  const userChangeHandler = (value: any, type: string) => {
    switch (type) {
      case "role":
        setUserData({ ...userData, role: value });
        break;
      case "department":
        setUserData({ ...userData, department: value });
        break;
      case "designation":
        setUserData({ ...userData, designation: value });
        break;
      case "shift":
        setUserData({ ...userData, shift: value });
        break;
      case "location":
        setUserData({ ...userData, location: value });
        break;
      default:
        break;
    }
  };
  ///////////************************* */

  const userRole = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employe" },
  ];
  const userDepartment = [
    { label: "Design", value: "Design" },
    { label: "Business Analysis", value: "Business Analysis" },
    { label: "Accounts", value: "Accounts" },
  ];
  const userDesignation = [
    { label: "UI Design", value: "UI Design" },
    { label: "Mid BA", value: "Mid BA" },
    { label: "Mid Designer", value: "Mid Designer" },
  ];
  const userShift = [
    { label: "Morning", value: "Morning" },
    { label: "Evening", value: "Evening" },
    { label: "Night", value: "Night" },
  ];
  const userLocation = [
    { label: "Lahore", value: "Lahore" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Rawalpindi", value: "Rawalpindi" },
  ];
  const projects = [
    "BuzzHr",
    "ClockLog",
    "StyleSheet",
    "BuzzHr",
    "ForestorApp",
    "BuzzHr",
    "ClockLog",
    "StyleSheet",
    "BuzzHr",
    "ForestorApp",
    "BuzzHr",
    "ClockLog",
    "StyleSheet",
  ];
  const teams = [
    "Design Team",
    "Business Analyst",
    "HR Team",
    "Marketing Team",
    "Developers",
    "UI Designers",
    "Accounts Team",
    "Business Analyst",
    "HR Team",
  ];
  const systemInformation = [
    { label: "IP Address", value: "192.168.0.1" },
    { label: "Date & Time Address", value: "2022/03/04  11:00 PM" },
    { label: "Current App Version", value: "4.5.32" },
    { label: "Last Seen", value: "2022/03/04  11:00 PM" },
  ];
  ///////////************************* */
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState(null)
  const handleProjectsClick = (index: any) => {
    if (selectedProjects === index) {
      setSelectedProjects(null);
    } else {
      setSelectedProjects(index);
    }
  }
  const handleTeamClick = (index: any) => {
    if (selectedTeam === index) {
      setSelectedTeam(null);
    } else {
      setSelectedTeam(index);
    }
  };
  const buttonWidth = 70;
  const handleChange = (value: any) => {
    console.log(value);
  };
  const onChangeStatus = (checked: boolean) => {
    if (!checked) {
      setDeactivateModal(true);
    }
  };
  const text = <span>Title</span>;

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>

  );
  return (
    <div className="invite-users">
      <Space align="start" style={{ paddingTop: "12px" }}>
        <img src={UserImg} alt="userImg" width={30} />
        <div className="setting-user">
          <p className="m-0 fs-16 line-height-18 title-color">
            Azeem Aslam
          </p>
          <p
            className="m-0 fs-12 fw-500 line-height-18"
            style={{ marginBottom: "10px", color: "#848588" }}
          >
            azeem.aslam@ceative.co.uk
          </p>
          <Switch size="small" defaultChecked onChange={onChangeStatus} />
        </div>
      </Space>
      <Row style={{ gap: "20px", marginTop: "30px" }}>
        <Col
          xs={24}
          lg={10}
          className="border-radius-8 box-shadow"
          style={{ padding: "10px 20px" }}
        >
          <h1 className="heading-color fs-20 fw-600">Personal Information</h1>
          <Form layout="vertical">
            <Row gutter={[15, 15]}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>User Name</label>
                <Input
                  placeholder="Type UserName"
                  style={{ width: "100%", borderColor: "#A0ACBB" }}
                  className="users--input--edit-cs-styles"
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>Role</label>
                <Select
                  onChange={handleChange}
                  value={userData?.role ? userData.role : "User Role"}
                  style={{ width: "100%" }}
                  className="users--input--edit-cs-styles select-input-theme"
                  popupClassName="select-theme"
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userRole}
                          value={userData?.role}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "role")
                          }
                        />
                      ),
                      key: "0",
                    },
                  ]}
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>Shift</label>
                <Select
                  value={userData.shift ? userData.shift : "Select Shift"}
                  style={{ width: "100%" }}
                  className="select-input-theme users--input--edit-cs-styles"
                  popupClassName="select-theme"
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userShift}
                          value={userData?.shift}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "shift")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>Location</label>
                <Select
                  value={userData.location ? userData.location : "Location"}
                  style={{ width: "100%" }}
                  className="select-input-theme users--input--edit-cs-styles"
                  popupClassName="select-theme"
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userLocation}
                          value={userData?.location}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "location")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>User ID</label>
                <Input
                  placeholder="Type User ID"
                  style={{ width: "100%" }}
                  className="users--input--edit-cs-styles"
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <div style={{ marginTop: "8px" }} className="phone-edit-styles">
                  <p
                    className="fs-14 m-0"
                    style={{ marginTop: "-10px", color: "#848588" }}
                  >
                    Phone Number
                  </p>
                  <PhoneInput
                    country={"pk"}
                    value={getPhone}
                    onChange={(phone) => setPhone(phone)}
                    inputStyle={{ height: "30px", width: "100%" }}
                    containerStyle={{ marginTop: "2px" }}
                  />
                </div>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label>Department</label>
                <Select
                  value={
                    userData?.department ? userData.department : "Department"
                  }
                  style={{ width: "100%" }}
                  className="select-input-theme users--input--edit-cs-styles"
                  popupClassName="select-theme"
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userDepartment}
                          value={userData?.department}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "department")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <label htmlFor="">Designation</label>
                <Select
                  value={
                    userData.designation
                      ? userData.designation
                      : "Select Designation"
                  }
                  style={{ width: "100%" }}
                  className="select-input-theme users--input--edit-cs-styles"
                  popupClassName="select-theme"
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userDesignation}
                          value={userData?.designation}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "designation")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col
          xs={24}
          lg={10}
          className="border-radius-8 box-shadow"
          style={{ padding: "10px 20px" }}
        >
          <h1 className="heading-color fs-20 fw-600">System Information</h1>
          <Row gutter={[10, 20]}>
            {systemInformation.map((val) => {
              return (
                <Col xs={24} md={9}>
                  <span className="fs-14" style={{ color: "#848588" }}>
                    {val.label}
                  </span>
                  <p className="fs-14 title-color" >
                    {val.value}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row style={{ gap: "20px", marginTop: "30px" }}>
        <Col
          xs={24}
          md={10}
          className="border-radius-8 box-shadow"
          style={{ padding: "10px 20px" }}
        >          <h1 className="heading-color fs-20 fw-600">Project Information</h1>
          <p className="fs-14 title-color">Assigned Project</p>          <div
            className="projects"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid #E8ECEE',
              borderRadius: '5px',
              gap: '5px',
              paddingInline: '10px',
              cursor: 'pointer',
            }}
          >        {projects.map((team, index) => (
            <Fragment key={index}>            <p
              style={{
                backgroundColor: '#F5F5F5',
                borderLeft: '1px solid #E76F51',
                borderRadius: '16px',
                paddingInline: '5px',
                position: 'relative',
              }}
              onClick={() => handleProjectsClick(index)}
            >              {team}
              {selectedProjects === index && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >                  <Popover
                  placement="bottom"
                  overlayClassName="my-popover-users"
                  title=""
                  style={{ padding: "10px" }}
                  content={
                    <div
                    >                        <div
                      onClick={() => handleProjectsClick(index)}
                    >              <span className="team-details" style={{
                      backgroundColor: '#F5F5F5',
                      borderLeft: '1px solid #E76F51',
                      borderRadius: '16px',
                      paddingInline: '5px',
                      position: 'relative',
                    }}
                    >{team}</span>              <span style={{
                      backgroundColor: '#F5F5F5',
                      borderLeft: '1px solid #E76F51',
                      borderRadius: '16px',
                      paddingInline: '5px',
                      marginLeft: "10px",
                      position: 'relative',
                    }}>Daniyal Muneer</span>              </div>                      </div>}
                  trigger="click"
                  visible={true}
                >                    <div style={{ width: '1px', height: '1px' }}></div>                  </Popover>                </div>)}
            </p>          </Fragment>))}
          </div>        </Col>        <Col
            xs={24}
            md={10}
            className="border-radius-8 box-shadow"
            style={{ padding: "10px 20px" }}
          >          <h1 className="heading-color fs-20 fw-600">Team Information</h1>          <>      <p className="fs-14 title-color">Assigned Teams</p>      <div
            className="projects"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid #E8ECEE',
              borderRadius: '5px',
              gap: '5px',
              paddingInline: '10px',
              cursor: 'pointer',
            }}
          >        {teams.map((team, index) => (
            <Fragment key={index}>            <p
              style={{
                backgroundColor: '#F5F5F5',
                borderLeft: '1px solid #E76F51',
                borderRadius: '16px',
                paddingInline: '5px',
                position: 'relative',
              }}
              onClick={() => handleTeamClick(index)}
            >              {team}
              {selectedTeam === index && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >                  <Popover
                  placement="bottom"
                  overlayClassName="my-popover-users"
                  title=""
                  style={{ padding: "10px" }}
                  content={
                    <div
                    >                        <div
                      onClick={() => handleTeamClick(index)}
                    >              <span className="team-details" style={{
                      backgroundColor: '#F5F5F5',
                      borderLeft: '1px solid #E76F51',
                      borderRadius: '16px',
                      paddingInline: '5px',
                      position: 'relative',
                    }}
                    >{team}</span>              <span style={{
                      backgroundColor: '#F5F5F5',
                      borderLeft: '1px solid #E76F51',
                      borderRadius: '16px',
                      paddingInline: '5px',
                      marginLeft: "10px",
                      position: 'relative',
                    }}>Daniyal Muneer</span>              </div>                      </div>}
                  trigger="click"
                  visible={true}
                >                    <div style={{ width: '1px', height: '1px' }}></div>                  </Popover>                </div>)}
            </p>          </Fragment>))}
          </div>    </>        </Col>      </Row>

      <Space style={{ marginBlock: "30px" }}>
        <Button className="btn-cancel" onClick={() => setIsEditPage(false)}>
          Cancel
        </Button>
        <Button className="update-user-setting" style={{ backgroundColor: "#A0ACBB", color: "white", border: "none", borderRadius: "6px" }}>Update</Button>
      </Space>
      <CustomScreenShotModal
        isShowCustomModal={isShowCustomModal}
        setIsShowCustomModal={setIsShowCustomModal}
      />
    </div>
  );
};

export default EditInfo;
