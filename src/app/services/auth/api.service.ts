import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  loginAdmin(body:any){
   return this.api.post("http://127.0.0.1:5000/api/admin/Login", body)
  }
}
