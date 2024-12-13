import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  roleDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.roleDetailes = this.fb.group({
      role: ['', [Validators.required]]
    })
  }

  get role() {
    return this.roleDetailes.get('role');
  }

  additem() {
    this.listData.push(this.roleDetailes.value);
    this.roleDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
