import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TeamSelectedMain } from "./TeamSelectedMain";
// import { TeamSelectedMain } from "./TeamSelectedMain";


const selectedTeamsData: TabsProps["items"] = [
  {
    key: "tasks",
    label: `Tasks`,
  },
  {
    key: "members",
    label: `Members`,
  },
  {
    key: "teams",
    label: `Teams`,
  },
];

export const TeamSelectTasksMain = (props:any) => {
  const [selectedTeamsTask, setSelectedTeamsTask] = useState<any>("");

  const onChange = (key: string) => {
    setSelectedTeamsTask(key)
  };

  
  return (
    <div>
      <Tabs
        defaultActiveKey="activeProjects"
        items={selectedTeamsData.map((item: any) => {
          return {
            key: item.key,
            label: item.label,
            children: (
              <TeamSelectedMain
                key={selectedTeamsTask}
                selectedTeamsTask={selectedTeamsTask}
              />
            ),
          };
        })}
        onChange={onChange}
      />
    </div>
  );
};
