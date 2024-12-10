import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile-setup',
  templateUrl: './my-profile-setup.component.html',
  styleUrl: './my-profile-setup.component.css'
})
export class MyProfileSetupComponent {

  setuplist = [
    {
      link: "/profilesetup/Gender",
      link_name:"Gender Setup"
    },
    {
      link: "/profilesetup/blood-group",
      link_name: "Blood Group Setup"
    },
    {
      link: "/profilesetup/Department",
      link_name: "Department Setup"
    },
    {
      link: "/profilesetup/role",
      link_name: "Role Setup"
    },
    {
      link: "/profilesetup/leavet",
      link_name: "LeaveType Setup"
    },
  ]

}
