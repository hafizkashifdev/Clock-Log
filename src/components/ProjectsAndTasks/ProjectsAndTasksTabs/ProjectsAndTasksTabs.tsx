import React, { useState } from "react";
import { Col, Row } from "antd";
import "./ProjectsAndTasksTabs.scss";
import createProject from "../../../assets/icons/createproject.svg";
import selectProject from "../../../assets/icons/selectProject.svg";
import archeivedProject from "../../../assets/icons/settings/archived.svg";
import { ProjectsAndTasksTable } from "./ProjectsAndTasksTable";
import { TeamSelectTasksMain } from "./Project&TasksSelectedTeams/TeamSelectTasksMain";
import CreateProjectModal from "./CreateProjectModal/CreateProjectModal";
import { ArchivedProjectTable } from "./ArchivedProjectTable";
import { ArchivedSelectedTeamsMain } from "./ArchivedSelectedTeams/ArchivedSelectedTeamsMain";

export const ProjectsAndTasksTabs = (props: any) => {
  const [IsShowImage, setIsShowImage] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [archivedRowKeys, setArchivedRowKeys] = useState<React.Key[]>([]);

  console.log("archivedRowKeys", archivedRowKeys.length)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    selectedRowKeys && setIsShowImage(!IsShowImage);
    setArchivedRowKeys([])
  };
  const onArchivedSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setArchivedRowKeys(newSelectedRowKeys);
    archivedRowKeys && setIsShowImage(!IsShowImage);
    setSelectedRowKeys([])
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const archivedSelection = {
    archivedRowKeys,
    onChange: onArchivedSelectChange,

  };
  const hasSelected = selectedRowKeys.length > 1;
  const archivedhasSelected = archivedRowKeys.length > 1;

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************",role)
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" xs={24} md={24} lg={11} xl={11}>
        <div className="wrap-projects-and-tasks-tabs without-gradient-bg-2 card-bg-3-border-color">
          <div className="d-flex justify-end row-reverse project-task-search">
            {props.selectedTabs != "archivedProjects" &&  role!="Manager" && (
              <button
                className="fs-16 fw-500 line-height-24 ant-input-affix-wrapper card-bg-color card-bg-3-border-color title-color"
                onClick={() => {
                  setIsCreateModalOpen(true);
                }}
              >
                <img src={createProject} alt="create Project Img" className="title-color"/>
                Create Project
              </button>
            )}

            <CreateProjectModal
              isCreateModalOpen={isCreateModalOpen}
              setIsCreateModalOpen={setIsCreateModalOpen}
            />

            <input
              className="where ant-input-affix-wrapper card-bg-color card-bg-3-border-color title-color"
              placeholder="Search Project"
              type="search"
            />
          </div>
          {props.selectedTabs != "archivedProjects" ?
           <ProjectsAndTasksTable
           rowSelection={rowSelection}
           hasSelected={hasSelected}
         />: 
         <ArchivedProjectTable
         archivedSelection={archivedSelection}
         archivedhasSelected={archivedhasSelected}
         />
          }
         
        </div>
      </Col>
      <Col className="gutter-row" xs={24} md={24} lg={13} xl={13}>
        <div className="select-project  without-gradient-bg-2 card-bg-3-border-color">
          {hasSelected && archivedhasSelected &&
          (
            <img src={archeivedProject} style={{ maxWidth: "100%" }} />
          )
          }


          {selectedRowKeys.length === 0 && archivedRowKeys.length=== 0 &&
          (
            <img src={selectProject} style={{ maxWidth: "100%" }} />
          )
          }
           {selectedRowKeys.length >1 &&  (
            <img src={archeivedProject} style={{ maxWidth: "100%" }} />
          )}
           {archivedRowKeys.length >1 &&  (
            <img src={archeivedProject} style={{ maxWidth: "100%" }} />
          )}
          {selectedRowKeys.length === 1 && <TeamSelectTasksMain />  }
          {archivedRowKeys.length === 1 && <ArchivedSelectedTeamsMain />}

        </div>
      </Col>
    </Row>
  );
};
