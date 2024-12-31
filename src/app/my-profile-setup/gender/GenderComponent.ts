import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderDTO, SetupService } from '../setup.service';



@Component({
    selector: 'app-gender',
    templateUrl: './gender.component.html',
    styleUrl: './gender.component.css'
})
export class GenderComponent {
    GenderDetailes!: FormGroup;
    Genderdescription = "";
    loading = false; //to tack the loading state
    constructor(private fb: FormBuilder, private services: SetupService) { }
    ngOnInit() {
        this.GenderDetailes = this.fb.group({
            gender: ['', [Validators.required]]
        });

        this.getall();
    }
    get gender() {
        return this.GenderDetailes.get('gender');
    }
    info: any;
    //---inserting the gender
    onSubmit() {
        //---checking is entered or not
        if(this.GenderDetailes.invalid){
            alert('Please fill in all required fields');
            return;
        }
        const data: GenderDTO = {
            Description: this.Genderdescription
        };
      //---setting true of loading
      this.loading = true;

      this.services.pushgender(data).subscribe({
        next: (data) => {
          console.log("Submitted gender", data);
          alert("submitted successfully");
            //--calling again to fetch from api updated detailes
          this.getall();
          
          //--clearing the form after submission
          this.GenderDetailes.reset();
          this.Genderdescription = " ";
        },
        error: (err) => {
          console.log("Error occured", err);
          alert("Not submitted error occured");
        },
        complete:() => {
            console.log('Fetched gender detailes')
            this.loading = false;
        }
      });
    }
    genders:any;
    //--fetching gender from api
    getall() {
        this.loading = true;
        this.services.getGenders().subscribe({ next:(data: any) => {
            if (data) {
                this.genders = data;
                
                console.log(this.genders, "genders fetched");
            }
        },
        error:(err)=>{
            console.log("Error occured while fetching data",err);
            alert("Error occured: please try again");
        },
        complete:()=>{
            console.log("Data is fetched");
            this.loading = false;
        }
    
    });
    }
    
    //--deleting gender from the table
    genderdelete(genid:number){
        this.loading = true;
        this.services.putgender(genid).subscribe({
            next:(response)=>{
                console.log("Deleted successfully",response);
                alert("Deleted gender");
                this.getall();
                
            },
            error:(err)=>{
                console.log("Error occured while deleting",err);
                alert("Error occured: please try again");
            },
            complete:()=>{
                console.log("Completed operations");
                this.loading = false;
            }
        });
    }
    originalgender:any;
    //-editing inline open
    genderEdit(editer:any){
        this.originalgender = {...editer}
        this.genders.forEach((element:any) => {
            element.edit = false;
        });
        editer.edit = true;
    }
    //-editing inline cancle
    close(cancel:any){
        const objcancle = this.originalgender ;
        cancel.description = objcancle.description;
        cancel.edit = false;
    }
    //-editing the gender
    Update(object:any){
        this.loading = true;
       const data :GenderDTO = {
          Description : object.description,
       }
       if(data != null){
       this.services.editgenders(object.genderId,data).subscribe({
        next:(response)=>{
            console.log("Successfully Updated",response);
            alert("Updated the Gender");
        },
        error:(err)=>{
            console.log("Error occured while updating");
            alert("Error occured please try again");
        },
        complete:()=>{
            console.log("Completed");
            this.loading = false;
        }
       });
    }else{
        alert("Please Enter Gender detailes to update");
    }
    object.edit = false;
    }
}
