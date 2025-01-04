import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GenderDTO {
  Description:string;
}

export interface GroupDTO{
  Description:string;
}
export interface departmentDTO{
  Description:string;
}

export interface RoleDTO{
  Description:string;
}
export interface LeaveDTO{
  Description:string;
}
@Injectable({
  providedIn: 'root'
})
export class SetupService {
  //commom api url
  url = 'http://localhost:5224/api/';
  constructor(private http: HttpClient) { }
   //Gender
  getGenders() {
    return this.http.get(this.url+"GenderApi");
  }

  pushgender(gender:GenderDTO): Observable<any> {
    return this.http.post(this.url+"GenderApi", gender);
  }

  putgender(id:any): Observable<any>{
    return this.http.put(`${this.url}GenderApi/${id}`, {});
  }

  editgenders(id:any,genderdata :GenderDTO):Observable<any>{
    return this.http.put(`${this.url}GenderApi/edit/${id}`,genderdata)
  }

  //Blood-Group
  getbloodgroup(){
    return this.http.get(this.url+"BloodGroup");
  }

  pushbloodgroup(group:GroupDTO):Observable<any>{
    return this.http.post(this.url+"BloodGroup",group);
  }

  editgroup(id:any,group:GenderDTO):Observable<any>{
    return this.http.put(`${this.url}BloodGroup/edit/${id}`,group);
  }

  delgroup(id:any):Observable<any>{
    return this.http.put(`${this.url}BloodGroup/${id}`,{});
  }
  
  //Department
  getdepartments(){
    return this.http.get(this.url+"Department");
  }

  pushdepartment(department:departmentDTO):Observable<any>{
    return this.http.post(`${this.url}Department`,department);
  }

  editdepartment(id:number,department:departmentDTO):Observable<any>{
    return this.http.put(`${this.url}Department/edit/${id}`,department);
  }
  
  deletedepartment(id:number):Observable<any>{
    return this.http.put(`${this.url}Department/${id}`,null);
  }

  //Role
  
  getroles(){
    return this.http.get(this.url+"Role");
  }

  postrole(roledata:RoleDTO){
    return this.http.post(this.url+"Role",roledata);
  }

  editrole(id:number,roledata:RoleDTO){
    return this.http.put(`${this.url}Role/edit/${id}`,roledata);
  }

  deleterole(id:number){
    return this.http.put(`${this.url}Role/${id}`,null);
  }

  //Leave

  getleave(){
    return this.http.get(this.url+"Leave");
  }

  postLeave(leave:LeaveDTO){
    return this.http.post(this.url+"Leave",leave);
  }

  editLeave(id:number,leave:LeaveDTO){
    return this.http.put(`${this.url}Leave/edit/${id}`,leave);
  }

  deleteleave(id:number){
    return this.http.put(`${this.url}Leave/${id}`,null);
  }
}

