import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  BankDetailes!: FormGroup;
  AccountType = ["Salary Account","Saving Account"];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.BankDetailes = this.fb.group({
      Bank: ['', [Validators.required]],
      Account: ['', [Validators.required]],
      ifsc:['',[Validators.required]]
    });
  }
  get Bank() {
    return this.BankDetailes.get('Bank');
  }

  get Account() {
    return this.BankDetailes.get('Account');
  }

  get ifsc() {
    return this.BankDetailes.get("ifsc");
  }
  onSubmit() {

  }
  onselectedchange() {

  }
}
