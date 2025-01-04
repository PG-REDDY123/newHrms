import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveDTO, RoleDTO, SetupService } from '../setup.service';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrl: './leavetype.component.css'
})
export class LeavetypeComponent {
  leaveDetailes!: FormGroup;
  constructor(private fb: FormBuilder,private services:SetupService) { }
  ngOnInit() {
    this.leaveDetailes = this.fb.group({
      leave: ['', [Validators.required]]
    })
    this.getall();
  }

  get leave() {
    return this.leaveDetailes.get('leave');
  }

  //--fetching leaves
  leaves:any;
  getall(){
    this.services.getleave().subscribe({
      next:(data)=>{
        this.leaves = data;
        console.log("Successfully fetched the data",data);
      },
      error:(err)=>{
        console.log("Error occured while fetching the data",err);
        alert("Please try again later!");
      },
      complete:()=>{
        console.log("All the process of fetching comppleted");
      }
    })
  }
  onSubmit() {
     if(this.leaveDetailes.invalid){
      alert("please enter the leavetype");
      return;
     }
     
     const data:LeaveDTO = {
      Description:this.leaveDetailes.value.leave,
     }
     if(data != null){
      this.services.postLeave(data).subscribe(
        {
          next:(data)=>{
            console.log("Sucessfully submitted data",data);
            this.getall();
            this.leaveDetailes.reset();
            data = "";
            alert("Sucessfully submited the LeaveType");
          },
          error:(err)=>{
            console.log("Error occured while submiting",err);
            alert("Please try again later!");
          },
          complete:()=>{
            console.log("All process of submiting has ended");
          }
        }
      )
     }else{
      alert("enter the leave type");
     }

  }
  removeitem(id:number) {
    this.services.deleteleave(id).subscribe(
      {
        next:(response)=>{
          console.log("Deleted",response);
          this.getall();
          alert("Deleted Sucessfully ");
        },
        error:(err)=>{
          console.log("Error occurred while deleting",err);
        }
      }
    );
  }

  //edit option 
  leaveobj:any;
  openedit(data:any){
    this.leaveobj = {...data};
    this.leaves.forEach((element:any)=>
      element.edit = false,
  );
  data.edit = true;
  }

  //update function
  Update(data:any){
     const info:LeaveDTO = {
      Description:data.description
     };
     if(info != null){
      this.services.editLeave(data.leaveTypeId,data).subscribe({
        next:(data)=>{
          console.log("Sucessfully updated",data);
          this.getall();
          alert("updated your request");
        },
        error:(err)=>{
          console.log("Error occured while updating",err);
          alert("Please try again later!");
        }
      })
     }else{
      alert("Please enter the Role");
     }
     data.edit = false;
  }

  close(data:any){

      data.edit = false;
  }
} 
