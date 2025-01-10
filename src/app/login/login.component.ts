import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupService, User } from '../my-profile-setup/setup.service';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Loginform!:FormGroup;
  errorMessage:string= ' ';

  constructor(private services:SetupService,private authservice:AuthserviceService,private router:Router,private fb:FormBuilder){}
  @Output() loginSuccess = new EventEmitter<void>();

  ngOnInit(): void {
    this.Loginform = this.fb.group({
      Username: ['', Validators.required],
      password: ['', Validators.required],
      Role:['',Validators.required]
    });
  }
  get Username(){
    return this.Loginform.get("Username");
  }

  get password(){
    return this.Loginform.get("password")
  }

  get Role(){
    return this.Loginform.get("Role")
  }
  onsubmit(){
  const data:User = {
    userName:this.Loginform.value.Username,
    password:this.Loginform.value.password,
    role:this.Loginform.value.Role

    }
 
  this.services.login(data).subscribe({
    next:(response)=>{
      const token = response.token;
      console.log(response);
      this.authservice.saveToken(token);

      alert("Successfully logedin , Welcome");

      this.loginSuccess.emit();

    },
    error:(err)=>{
      this.errorMessage = "Invalid password or username";
      console.log("Error occured while login", err);
      alert("Invalid password or username");
    }
  });
  }
}

