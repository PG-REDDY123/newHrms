import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService } from '../setup.service';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.css'
})
export class GenderComponent {
  GenderDetailes!: FormGroup;
  constructor(private fb: FormBuilder,private services:SetupService) { }
  ngOnInit() {
    this.GenderDetailes = this.fb.group({
      gender: ['', [Validators.required]]
    });

    this.getall();

  }
  get gender() {
    return this.GenderDetailes.get('gender');
  }

  onSubmit() {

  }
  genders: any;

  getall() {
    this.services.getGenders().subscribe((data: any) => {
      if (data) {
        this.genders = data;
        console.log(this.genders, "genders fetched");
      }
    });
  }
}
