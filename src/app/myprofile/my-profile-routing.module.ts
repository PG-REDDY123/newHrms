import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DocumentComponent } from './document/document.component';
import { EmployeeifoComponent } from './employeeifo/employeeifo.component';
import { BankComponent } from './bank/bank.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MyprofileComponent } from './myprofile.component';

const routes: Routes = [
  {
    path: "myprofile", component: MyprofileComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "document", component: DocumentComponent },
      { path: "employee", component: EmployeeifoComponent },
      { path: "bank", component: BankComponent },
      { path: "accessories", component: AccessoriesComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MyProfileRoutingModule { }
