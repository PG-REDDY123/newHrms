import { Component } from '@angular/core';

@Component({
  selector: 'app-reporting-setup',
  templateUrl: './reporting-setup.component.html',
  styleUrl: './reporting-setup.component.css'
})
export class ReportingSetupComponent {

  setuplist = [
    {
      link_name: "Reporting HR",
      link:"/reportingsetup/reportinghr"
    },
    {
      link_name: "Reporting Manager",
      link:"/reportingsetup/reportingmanager"
    }
  ]

}
