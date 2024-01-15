import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{


  constructor(private router: Router, private http: ApiService){}


  ngOnInit() {

  }

  register_form: FormGroup = new FormGroup({
    firstname: new FormControl(null,  Validators.required),
    lastname: new FormControl(null,  Validators.required),
    email: new FormControl(null,  Validators.required),
    password: new FormControl(null,  Validators.required),
    username: new FormControl(null,  Validators.required),
    number: new FormControl(null,  Validators.required),
    role: new FormControl(null,  Validators.required),
    country: new FormControl(null,  Validators.required),
  })


  CreateAdmin(){
    this.http.createAdmins(this.register_form.value).subscribe({
      next: (res:any)=>{
        this.router.navigate(['/auth','login'])
      }
    })
  }
}
