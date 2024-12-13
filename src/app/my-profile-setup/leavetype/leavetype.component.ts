import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrl: './leavetype.component.css'
})
export class LeavetypeComponent {
  leaveDetailes!: FormGroup;
  listData = [
    {
      gender: "male"
    }
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.leaveDetailes = this.fb.group({
      leave: ['', [Validators.required]]
    })
  }

  get leave() {
    return this.leaveDetailes.get('leave');
  }

  additem() {
    this.listData.push(this.leaveDetailes.value);
    this.leaveDetailes.reset();
  }
  onSubmit() {

  }
  removeitem(element: any) {

  }
}
