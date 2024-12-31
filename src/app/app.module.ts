import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EmployeeifoComponent } from './myprofile/employeeifo/employeeifo.component';
import { ProfileComponent } from './myprofile/profile/profile.component';
import { DocumentComponent } from './myprofile/document/document.component';
import { BankComponent } from './myprofile/bank/bank.component';
import { AccessoriesComponent } from './myprofile/accessories/accessories.component';
import { MyProfileRoutingModule } from './myprofile/my-profile-routing.module';
import { InputComponent } from './Components/input/input.component';
import { ButtonComponent } from './Components/button/button.component';
import { HeaderComponent } from './header/header.component';
import { MyProfileSetupComponent } from './my-profile-setup/my-profile-setup.component';
import { MyProfileSetupRoutingModule } from './my-profile-setup/my-profile-setup-routing.module';
import { RoleComponent } from './my-profile-setup/role/role.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GenderComponent } from './my-profile-setup/gender/GenderComponent';
import { DepartmentComponent } from './my-profile-setup/department/department.component';
import { BloodGroupComponent } from './my-profile-setup/blood-group/blood-group.component';
import { LeavetypeComponent } from './my-profile-setup/leavetype/leavetype.component';
import { HrmsSystemComponent } from './hrms-system/hrms-system.component';
import { EmployeesetupComponent } from './hrms-system/employeesetup/employeesetup.component';
import { EmployeeListComponent } from './hrms-system/employeesetup/employee-list/employee-list.component';
import { PayroolsetupComponent } from './hrms-system/payroolsetup/payroolsetup.component';
import { PerformancesetupComponent } from './hrms-system/performancesetup/performancesetup.component';
import { LeavemanagementsetupComponent } from './hrms-system/leavemanagementsetup/leavemanagementsetup.component';
import { RecuritmentsetupComponent } from './hrms-system/recuritmentsetup/recuritmentsetup.component';
import { ManageleaveComponent } from './hrms-system/leavemanagementsetup/manageleave/manageleave.component';
import { AttandnaceComponent } from './hrms-system/leavemanagementsetup/attandnace/attandnace.component';
import { SetsalaryComponent } from './hrms-system/payroolsetup/setsalary/setsalary.component';
import { AnnualsalaryComponent } from './hrms-system/payroolsetup/annualsalary/annualsalary.component';
import { EarningsdeductionsComponent } from './hrms-system/payroolsetup/earningsdeductions/earningsdeductions.component';
import { PayslipsComponent } from './hrms-system/payroolsetup/payslips/payslips.component';
import { IndicatorComponent } from './hrms-system/performancesetup/indicator/indicator.component';
import { AppraisalComponent } from './hrms-system/performancesetup/appraisal/appraisal.component';
import { GoaltrackingComponent } from './hrms-system/performancesetup/goaltracking/goaltracking.component';
import { ReportingSetupComponent } from './reporting-setup/reporting-setup.component';
import { ReportingHrComponent } from './reporting-setup/reporting-hr/reporting-hr.component';
import { ReportingManagerComponent } from './reporting-setup/reporting-manager/reporting-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    EmployeeifoComponent,
    ProfileComponent,
    DocumentComponent,
    BankComponent,
    AccessoriesComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    MyProfileSetupComponent,
    RoleComponent,
    GenderComponent,
    DepartmentComponent,
    BloodGroupComponent,
    LeavetypeComponent,
     RoleComponent,
     HrmsSystemComponent,
     EmployeesetupComponent,
     EmployeeListComponent,
     PayroolsetupComponent,
     PerformancesetupComponent,
     LeavemanagementsetupComponent,
     RecuritmentsetupComponent,
     ManageleaveComponent,
     AttandnaceComponent,
     SetsalaryComponent,
     AnnualsalaryComponent,
     EarningsdeductionsComponent,
     PayslipsComponent,
     IndicatorComponent,
     AppraisalComponent,
     GoaltrackingComponent,
     ReportingSetupComponent,
    ReportingHrComponent,
     ReportingManagerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyProfileRoutingModule,
    ReactiveFormsModule,
    MyProfileSetupRoutingModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
