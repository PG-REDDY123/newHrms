import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reporting-manager',
  templateUrl: './reporting-manager.component.html',
  styleUrl: './reporting-manager.component.css'
})
export class ReportingManagerComponent {
  ManagerDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.ManagerDetailes = this.fb.group({
      manager: ['', [Validators.required]]
    })
  }

  get manager() {
    return this.ManagerDetailes.get('manager');
  }

  additem() {
    this.listData.push(this.ManagerDetailes.value);
    this.ManagerDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }

}
