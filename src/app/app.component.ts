import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  //side bar lists
  Mainsidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "fas fa-tachometer-alt",  
      sub_menu: []
    },
    {
      link_name: "My Profile",
      link: "/myprofile",
      icon: "fas fa-user",
      sub_menu: [
        { link_name: "Employee Info", link: "/myprofile/employee" },
        { link_name: "Profile", link: "/myprofile/profile" },
        { link_name: "Document", link: "/myprofile/document" },
        { link_name: "Bank", link: "/myprofile/bank" },
        { link_name: "Accessories", link: "/myprofile/accessories" }
      ]
    },
    {
      link_name: "Admin",
      link: "/admin",
      icon: "fas fa-user-shield",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "Exit Procedure",
      link: "/exit",
      icon: "fas fa-sign-out-alt",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "Time Sheet",
      link: "/Time",
      icon: "fas fa-calendar-check",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "Leave Management",
      link: "/Leave",
      icon: "fas fa-calendar-alt",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "Payroll",
      link: "/payroll",
      icon: "fas fa-dollar-sign",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "Claims",
      link: "/Clamis",
      icon: "fas fa-clipboard-check",  
      sub_menu: [
        { link_name: "Employee Info", link: "" }
      ]
    },
    {
      link_name: "HR Forms",
      link: "/hrforms",
      icon: "fas fa-file-alt",  
      sub_menu: []
    },
    {
      link_name: "Buzz",
      link: "/buzz",
      icon: "fas fa-bell",  
      sub_menu: []
    },
    {
      link_name: "Settings",
      link: " ",
      icon: "fas fa-cogs",
      sub_menu: [],
      action: this.onSettingsClick.bind(this) 
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

//to show and hide submenu
  submenu(list: HTMLElement) {
    
    const subMenu = list.querySelector('.sub_menu');
    const chevron = list.querySelector('.fas.fa-chevron-right'); 

    if (subMenu) {
      subMenu.classList.toggle('showMenu');
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
