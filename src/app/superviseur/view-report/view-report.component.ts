import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit{

  constructor(private http: ApiService, private _activateRoute: ActivatedRoute){}


  data:any
  u_id:any

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params =>{
      this.u_id = params['u_uid']
    })
    console.log(this.u_id);

    this.getSingleUser()

  }


  getSingleUser(){
    let body ={
      u_uid: this.u_id
    }
    this.http.getSingleUser(body).subscribe({
      next: (r:any)=>{
        this.data = r?.result
        console.log(this.data);

      }
    })
  }
}
