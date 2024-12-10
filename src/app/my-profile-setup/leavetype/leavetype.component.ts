import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrl: './leavetype.component.css'
})
export class LeavetypeComponent {
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
