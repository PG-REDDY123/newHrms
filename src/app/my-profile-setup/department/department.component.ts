import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departmentDTO, SetupService } from '../setup.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  DepartmentDetailes!: FormGroup;
  DepartmentDescription:string = "";
  constructor(private fb: FormBuilder,private services:SetupService) { }
  ngOnInit() {
    this.DepartmentDetailes = this.fb.group({
      Department: ['', [Validators.required]]
    })

    this.getall();

  }

  get Department() {
    return this.DepartmentDetailes.get('Department');
  }

  
  onSubmit() {
    if(this.DepartmentDetailes.invalid){
        alert("Please Enter the Department");
        return;
    }

    const data:departmentDTO = {
      Description:this.DepartmentDescription,
    }
    this.services.pushdepartment(data).subscribe(
      {
        next:(data:any)=>{
          console.log("Successfully submitted",data);
          this.DepartmentDetailes.reset();
          this.DepartmentDescription = " ";
          this.getall();
        },
        error:(err)=>{
          console.log("error occured");
          alert("please try aagain");
        },
        complete:()=>{
          alert("Successfully completed your request");
        }
      }
    )
  }
  //-soft deleting department
  removeitem(id:number) {
    this.services.deletedepartment(id).subscribe({
      next:(response)=>{
        console.log("Successfully deleted",response);
        this.getall();
        alert("Successfully completed ypur request");
      },
      error:(err)=>{
        console.log("Error occured while deleting",err);
        alert("Please try again error occured");
      },
      complete:()=>{
        
      }
    })
  }
  
  //--getting departments from the services.
  departments:any;
  getall(){
   this.services.getdepartments().subscribe({
    next:(data:any)=>{
      if(data){
      this.departments = data;
      console.log("department fetched",data);
      }
    },
    error:(err)=>{
      console.log("Error occured while fetching data",err);
      alert("Please try again");
    },
    complete:()=>{
      console.log("Successfully completed");
    
    }
  });
  }

  departmentgroup:any;
  //open edit functionality
  departmentedit(data:any){
      this.departmentgroup= {...data};
      this.departments.forEach((element:any)=>{
             element.edit = false;
      }
     );
      
      data.edit = true;
  }

  //updating the data
  Update(dep:any){
    const data:departmentDTO = {
      Description:dep.description,
    }
    if(data != null){
    this.services.editdepartment(dep.jobId,data).subscribe({
      next:(data:any)=>{
        console.log("updated the data successfully",data);
        this.getall();
        alert("Your request successfully completed");
      },
      error:(err)=>{
        console.log("errored occured while updating",err);
        alert("Please try again you request is terminated");
      },
      complete:()=>{
        
      }
    })
  }else{
    alert("please enter the department");
  
  }
  dep.edit = false;

}
  close(dep:any){
    dep.edit = false;
  }
}
