import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit{

  constructor(private http: ApiService, private _activateRoute: ActivatedRoute){}



  u_matricule:any
  data:any

  ngOnInit(){
    this._activateRoute.params.subscribe(params =>{
      this.u_matricule = params['matricule']
      console.log(this.u_matricule);
    })

    this.getSingleArrivateUser()

  }



  getSingleArrivateUser(){
    let body = {
      u_matricule: this.u_matricule
    }
    this.http.getSingleUserReport(body).subscribe({
      next: (res:any)=>{
        this.data = res?.result

        console.log(this.data);


      }
    })
  }
}
