import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-scanne-form',
  templateUrl: './scanne-form.component.html',
  styleUrls: ['./scanne-form.component.scss']
})
export class ScanneFormComponent implements OnInit{

  constructor(private http: ApiService, private router: Router){

  }

    //@ts-ignore
    userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
    is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  validate_form: FormGroup = new FormGroup({
    matricule : new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    console.log(this.userInfo);

  }


  verify(){
    if (this.validate_form.get('matricule')?.value == this.userInfo?.matricule) {
      this.http.CreateReport(this.validate_form.value).subscribe({
        next: (res:any) =>{
          if (res?.satus === "success") {
            this.router.navigate(["/main"])
          }
        }
      })

    }else{
      alert('Votre matricule est incorrecte ):')

    }

  }



}
