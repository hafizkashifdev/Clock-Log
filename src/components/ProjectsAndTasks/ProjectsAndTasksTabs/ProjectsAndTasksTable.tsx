import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Dropdown, Space, Table } from "antd";
import Dots from "../../../assets/icons/dots.png"
import editIcon from "../../../assets/icons/settings/projectandtasks/edit.svg";
import editIcon1 from "../../../assets/icons/settings/projectandtasks/edit1.svg";
import deleteIcon from "../../../assets/icons/settings/projectandtasks/delete.svg";
import deleteIcon1 from "../../../assets/icons/settings/projectandtasks/delete1.svg";
import archeive from "../../../assets/icons/settings/projectandtasks/archeive.svg";
import archeive1 from "../../../assets/icons/settings/projectandtasks/archive1.svg";
import archeiv from "../../../assets/icons/settings/projectandtasks/archive.svg";
import duplicate from "../../../assets/icons/settings/projectandtasks/duplicate.svg";
import duplicate1 from "../../../assets/icons/settings/projectandtasks/duplicate1.svg";
import deleteWhiteIcon from "../../../assets/icons/settings/projectandtasks/deletewhite.svg";
import managerImage from "../../../assets/icons/settings/projectandtasks/managerImage.svg";
import "./ProjectAndTasksTable.scss";
import { activeProjectdata } from "../../../mock/SettingProjectAndTasks";
import ProjectAndTaskDeleteModal from "./ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import ProjectAndTaskArchive from "./ProjectAndTasksModals/ProjectAndTaskArchive";
import CreateProjectModal from "./CreateProjectModal/CreateProjectModal";
import ProjectAndTaskDuplicate from "./ProjectAndTasksModals/ProjectAndTaskDuplicate";


export const ProjectsAndTasksTable = (props: any) => {
  const { rowSelection, hasSelected } = props;
  const [isDeleteActiveOpen, setIsDeleteActiveOpen] = useState<boolean>(false);
  const [isArchiveActiveOpen, setIsArchiveActiveOpen] = useState<boolean>(false);
  const [isDuplicateActiveOpen, setIsDuplicateActiveOpen] = useState<boolean>(false);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************",role)

  
    const items: any = [
    {
    
      label: (
        <Space onClick={()=> role=="Manager" ? setIsCreateModalOpen(false):setIsCreateModalOpen(true)}>
         {role=="Manager" ?  <img src={editIcon1} alt="" />: <img src={editIcon} alt="" />} 
         
          <p className={role=="Manager"?'opacity-4':''}>Edit</p>
        </Space>
      )
    
      ,
      key: "1",
    },

    {
      label: (
        <Space onClick={()=> role=="Manager" ? setIsDuplicateActiveOpen(false):setIsDuplicateActiveOpen(true)}>
          {role=="Manager" ?  <img src={duplicate1} alt="" />: <img src={duplicate} alt="" />} 
          <p className={role=="Manager"?'opacity-4':''}>Duplicate</p>
        </Space>
      ),
      key: "2",
    },
    
    {
      label: (
        <Space  onClick={()=> role=="Manager" ? setIsDeleteActiveOpen(false):setIsDeleteActiveOpen(true)}>
          {role=="Manager" ?  <img src={deleteIcon1} alt="deleteIcon" />: <img src={deleteIcon} alt="deleteIcon" />} 
          <p className={role=="Manager"?'opacity-4':''}>Delete</p>
        </Space>
      ),
      key: "3",
    },
    {
      label: (
        <Space  onClick={()=> role=="Manager" ? setIsArchiveActiveOpen(false):setIsArchiveActiveOpen(true)}>
          {role=="Manager" ?  <img src={archeive1} alt="archeive1" />: <img src={archeiv} alt="archeive1" />} 
          <p className={role=="Manager"?'opacity-4':''}>Archive</p>
        </Space>
      ),
      key: "4",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Project Name",
      dataIndex: "projectname",
      render: (projectname) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{projectname}</span>
      ),
    },
    {
      title: "Manager",
      dataIndex: "manager",
      render: (manager) => (
        <div className="d-flex align-items-center">
          <img
            src={managerImage}
            alt="managerImage"
            style={{
              height: "24px",
              width: "24px",
              borderRadius: "200px",
              marginRight: "8px",
            }}
          />
          <span className="fs-14 fw-400 line-height-21 grey-color">{manager}</span>
        </div>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      render: (createdDate) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{createdDate}</span>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      render: (dueDate) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{dueDate}</span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          className="actionDropDown"
        >
          <Space>
            <div className="border-color cursor-pointer">
            <img src={Dots} alt="menu" />
            </div>
          </Space>
        </Dropdown>
      ),
    },
  ];

  

  return (
    <div className="project-and-task-table">
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? (
            <div className="d-flex wrap-selected-icons">
              <div className="bgError-color d-flex align-items-center justify-center selected-icons">
                <img
                  src={deleteWhiteIcon}
                  onClick={() => setIsDeleteActiveOpen(true)}
                />
              </div>
              <div
                className="d-flex align-items-center justify-center selected-icons archieve-modal"
                style={{backgroundColor:"#E9C46A"}}
                onClick={() => setIsArchiveActiveOpen(true)}
                
              >
                <img src={archeive} />
                
              </div>
            </div>
          ) : (
            ""
          )}

          
        </span>
      </div>

      <Table
        
        rowSelection={rowSelection}
        columns={columns}
        className="ant-table-content wrapper-table"
        dataSource={activeProjectdata}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
      />

{/* modals start here */}
<CreateProjectModal isCreateModalOpen={isCreateModalOpen} setIsCreateModalOpen={setIsCreateModalOpen}/>
<ProjectAndTaskDuplicate isDuplicateActiveOpen={isDuplicateActiveOpen} setIsDuplicateActiveOpen={setIsDuplicateActiveOpen}/>
<ProjectAndTaskDeleteModal isDeleteActiveOpen={isDeleteActiveOpen} setIsDeleteActiveOpen={setIsDeleteActiveOpen}/>
<ProjectAndTaskArchive isArchiveActiveOpen={isArchiveActiveOpen} setIsArchiveActiveOpen={setIsArchiveActiveOpen}/>

    </div>
  );
};
