import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrl: './blood-group.component.css'
})
export class BloodGroupComponent {
  bloodDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.bloodDetailes = this.fb.group({
      blood: ['', [Validators.required]]
    })
  }

  get blood() {
    return this.bloodDetailes.get('blood');
  }

  additem() {
    this.listData.push(this.bloodDetailes.value);
    this.bloodDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
