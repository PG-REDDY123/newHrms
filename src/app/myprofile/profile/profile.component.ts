import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  DetailsForm!: FormGroup;
  Title = ["Mr", "Mss"];
  onselectedoption: string = "";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.DetailsForm = this.fb.group({
      title: ['', [Validators.required]],
      First: ['', [Validators.required]],
      Last:['',[Validators.required]]
    })
  }

  get title() {
    return this.DetailsForm.get('title');
  }
  get First() {
    return this.DetailsForm.get('First');
  }

  get Last() {
    return this.DetailsForm.get('Last');
  }
  onSubmit() {

  }
  onselectedchange() {
    console.log(this.onselectedoption);
  }
}
