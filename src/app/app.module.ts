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
import { GenderComponent } from './my-profile-setup/gender/gender.component';
import { DepartmentComponent } from './my-profile-setup/department/department.component';
import { BloodGroupComponent } from './my-profile-setup/blood-group/blood-group.component';
import { LeavetypeComponent } from './my-profile-setup/leavetype/leavetype.component';
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
     RoleComponent
   
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
