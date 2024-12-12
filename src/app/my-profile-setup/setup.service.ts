import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  url = 'http://localhost:5224/api/GenderApi';
  constructor(private http: HttpClient) { }

  getGenders() {
    return this.http.get(this.url);
  }

}

