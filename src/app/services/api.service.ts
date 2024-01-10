import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  createUsers(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };

    return this.api.post("http://127.0.0.1:5000/api/user/CreateUser", body, httpOptions)
  }


  getAllUsers(){
    return this.api.get("http://127.0.0.1:5000/api/user/GetAllUsers")
  }

  deleteUser(body:any){

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };

    return this.api.post("http://127.0.0.1:5000/api/user/DeletedUser", body, httpOptions)
  }
}
