import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GenderDTO {
  Description:string;
}
@Injectable({
  providedIn: 'root'
})
export class SetupService {

  url = 'http://localhost:5224/api/GenderApi';
  constructor(private http: HttpClient) { }
  getGenders() {
    return this.http.get(this.url);
  }

  pushgender(gender:GenderDTO): Observable<any> {
    return this.http.post(this.url, gender);
  }

  putgender(id:any): Observable<any>{
    return this.http.put(`${this.url}/${id}`, {});
  }

  editgenders(id:any,genderdata :GenderDTO):Observable<any>{
    return this.http.put(`${this.url}/edit/${id}`,genderdata)
  }

}

