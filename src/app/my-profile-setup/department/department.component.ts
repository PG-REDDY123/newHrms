import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  DepartmentDetailes!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.DepartmentDetailes = this.fb.group({
      Department: ['', [Validators.required]]
    })
  }

  get Department() {
    return this.DepartmentDetailes.get('Department');
  }

 
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
