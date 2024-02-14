import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/auth/api.service';
declare var $:any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{



  constructor(private http: ApiService, private router: Router){}


  data:any
  load:boolean=false

  login_form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  ngOnInit(): void {
  }


  LoginAdmin(){

    this.http.loginAdmin(this.login_form.value).subscribe({
      next: (res:any)=>{
        this.data= res?.result;
        $.cookie('isLoggedIn', true, { expires: 1 ,path: ''});
        // $.notify("Access granted", "success");
        sessionStorage.setItem('infoLogin',JSON.stringify(this.data));

        console.log(res);
        if (res?.status === "success") {
          console.log(this.data);
          if (this.data?.role === "Administrateur") {
            this.router.navigate(['/main','accueill'])
          }
          if (this.data?.role === "Chef des agents") {
            this.router.navigate(['/superviseur','accueill'])
          }

        }
      }
    })

  }





}
