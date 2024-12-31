import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setsalary',
  templateUrl: './setsalary.component.html',
  styleUrl: './setsalary.component.css'
})
export class SetsalaryComponent {
  Employeesalary = false;
  days = false;
  allowance = false;
  submission = false;
  loan=false;
  saturation = false;
  payments  = false;
  overtime = false;
  openemployeesalary(){
    this.Employeesalary = true;
  }

  opendays(){
 this.days = true;
  }
  openallowance(){
  this.allowance = true;
  }
  opensubmission(){
  this.submission = true;
  }
  openloan(){
    this.loan = true;
  }
  opensaturation(){
    this.saturation = true;
  }
  openpayments(){
    this.payments = true;
  }
  openovertime(){
   this.overtime = true;
  }
  popupclose(){
    this.Employeesalary = false;
    this.days = false;
    this.allowance = false;
    this.submission = false;
    this.loan=false;
    this.saturation = false;
    this.payments  = false;
    this.overtime = false;
  }

  //Allowance form
   Allowancedata!:FormGroup;
   Allowancetype = ["Conveyance allowance","Medical Allowance","Education Allowance","Leave Travel Allowance","Taxable Allowance"];
   constructor(private fb:FormBuilder){}
   ngOnInit(){
    this.Allowancedata = this.fb.group({
      title: ['',[Validators.required]],
      Amount:['',[Validators.required]]
    })
   }

   get title(){
    return this.Allowancedata.get("title");
   }
   get Amount(){
    return this.Allowancedata.get("Amount");
   }
   onselectedallowance(){

   }
   allowancesubmit(){

   }
}
