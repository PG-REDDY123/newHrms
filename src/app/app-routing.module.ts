import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyProfileSetupComponent } from './my-profile-setup/my-profile-setup.component';
import { ReportingSetupComponent } from './reporting-setup/reporting-setup.component';
import { ReportingHrComponent } from './reporting-setup/reporting-hr/reporting-hr.component';
import { ReportingManagerComponent } from './reporting-setup/reporting-manager/reporting-manager.component';
import { PayroolsetupComponent } from './hrms-system/payroolsetup/payroolsetup.component';
import { SetsalaryComponent } from './hrms-system/payroolsetup/setsalary/setsalary.component';
import { AnnualsalaryComponent } from './hrms-system/payroolsetup/annualsalary/annualsalary.component';
import { EarningsdeductionsComponent } from './hrms-system/payroolsetup/earningsdeductions/earningsdeductions.component';
import { PayslipsComponent } from './hrms-system/payroolsetup/payslips/payslips.component';
import { EmployeesetupComponent } from './hrms-system/employeesetup/employeesetup.component';
import { EmployeeListComponent } from './hrms-system/employeesetup/employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent },
  { path: "myprofile", component: MyprofileComponent },
 /* { path: 'my-profie-setup', loadChildren: () => import('./my-profile-setup/my-profile-setup.module').then(m => m.MyProfileSetupModule) }*/
  { path: "profilesetup", component: MyProfileSetupComponent },
  {
    path: "reportingsetup", component: ReportingSetupComponent,
    children: [
      { path: "reportinghr", component: ReportingHrComponent },
      {path:"reportingmanager",component:ReportingManagerComponent}
    ]
  },
  {
    path:"Payroolsetup",component:PayroolsetupComponent,
    children:[
      {path:"setsalary",component:SetsalaryComponent},
      {path:"Annualsalary",component:AnnualsalaryComponent},
      {path:"Earnings",component:EarningsdeductionsComponent},
      {path:"Payslips",component:PayslipsComponent}
    ]
  },
  { path:'Employee',component:EmployeesetupComponent,
    children:[
      {path:"list",component:EmployeeListComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
