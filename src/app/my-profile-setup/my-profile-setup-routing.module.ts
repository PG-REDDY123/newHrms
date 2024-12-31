import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileSetupComponent } from './my-profile-setup.component';
import { BloodGroupComponent } from './blood-group/blood-group.component';
import { DepartmentComponent } from './department/department.component';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { GenderComponent } from './gender/GenderComponent';

const routes: Routes = [{
  path: 'profilesetup', component: MyProfileSetupComponent,
  children: [
    { path: '', redirectTo: 'Gender', pathMatch: 'full' },
    { path: "Gender", component: GenderComponent },
    { path: "blood-group", component: BloodGroupComponent },
    { path: "Department", component: DepartmentComponent },
    { path: "role", component: RoleComponent },
    { path: "leavet", component: LeavetypeComponent },
    { path: '**', redirectTo: 'Gender' }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileSetupRoutingModule { }
