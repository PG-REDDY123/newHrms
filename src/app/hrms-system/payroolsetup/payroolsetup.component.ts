import { Component } from '@angular/core';

@Component({
  selector: 'app-payroolsetup',
  templateUrl: './payroolsetup.component.html',
  styleUrl: './payroolsetup.component.css'
})
export class PayroolsetupComponent {
  
  setuplist = [
    {
      link: "/Payroolsetup/setsalary",
      link_name:"Set Salary"
    },
    {
      link: "/Payroolsetup/Annualsalary",
      link_name: "Annual Salary"
    },
    {
      link: "/Payroolsetup/Earnings",
      link_name: "Earning Deductions"
    },
    {
      link: "/Payroolsetup/Payslips",
      link_name: "Payslips"
    },
  ]
  
}
