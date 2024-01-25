import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss'],
})
export class ListAgentComponent implements OnInit {

  constructor(private http: ApiService, private location: Location){}


  data:any
  user_form: FormGroup = new FormGroup({
    firstname : new FormControl(null, Validators.required),
    lastname : new FormControl(null, Validators.required),
    username : new FormControl(null, Validators.required),
    password : new FormControl(null, Validators.required),
    email : new FormControl(null, Validators.required),
    date_of_birth : new FormControl(null, Validators.required),
    place_of_birth : new FormControl(null, Validators.required),
    number : new FormControl(null, Validators.required),
    function : new FormControl(null, Validators.required),
    parents_name : new FormControl(null, Validators.required),
    parents_number : new FormControl(null, Validators.required),
  })

  ngOnInit(): void {
    // $('.table').DataTable();
    this.getAllUsers()
  }



  createAllUser(){
    // console.log(this.user_form.value);

    this.http.createUsers(this.user_form.value).subscribe({
      next: (res:any)=>{
        this.refreshPage()
      }
    })
  }

  getAllUsers(){
    this.http.getAllUsers().subscribe({
      next: (res:any)=>{
        this.data = res?.result
        console.log(this.data);

      }
    })
  }

  deleteUser(a:any){
    const body = {
      id: a
    }
    this.http.deleteUser(body).subscribe({
      next: (res:any)=>{
        this.refreshPage()
        console.log(res);

      }
    })
  }


  refreshPage(): void {
    window.location.reload(); // Rafraîchit la page actuelle
  }
}
