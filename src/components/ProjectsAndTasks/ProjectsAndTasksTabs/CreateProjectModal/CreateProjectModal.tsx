import { Modal, Tabs } from 'antd';
import React, { useState } from 'react'
import { CreateProject } from '../CreateProject';

const CreateProjectModal = ({isCreateModalOpen, setIsCreateModalOpen}:any) => {

    const [createProjectTabs, setCreateProjectTabs] = useState<any>("");
    const [cancelCreateProjectTabs, setCancelCreateProjectTabs] = useState<any>();
      // tabs*****************************
  const onChange = (key: string) => {
    console.log(key);
    console.log("keyyyyyyyyyyyyyy",key);
    
    setCreateProjectTabs(key);
  };

  console.log("createProjectTabs-------", createProjectTabs)


    const createProjectsTabsData: any = [
        {
          key: "project",
          label: `Project`,
        },
        {
          key: "members",
          label: `Members`,
        },
      ];
      
  return (
    <>
    <Modal
            
            title="Create Project"
            centered
            open={isCreateModalOpen}
            onOk={() => {
              setIsCreateModalOpen(false);
            }}
            onCancel={() => {
              setIsCreateModalOpen(false);
            }}
            footer={null}
            // onSave={handleSave}
          >
            <div>
              <Tabs
               defaultActiveKey={createProjectTabs ?? ""}
               activeKey={createProjectTabs ? createProjectTabs : "project"}
               
                items={createProjectsTabsData.map((item: any) => {
                  return {
                    key: item.key,
                    label: item.label,
                    children: (
                      <CreateProject
                        key={createProjectTabs}
                        setCreateProjectTabs={setCreateProjectTabs}
                        createProjectTabs={createProjectTabs}
                        setIsCreateModalOpen={()=> setIsCreateModalOpen(false)}
                      />
                    ),
                  };
                })}
                onChange={onChange}
              />
            </div>
          </Modal></>
  )
}

export default CreateProjectModal