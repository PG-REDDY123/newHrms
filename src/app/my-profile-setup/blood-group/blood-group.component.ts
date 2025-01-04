import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupDTO, SetupService } from '../setup.service';

@Component({
  selector: 'app-blood-group',
  templateUrl: './blood-group.component.html',
  styleUrl: './blood-group.component.css'
})
export class BloodGroupComponent {
  bloodDetailes!: FormGroup;
  groupdescription = "";
  constructor(private fb: FormBuilder, private services:SetupService) { }
  ngOnInit() {
    this.bloodDetailes = this.fb.group({
      blood: ['', [Validators.required]]
    })

    this.getall();
  }

  get blood() {
    return this.bloodDetailes.get('blood');
  }

  //--fetching blood group
  bloodgroup: any;
  getall() {
    this.services.getbloodgroup().subscribe(
      {
        next: (data: any) => {
          if (data) {
            this.bloodgroup = data;
            console.log(this.bloodgroup, "bloodgroup fetched");
          }
        },
        error: (err) => {
          console.log("Error occured while fetching", err);
          alert("Please try again");
        },
        complete: () => {
          console.log("Data is fetched");
        }
      }
    )
  }
  //--inserting bloodgroup
  onSubmit() {
    if (this.bloodDetailes.invalid) {
      alert("Please fill the BloodGroup");
      return;
    }
    const data: GroupDTO = {
      Description: this.groupdescription
    };
    this.services.pushbloodgroup(data).subscribe({
      next: (data: any) => {
        console.log("submitted bloodgroup", data);
        this.getall();
        this.bloodDetailes.reset();
        this.groupdescription = " ";
      },
      error: (err) => {
        console.log("Error occured while submitting", err);
        alert("Please try again error occured");
      },
      complete: () => {
        console.log("Successfully submited");
      }
    });
  }
  //--deleteing bloodgroup
  removeitem(element: number) {

    this.services.delgroup(element).subscribe({
      next: (Done) => {
        console.log("Deleted Successfully", Done);
        alert("Deleted bloodgroup");
        this.getall();
      },
      error: (err) => {
        console.log("Error occured while processing");
        alert("Please try again");
      },
      complete: () => {
        console.log("Successfully completed");
        alert("Sucessfullt deleted");
      }
    });


  }

  bloodgroupdata: any;
  //bloodgroup edit
  groupedit(element: any) {
    console.log("You pressed me");
    this.bloodgroupdata = { ...element }
    this.bloodgroup.forEach((data: any) => {
      data.edit = false;
    });
    element.edit = true;
  }

  Update(object: any) {
    const data: GroupDTO = {
      Description:object.description,
    }
    if (data != null) {
      this.services.editgroup(object.bloodGroupId, data).subscribe({
        next: (response) => {
          console.log("Successfully updated", response);
          alert("updated the bloodgroup");
          this.getall();
        },
        error: (err) => {
          alert("Error occured while fetching");
        },
        complete: () => {
          console.log("done");
        }
      });
    } else {
      alert("Please enter the bloodgroup detailes");
    }
    object.edit = false;

  }

  close(da: any) {
    const data = this.bloodgroupdata;
    da.description = data.description;
    da.edit = false;
  }

}
