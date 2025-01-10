import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  constructor() { }
  private tokenkey = "access_token";
  //saving the jwt token
  saveToken(token:string){
    localStorage.setItem(this.tokenkey,token);
  }
  
  //getting the jwt token
  getToken(){
    console.log(this.tokenkey);
    return localStorage.getItem(this.tokenkey);
  }

  //remove token from local storage
  removeToken(){
    localStorage.removeItem(this.tokenkey);
  }

  //Decoding the token to get role and other clams
  getDecodedToken():any{
    const token = this.getToken();
    if(!token){
      return null;
    }
    return jwtDecode(token);
  }

  //check user has specfic role
  hasrole(role: string): boolean {
    const decodedToken = this.getDecodedToken();
    console.log('Decoded Token:', decodedToken); // Debugging line to view the entire decoded token
  
    // Check for the role in the decoded token (look for the correct claim path)
    if (decodedToken && decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
      const roles = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      console.log(roles);
      
      // Check if the decoded token contains a single role or an array of roles
      return Array.isArray(roles) ? roles.includes(role) : roles === role;
    }
    
    return false; // If no role claim is found, return false
  }
  

  isloggedin():boolean{
    return !!this.getToken();
  }
}
