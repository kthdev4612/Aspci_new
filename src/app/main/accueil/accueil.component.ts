import { Component, OnInit } from '@angular/core';
// declare var $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{


  constructor(){}

  //@ts-ignore
  userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
  is_user_logged_in = !!sessionStorage.getItem('infoLogin')


  ngOnInit(): void {
    // $('.table').DataTable();

    console.log(this.userInfo);

  }


}
