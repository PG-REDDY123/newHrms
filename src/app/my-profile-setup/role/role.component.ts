import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleDTO, SetupService } from '../setup.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  roleDetailes!: FormGroup;
  
  constructor(private fb: FormBuilder,private services:SetupService) { }
  ngOnInit() {
    this.roleDetailes = this.fb.group({
      role: ['', [Validators.required]]
    })
    this.getall();
  }

  get role() {
    return this.roleDetailes.get('role');
  }


// - creating roles
  onSubmit() {
   if(this.roleDetailes.invalid){
    alert("Please Enter the Role");
    return;
   }
   const data:RoleDTO ={
    Description:this.roleDetailes.value.role,
   }
   this.services.postrole(data).subscribe({
    next:(data)=>{
      console.log("Role Created sucessfully",data);
      this.getall();
      alert("Successfully created the role");
    },
    error:(err)=>{
      console.log("error occured while creating",err);
      alert("Please try again later!");
    },
    complete:()=>{
      console.log("process completed");
    }
   })
  }


  //--fetching all roles from services
  roles:any;
  getall(){
    this.services.getroles().subscribe(
      {
        next:(data:any)=>{
          this.roles = data;
          console.log("Data successfully fetched",data);
          
        },
        error:(err)=>{
          console.log("Error occured while fetching",err);
          alert("Please try again later!");
        },
        complete:()=>{
          console.log("Your request completed");
        }
      }
    )
  }
//--soft delete
  removeitem(id:number) {
    this.services.deleterole(id).subscribe({
      next:(response)=>{
        console.log("removed successfully",response);
        this.getall();
        alert("sucessfully deleted the data");
      },
      error:(err)=>{
        console.log("error occured while deleting",err);
        alert("please try again later!");
      },
      complete:()=>{
        console.log("entire process is completed");
      }

    });
  }
  
  roleinfo:any;
  roleedit(data:any){
      this.roleinfo = {...data};
      this.roles.forEach((element:any)=>{
          element.edit = false;
      })

      data.edit = true;
  }

  Update(role:any){
       const data:RoleDTO ={
        Description:role.description,
       }
       if(data != null){
        this.services.editrole(role.roleId,data).subscribe(
          {
            next:(data)=>{
              console.log("Updated successfully",data);
              this.getall();
              alert("Updated successfully");
            },
            error:(err)=>{
              console.log("Error Occured while updating",err);
              alert("Please try again later!");
            },
            complete:()=>{
              console.log("Request has completed")
            }
          }
        );
       }else{
        alert("please enter the Role");
       }
       role.edit = false;
  }
  close(role:any){
    role.edit = false;

  }
}
