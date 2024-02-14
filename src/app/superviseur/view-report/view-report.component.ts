import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit{

  constructor(private http: ApiService, private _activateRoute: ActivatedRoute){}

  //@ts-ignore
  userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
  is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  user:any
  comment:any
  data:any
  u_id:any
  id_rep:any

  valide_form: FormGroup = new FormGroup({
    u_firstname: new FormControl(null, Validators.required),
    u_id: new FormControl(null, Validators.required),
    s_status: new FormControl(null, Validators.required),
    a_firstname: new FormControl(null, Validators.required),
    a_matricule: new FormControl(null, Validators.required),
  })

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params =>{
      this.u_id = params['u_uid'],
      this.id_rep = params['report_id']
    })

    this.getSingleUser()
    this.getAllReport()
    console.log(this.userInfo);
    console.log(this.valide_form.value);

  }


  getSingleUser(){
    let body ={
      u_uid: this.u_id
    }
    this.http.getSingleUser(body).subscribe({
      next: (r:any)=>{
        this.user = r?.result
        console.log(this.user);

      }
    })
  }

  getAllReport(){
    let body ={
      u_uid: this.u_id,
      id: this.id_rep
    }
    this.http.getSingleRepot(body)?.subscribe({
      next: (r:any)=>{
        this.data = r?.result
        // console.log(this.data);


      }
    })
  }


  createStatus(){

    this.valide_form.get("s_status")?.setValue("validé")
    this.valide_form.get("u_firstname")?.setValue(this.userInfo?.firstname)
    this.valide_form.get("u_id")?.setValue(this.userInfo?.id)
    this.valide_form.get("a_firstname")?.setValue(this.user?.firstname)
    this.valide_form.get("a_matricule")?.setValue(this.user?.matricule)

    this.http.ReportStatusCreated(this.valide_form.value)?.subscribe({
      next: (r:any)=>{
        console.log(this.valide_form.value);

      }
    })

  }


  createStatus1(){
    this.valide_form.get("s_status")?.setValue("Ajournné")
    this.valide_form.get("u_firstname")?.setValue(this.userInfo?.firstname)
    this.valide_form.get("u_id")?.setValue(this.userInfo?.id)
    this.valide_form.get("a_firstname")?.setValue(this.user?.firstname)
    this.valide_form.get("a_matricule")?.setValue(this.user?.matricule)

    this.http.ReportStatusCreated(this.valide_form.value)?.subscribe({
      next: (r:any)=>{
        console.log(r);
        console.log(this.valide_form.value);
      }
    })

  }


}
