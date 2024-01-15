import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

constructor(private http: ApiService, private _activate: ActivatedRoute, private router: Router){}

  u_id:any
  data:any
  user_form: FormGroup = new FormGroup({
    firstname : new FormControl(null, Validators.required),
    lastname : new FormControl(null, Validators.required),
    username : new FormControl(null, Validators.required),
    // password : new FormControl(null, Validators.required),
    email : new FormControl(null, Validators.required),
    date_of_birth : new FormControl(null, Validators.required),
    place_of_birth : new FormControl(null, Validators.required),
    number : new FormControl(null, Validators.required),
    function : new FormControl(null, Validators.required),
    parents_name : new FormControl(null, Validators.required),
    parents_number : new FormControl(null, Validators.required),
  })


  ngOnInit(): void {
    this._activate.params.subscribe(params =>{
      this.u_id = params['u_uid']
    })

    this.getSingle()

    console.log(this.u_id);

  }


  getSingle(){
    let body = {
      u_uid: this.u_id,
    }

    this.http.getSingleUser(body).subscribe({
      next: (res:any)=>{
        this.data = res?.result

        console.log(this.data);

      }
    })
  }

  update(){
    this.http.updateUser(this.user_form.value).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.router.navigate(['/main', 'lists_agents'])
      }
    })
  }

}
