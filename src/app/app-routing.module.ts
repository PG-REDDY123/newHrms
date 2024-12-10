import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyProfileSetupComponent } from './my-profile-setup/my-profile-setup.component';


const routes: Routes = [
  { path: "myprofile", component: MyprofileComponent },
 /* { path: 'my-profie-setup', loadChildren: () => import('./my-profile-setup/my-profile-setup.module').then(m => m.MyProfileSetupModule) }*/
  { path:"profilesetup", component: MyProfileSetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
