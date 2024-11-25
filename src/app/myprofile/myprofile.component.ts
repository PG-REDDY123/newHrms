import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
  List = [
    {
      Link_name: "Employee",
      link:"/myprofile/employee",
    },
    {
      Link_name: "Profile",
      link: "/myprofile/profile",
    },
    {
      Link_name: "Document",
      link: "/myprofile/document",
    },
    {
      Link_name: "Bank",
      link: "/myprofile/bank",
    },
    {
      Link_name: "Accessories",
      link: "/myprofile/accessories",
    }
  ]

}
