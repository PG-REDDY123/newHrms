import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileSetupRoutingModule } from './my-profile-setup-routing.module';
import { MyProfileSetupComponent } from './my-profile-setup.component';
import { BloodGroupComponent } from './blood-group/blood-group.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SetupService } from './setup.service';
import { GenderComponent } from './gender/gender.component';



@NgModule({
  declarations: [
    MyProfileSetupComponent,
    BloodGroupComponent,
    DepartmentComponent,
    RoleComponent,
    LeavetypeComponent,
    GenderComponent
  ],
  imports: [
    CommonModule,
    MyProfileSetupRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  
  ]
})
export class MyProfileSetupModule { }
