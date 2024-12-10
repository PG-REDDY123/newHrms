import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  GenderDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.GenderDetailes = this.fb.group({
      gender: ['', [Validators.required]]
    })
  }

  get gender() {
    return this.GenderDetailes.get('gender');
  }

  additem() {
    this.listData.push(this.GenderDetailes.value);
    this.GenderDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
