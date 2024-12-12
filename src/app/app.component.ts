import { Component } from '@angular/core';
interface SubMenu {
  link_name: string;
  link: string;
  icon: string;
  Child_sub_menu?: SubMenu[];
}

interface MainMenu {
  link_name: string;
  link: string;
  icon: string;
  sub_menu: SubMenu[];
  Child_sub_menu: SubMenu[];
  action?: Function;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {


  Mainsidebar: MainMenu[] = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "fas fa-tachometer-alt",
      sub_menu: [],
      Child_sub_menu: []
    },
    {
      link_name: "My Profile",
      link: "/myprofile",
      icon: "fas fa-user",
      sub_menu: [
        { link_name: "Employee Info", link: "/myprofile/employee", icon: "fas fa-id-card", Child_sub_menu: [] },
        { link_name: "Profile", link: "/myprofile/profile", icon: "fas fa-user-circle", Child_sub_menu: [] },
        { link_name: "Document", link: "/myprofile/document", icon: "fas fa-file-alt", Child_sub_menu: [] },
        { link_name: "Bank", link: "/myprofile/bank", icon: "fas fa-university", Child_sub_menu: [] }
      ],
      Child_sub_menu: []
    },
    {
      link_name: "HRM System",
      link: "/admin",
      icon: "fas fa-user-shield",
      sub_menu: [
        {
          link_name: "Employee SetUp",
          link: "",
          icon: "fas fa-users-cog",
          Child_sub_menu: [
            { link_name: "Employee List", link: "", icon: "fas fa-users" }
          ]
        },
        {
          link_name: "Payroll SetUp",
          link: "",
          icon: "fas fa-dollar-sign",
          Child_sub_menu: [
            { link_name: "Set Salary", link: "", icon: "fas fa-money-check-alt" },
            { link_name: "Annual Salary", link: "", icon: "fas fa-calendar-alt" },
            { link_name: "Earnings Deduction", link: "", icon: "fas fa-calculator" },
            { link_name: "Payslip", link: "", icon: "fas fa-file-invoice-dollar" }
          ]
        },
        {
          link_name: "Performance SetUp",
          link: "",
          icon: "fas fa-trophy",
          Child_sub_menu: [
            { link_name: "Indicator", link: "", icon: "fas fa-chart-line" },
            { link_name: "Appraisal", link: "", icon: "fas fa-star" },
            { link_name: "Goal Tracking", link: "", icon: "fas fa-bullseye" }
          ]
        },
        {
          link_name: "LeaveManagement SetUp",
          link: "",
          icon: "fas fa-calendar-day",
          Child_sub_menu: [
            { link_name: "Manage Leave", link: "", icon: "fas fa-calendar-check" },
            { link_name: "Attendance", link: "", icon: "fas fa-clock" }
          ]
        },
        {
          link_name: "Recruitment SetUp",
          link: "",
          icon: "fas fa-briefcase",
          Child_sub_menu: [
            { link_name: "Job", link: "", icon: "fas fa-clipboard-list" },
            { link_name: "Jobs Create", link: "", icon: "fas fa-plus-circle" },
            { link_name: "Job Application", link: "", icon: "fas fa-file-alt" },
            { link_name: "Job Candidate", link: "", icon: "fas fa-user-check" },
            { link_name: "Job Onboard", link: "", icon: "fas fa-user-tie" },
            { link_name: "Custom Question", link: "", icon: "fas fa-question-circle" }
          ]
        }
      ],
      Child_sub_menu: []
    },
    {
      link_name: "Master Settings",
      link: " ",
      icon: "fas fa-cogs",
      sub_menu: [
        {
          link_name: "My Profile Setup",
          link: "/profilesetup",
          icon: "fas fa-cogs",
          Child_sub_menu: [
            { link_name: "Gender", link: "/profilesetup/Gender", icon: "fas fa-venus-mars" },
            { link_name: "Blood Group", link: "/profilesetup/blood-group", icon: "fas fa-tint" },
            { link_name: "Department", link: "/profilesetup/Department", icon: "fas fa-building" },
            { link_name: "Role", link: "/profilesetup/role", icon: "fas fa-user-tag" },
            { link_name: "Leave Type", link: "/profilesetup/leavet", icon: "fas fa-calendar-day" },
            { link_name: "Reporting Hr", link: "", icon: "fas fa-users" },
            { link_name: "Reporting Manager", link: "", icon: "fas fa-user-tie" },
            { link_name: "Projects", link: "", icon: "fas fa-project-diagram" }
          ]
        }
      ],
      Child_sub_menu: []
    }
  ];


  //setting sidebar
  Mastersidebar = [

    {
      link_name:"My Profile",
      link:"/myprofile",
      icon:"fas fa-user",
    },
    {
      link_name:"Admin",
      link:"/admin",
      icon:"fas fa-user-shield"
    },
    {
      link_name:"Leave",
      link:"/leave",
      icon:"fas fa-calendar-alt"
    },
    {
      link_name:"Timesheet",
      link:"/Time",
      icon:"fas fa-calendar-check",
    },
    {
      link_name:"Recruitment",
      link:"/Recruitment",
      icon:"fas fa-users",
    },
    {
      link_name:"Claims",
      link:"/clamis",
      icon:"fas fa-clipboard-check",
    },
    {
      link_name:"Role Mapping",
      link:"/Role",
      icon:"fas fa-user",
    }

  ];

  submenu(list: HTMLElement) {
    const subMenu = list.querySelector('.sub_menu');
    const chevron = list.querySelector('.fas.fa-chevron-right');
    console.log("Toggling submenu: ", subMenu);
    console.log("Toggling chevron: ", chevron);
    if (subMenu) {
      subMenu.classList.toggle('showMenu');
    }
    if (chevron) {
      chevron.classList.toggle('rotate');
    }
  }

  // Handle child submenu toggle
  childsubmenu(menu: HTMLElement) {
    const subMenu = menu.querySelector('.childmenu');
    const chevron = menu.querySelector('.fas.fa-chevron-right');
    console.log("Toggling submenu: ", subMenu);
    console.log("Toggling chevron: ", chevron);
    if (subMenu) {
      subMenu.classList.toggle('childshow');
    }
    if (chevron) {
      chevron.classList.toggle('rotate');
    }
  }
  //open and close setting menu
   onSettingsClick() {
    const masterSidebar = document.querySelector('.Master-sidebar');
     if (masterSidebar) {
     
         masterSidebar.classList.toggle('Masterbar');
       
     }
  }
  //headerpart

}
