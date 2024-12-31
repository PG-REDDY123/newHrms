import { Component } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
@Component({
  selector: 'app-annualsalary',
  templateUrl: './annualsalary.component.html',
  styleUrl: './annualsalary.component.css'
})
export class AnnualsalaryComponent {
  ngOnInit(){
    this.getannualrecords();
  }
  Annualsalary = ["500000","370000","900000","5200000","500000","370000","400000","5200000","500000","370000","400000","5200000"];
  searchinformation:string = '';
  get filterrecords(){
    if(!this.searchinformation){
      return this.Annualsalary;
    }

    const query =this.searchinformation.toLowerCase();
    return this.Annualsalary.filter(
      record => record.toString().toLowerCase().includes(query)
    );
    
  }
  
  currentslide = 1;
  recordperslide:number = 4;
  selectedvalue(value:any){
    this.recordperslide = +value.target.value; 
    this.getannualrecords();
  }
 
  getannualrecords(){
   const startindex = (this.currentslide-1)* this.recordperslide;
   const endindex = startindex + this.recordperslide;
    console.log(this.recordperslide);
   return this.filterrecords.slice(startindex,endindex);
  
  }

 
  click(){
    console.log(this.filterrecords);
  }

  onsearch(event:any){
    const q = event.target.value;
    this.searchinformation = q;
    this.getannualrecords();
    console.log(this.searchinformation);
  }

}
