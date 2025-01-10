import { Component } from '@angular/core';

@Component({
  selector: 'app-employeesetup',
  templateUrl: './employeesetup.component.html',
  styleUrl: './employeesetup.component.css'
})
export class EmployeesetupComponent {
     setuplist=[
      {
        link:"/Employee/list",
        link_name:"Employee List"
      }
     ]
}
