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

  getSingleUser(body:any){

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };

    return this.api.post("http://127.0.0.1:5000/api/user/GetSingleUser", body, httpOptions)
  }


  updateUser(body:any){

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };

    return this.api.post("http://127.0.0.1:5000/api/user/Updateuser", body, httpOptions)
  }

  // ------------------------------------

  createAdmins(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };

    return this.api.post("http://127.0.0.1:5000/api/admin/CreateAdmin", body, httpOptions)
  }


  qr_code(){
    return this.api.get("http://127.0.0.1:5000/api/qr_code/form")
  }

  //--------------------------------------------------------------------


  CreateReport(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/arrive/CreateArrive", body, httpOptions)
  }

  GetReport(){
    return this.api.get("http://127.0.0.1:5000/api/arrive/getReport")
  }

  getSingleUserReport(body:any){
    return this.api.post("http://127.0.0.1:5000/api/arrive/getSingleArrive", body)
  }

  //--------------------------------------------------------------------------


  CreateReport1(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/report/CreateReport", body, httpOptions)
  }

  getSingleRepot(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/report/getSingleReport", body, httpOptions)
  }

  GetReport1(){
    return this.api.get("http://127.0.0.1:5000/api/report/GetAllReport")
  }
//----------------------------------------------------------------------------------------------
  ReportStatusCreated(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/reportstatus/CreateReportStatus", body, httpOptions)
  }

  GetReportStatus(){
    return this.api.get("http://127.0.0.1:5000/api/reportstatus/GetAllReportStatus")
  }
}
