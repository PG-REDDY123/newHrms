import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reporting-hr',
  templateUrl: './reporting-hr.component.html',
  styleUrl: './reporting-hr.component.css'
})
export class ReportingHrComponent {
  HrreportingDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.HrreportingDetailes = this.fb.group({
      hr: ['', [Validators.required]]
    })
  }

  get hr() {
    return this.HrreportingDetailes.get('hr');
  }

  additem() {
    this.listData.push(this.HrreportingDetailes.value);
    this.HrreportingDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
