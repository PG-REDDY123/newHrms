import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
interface SubMenu {
  link_name: string;
  link: string;
  icon: string;
  Child_sub_menu?: SubMenu[];
  roles?: string[];
}

interface MainMenu {
  link_name: string;
  link: string;
  icon: string;
  sub_menu: SubMenu[];
  Child_sub_menu: SubMenu[];
  action?: Function;
  roles?: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

 userRoles: string[] = [];

 ngOnInit(): void {
  const token = this.authservice.getDecodedToken();
  this.userRoles = token ? token.role : []; // Make sure this is the correct property name
  console.log(this.userRoles);
}

  Mainsidebar: MainMenu[] = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "fas fa-tachometer-alt",
      sub_menu: [],
      Child_sub_menu: [],
      roles: ['ADMIN', 'HR', 'Employee'] 
    },
    {
      link_name: "My Profile",
      link: "/myprofile/employee",
      icon: "fas fa-user",
      sub_menu: [
        { link_name: "Employee Info", link: "/myprofile/employee", icon: "fas fa-id-card", Child_sub_menu: [],   roles: ['ADMIN', 'HR', 'Employee']  },
        { link_name: "Profile", link: "/myprofile/profile", icon: "fas fa-user-circle", Child_sub_menu: [],   roles: ['ADMIN', 'HR', 'Employee']  },
        { link_name: "Document", link: "/myprofile/document", icon: "fas fa-file-alt", Child_sub_menu: [],   roles: ['ADMIN', 'HR', 'Employee']  },
        { link_name: "Bank", link: "/myprofile/bank", icon: "fas fa-university", Child_sub_menu: [],   roles: ['ADMIN', 'HR', 'Employee']  }
      ],
      Child_sub_menu: [],
      roles: ['ADMIN', 'HR', 'Employee'] 
    },
    {
      link_name: "HRM System",
      link: "/admin",
      icon: "fas fa-user-shield",
      sub_menu: [
        {
          link_name: "Employee SetUp",
          link: "/Employee/list",
          icon: "fas fa-users-cog",
          Child_sub_menu: [
            { link_name: "Employee List", link: "/Employee/list", icon: "fas fa-users",   roles: ['ADMIN', 'HR']  }
          ],
          roles: ['ADMIN', 'HR'] 
        },
        {
          link_name: "Payroll SetUp",
          link: "/Payroolsetup/setsalary",
          icon: "fas fa-dollar-sign",
          Child_sub_menu: [
            { link_name: "Set Salary", link: "/Payroolsetup/setsalary", icon: "fas fa-money-check-alt", roles: ['ADMIN', 'HR']  },
            { link_name: "Annual Salary", link: "/Payroolsetup/Annualsalary", icon: "fas fa-calendar-alt", roles: ['ADMIN', 'HR']  },
            { link_name: "Earnings Deduction", link: "/Payroolsetup/Earnings", icon: "fas fa-calculator" , roles: ['ADMIN', 'HR'] },
            { link_name: "Payslip", link: "/Payroolsetup/Payslips", icon: "fas fa-file-invoice-dollar" , roles: ['ADMIN', 'HR'] }
          ],
          roles: ['ADMIN', 'HR'] 
        },
        {
          link_name: "Performance SetUp",
          link: "",
          icon: "fas fa-trophy",
          Child_sub_menu: [
            { link_name: "Indicator", link: "", icon: "fas fa-chart-line", roles: ['ADMIN', 'HR']  },
            { link_name: "Appraisal", link: "", icon: "fas fa-star", roles: ['ADMIN', 'HR']  },
            { link_name: "Goal Tracking", link: "", icon: "fas fa-bullseye", roles: ['ADMIN', 'HR']  }
          ],
          roles: ['ADMIN', 'HR'] 
        },
        {
          link_name: "LeaveManagement SetUp",
          link: "",
          icon: "fas fa-calendar-day",
          Child_sub_menu: [
            { link_name: "Manage Leave", link: "", icon: "fas fa-calendar-check", roles: ['ADMIN', 'HR']  },
            { link_name: "Attendance", link: "", icon: "fas fa-clock", roles: ['ADMIN', 'HR']  }
          ],
          roles: ['ADMIN', 'HR'] 
        },
        {
          link_name: "Recruitment SetUp",
          link: "",
          icon: "fas fa-briefcase",
          Child_sub_menu: [
            { link_name: "Job", link: "", icon: "fas fa-clipboard-list", roles: ['ADMIN', 'HR']  },
            { link_name: "Jobs Create", link: "", icon: "fas fa-plus-circle", roles: ['ADMIN', 'HR']  },
            { link_name: "Job Application", link: "", icon: "fas fa-file-alt", roles: ['ADMIN', 'HR']  },
            { link_name: "Job Candidate", link: "", icon: "fas fa-user-check", roles: ['ADMIN', 'HR']  },
            { link_name: "Job Onboard", link: "", icon: "fas fa-user-tie", roles: ['ADMIN', 'HR']  },
            { link_name: "Custom Question", link: "", icon: "fas fa-question-circle", roles: ['ADMIN', 'HR']  }
          ],
          roles: ['ADMIN', 'HR'] 
        }
      ],
      Child_sub_menu: [],
      roles: ['HR'] 
    },
    {
      link_name: "Master Settings",
      link: " ",
      icon: "fas fa-cogs",
      sub_menu: [
        {
          link_name: "My Profile Setup",
          link: "/profilesetup/Gender",
          icon: "fas fa-cogs",
          Child_sub_menu: [
            { link_name: "Gender", link: "/profilesetup/Gender", icon: "fas fa-venus-mars" , roles: ['HR']   },
            { link_name: "Blood Group", link: "/profilesetup/blood-group", icon: "fas fa-tint", roles: ['HR']    },
            { link_name: "Department", link: "/profilesetup/Department", icon: "fas fa-building" , roles: ['HR']   },
            { link_name: "Role", link: "/profilesetup/role", icon: "fas fa-user-tag", roles: ['HR']    },
            { link_name: "Leave Type", link: "/profilesetup/leavet", icon: "fas fa-calendar-day", roles: ['HR']    }
          ], 
          roles: ['HR']     
        },
        {
          link_name: "Reporting Setup",
          link: "/reportingsetup/reportinghr",
          icon: "fas fa-users",
          Child_sub_menu: [
            {
              link_name: "Reporting Hr",
              link: "/reportingsetup/reportinghr",
              icon: "fas fa-users"
            },
            { link_name: "Reporting Manager", link: "/reportingsetup/reportingmanager", icon: "fas fa-user-tie" },
            { link_name: "Projects", link: "", icon: "fas fa-project-diagram" }

          ],
          roles: ['HR'] 
        },      
      ],
      Child_sub_menu: [],
      roles: ['HR'] 
    },

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
  isLoggedIn: boolean = false;

  constructor(private authservice:AuthserviceService,private router:Router){}

  onLoginSuccess(){
    this.isLoggedIn = true;
   
    this.router.navigate(['/dashboard'])
  }

  onLogout(){
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

   
  hasPermission(menu: MainMenu | SubMenu): boolean {
    const roles = menu.roles || [];  // Menu-specific roles
    const userRoles = this.userRoles || [];  // User roles retrieved from the decoded token
      return roles.some(role => this.authservice.hasrole(role));  // Use the hasRole method to check if the user has the required role
    }
  
  
  
  
  
  
}
