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


  //side bar lists
  Mainsidebar:MainMenu[ ]= [
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
        { link_name: "Employee Info", link: "/myprofile/employee", icon: "", Child_sub_menu: [] },
        { link_name: "Profile", link: "/myprofile/profile", icon: "", Child_sub_menu: [] },
        { link_name: "Document", link: "/myprofile/document", icon: "", Child_sub_menu: [] },
        { link_name: "Bank", link: "/myprofile/bank", icon: "", Child_sub_menu: [] }
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
          icon: "",
          Child_sub_menu: []
        },
        {
          link_name: "Payroll SetUp",
          link: "",
          icon:"",
          Child_sub_menu: [
            {
              link_name: "Set Salary",
              link: "",
              icon: "",
              
            },
            {
              link_name: "Annual Salary",
              link: "",
              icon: ""
            },
            {
              link_name: "Earnigs Deduction",
              link: "",
              icon: ""
            },
            {
              link_name: "PlaySlip",
              link: "",
              icon: ""
            },
          ]
        },
        {
          link_name: "Performance SetUp",
          link: "",
          icon: "",
          Child_sub_menu: [
            {
              link_name: "Indicator",
              link: "",
              icon: "",

            },
            {
              link_name: "Appraisal",
              link: "",
              icon: ""
            },
            {
              link_name: "Goal Tracking",
              link: "",
              icon: ""
            },
           
          ]
        },
        {
          link_name: "LeaveManagement SetUp",
          link: "",
          icon: "",
          Child_sub_menu: [
            {
              link_name: "Manage Leave",
              link: "",
              icon: "",

            },
            {
              link_name: "Attandance",
              link: "",
              icon: ""
            },
          ]
        },
        {
          link_name: "Recuirement SetUp",
          link: "",
          icon: "",
          Child_sub_menu: [
            {
              link_name: "Job",
              link: "",
              icon: "",

            },
            {
              link_name: "Jobs Create",
              link: "",
              icon: ""
            },
            {
              link_name: "Job Application",
              link: "",
              icon: ""
            },
            {
              link_name: "Job Candidate",
              link: "",
              icon: ""
            },
            {
              link_name: "Job on-board",
              link: "",
              icon: ""
            },
            {
              link_name: "Custom Question",
              link: "",
              icon: ""
            },
          ]
        },
        
      ],
      Child_sub_menu: []
    },
    {
      link_name: "Settings",
      link: " ",
      icon: "fas fa-cogs",
      sub_menu: [
        {
          link_name: "My Profile Setup",
          link: "/profilesetup",
          icon: "",
          Child_sub_menu: [
            {
              link_name: "Gender",
              link: "/profilesetup/Gender",
              icon: ""
            },
            {
              link_name: "Blood Group",
              link: "/profilesetup/blood-group",
              icon: ""
            },
            {
              link_name: "Department",
              link: "/profilesetup/Department",
              icon: ""
            },
            {
              link_name: "Role",
              link: "/profilesetup/role",
              icon: ""
            
            },
            {
              link_name: "Leave Type",
              link: "/profilesetup/leavet",
              icon: ""
            },
            {
              link_name: "Reporting Hr",
              link: "",
              icon: ""
             
            },
            {
              link_name: "Reporting Manager",
              link: "",
              icon: ""
            
            },
            {
              link_name: "Projects",
              link: "",
              icon: ""
             
            }
          ]
        },      
      ],
      Child_sub_menu: [],
    
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
