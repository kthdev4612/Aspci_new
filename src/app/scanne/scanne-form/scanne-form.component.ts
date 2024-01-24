import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scanne-form',
  templateUrl: './scanne-form.component.html',
  styleUrls: ['./scanne-form.component.scss']
})
export class ScanneFormComponent implements OnInit{


    //@ts-ignore
    userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
    is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  validate_form: FormGroup = new FormGroup({
    matricul : new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    console.log(this.userInfo);

  }


  verify(){
    if (this.validate_form.get('matricul')?.value == this.userInfo?.matricule) {
      console.log("oui");

    }else{
      console.log("non");

    }

  }



}
