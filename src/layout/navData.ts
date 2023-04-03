import { NavItems } from "../types/NavbarTypes";
import Dashboard from "../assets/images/header/dashboard.png";
import ScreenCast from "../assets/images/header/screencast.png";
import Settings from "../assets/images/header/setting.png";
import Reports from "../assets/images/header/reports.png";
// import Help from "../assets/images/header/help.png";
import Users from "../assets/images/header/users.png";
import Integrations from "../assets/images/header/integrations.png";
import LatestUpdates from "../assets/images/header/latest-updates.png";
import ProjectTasks from '../assets/images/header/project_tasks.png';
import WorkSchedule from '../assets/images/header/work-schedule.png';
import ScheduleReports from '../assets/images/header/schedule-reports.png';

export const navItems: NavItems[] = [
  {
    toshowforrole: [
      'Admin', 'Manager', "Employee",
    ],
    title: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
    alt: "dashboard"
  },
  {
    toshowforrole: [
      'Admin', 'Manager', "Employee",
    ],
    title: "Screencasts",
    path: "/screencasts",
    icon: ScreenCast,
    alt: "screencast",
  },
  {
    toshowforrole: [
      'Admin', 'Manager',
    ],
    title: "Settings",
    path: "/settings",
    icon: Settings,
    alt: "settings",
    subItems: [
      {
        toshowforrole: [
          'Admin'
        ],
        title: "Company Settings",
        path: "settings/company-settings",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Work Schedule",
        path: "settings/work-schedule",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Project & Tasks",
        path: "settings/project-tasks",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Manage Teams",
        path: "settings/manage-teams",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Web & Apps",
        path: "settings/web-apps",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Distraction alerts",
        path: "settings/distraction-Alerts",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Scheduled Reports",
        path: "settings/scheduled-Reports",
      },
      {
        toshowforrole: [
          'Admin'
        ],
        title: "Achievements",
        path: "settings/achievements",
      },
      {
        toshowforrole: [
          'Admin'
        ],
        title: "Blocking",
        path: "settings/blocking",
      },
    ],
  },

  {
    toshowforrole: [
      "Employee",
    ],
    title: "Schedule Reports",
    path: "settings/scheduled-Reports",
    icon: ScheduleReports,
    alt: 'schedulereports'
  },
  {
    toshowforrole: [
      'Admin', 'Manager', "Employee",
    ],
    title: "Reports",
    path: "reports/activity-log",
    icon: Reports,
    alt: "reports",
    subItems: [
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Activity Log",
        path: "reports/activity-log",
      },
      {
        toshowforrole: [
          'Admin', 'Employee', 'Manager'
        ],
        title: "Project & Task",
        path: "reports/project-task/1",
      },
      {
        toshowforrole: [
          'Admin', 'Employee', 'Manager'
        ],
        title: "Web & App Usage",
        path: "reports/web-app-usage",
      },
      {
        toshowforrole: [
          'Admin', 'Employee', 'Manager'
        ],
        title: "Attendance",
        path: "reports/attendance",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Top Users",
        path: "reports/top-users",
      },
      {
        toshowforrole: [
          'Admin', 'Employee', 'Manager'
        ],
        title: "Timeline",
        path: "reports/timeline",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Customized",
        path: "reports/customized",
      },
      {
        toshowforrole: [
          'Admin', 'Manager', 'Employee'
        ],
        title: "Hour Tracked",
        path: "reports/hour-tracked",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Workload Balance",
        path: "reports/workload-balance",
      },
      {
        toshowforrole: [
          'Admin', 'Manager'
        ],
        title: "Comparison",
        path: "reports/comparison",
      },
      {
        toshowforrole: [
          'Admin', 'Employee', 'Manager'
        ],
        title: "Timesheet",
        path: "reports/timesheet",
      },
    ],
  },
  {
    toshowforrole: [
      "Employee",
    ],
    title: "Work Schedules",
    path: "settings/work-schedule",
    icon: WorkSchedule,
    alt: 'workschedules'
  },
  {
    toshowforrole: [
      'Admin',
    ],
    title: "Users",
    icon: Users,
    alt: "users",
    path: "/users-management",
  },
  {
    toshowforrole: [
      'Admin',
    ],
    title: "Integrations",
    path: "/integrations",
    icon: Integrations,
    alt: "integration"
  },
  // {
  //   toshowforrole: [
  //     'Admin', 'Manager', "Employee",
  //   ],
  //   title: "Help",
  //   path: "/help",
  //   icon: Help,
  //   alt: "help"
  // },
  {
    toshowforrole: [
      "Employee",
    ],
    title: "Projects & Tasks",
    path: "settings/project-tasks",
    icon: ProjectTasks,
    alt: 'projectandtasks'
  },
  {
    toshowforrole: [
      'Admin', 'Manager', "Employee",
    ],
    title: "Latest Updates",
    path: "/latest-updates",
    icon: LatestUpdates,
    alt: 'latestupdates'
  },



];
