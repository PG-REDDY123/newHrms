import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyProfileRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
