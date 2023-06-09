import React, { useState } from "react";
import { Tabs } from "antd";
import { ProjectsAndTasksTabs } from "./ProjectsAndTasksTabs/ProjectsAndTasksTabs";



const tabsData: any = [
  {
    key: "activeProjects",
    label: `Active Projects`,
  },
  {
    key: "archivedProjects",
    label: `Archived Projects`,
  },
];

export const ProjectsAndTasksMain = (props: any) => {
  const [selectedTabs, setSelectedTabs] = useState<any>("");

  const onChange = (key: string) => {
    console.log(key,"sdjkwd");
    setSelectedTabs(key)
  };
// {child}:any

  return (
    <div>
      <Tabs
        className="wrapper-tabs"
        defaultActiveKey="activeProjects"
        items={tabsData.map((item:any) => {
          return  {
            key: item.key,
            label: item.label,
            children : <ProjectsAndTasksTabs key={selectedTabs} selectedTabs={selectedTabs} />
          }
        })}
       
        onChange={onChange}
      />
    </div>
  );
};
