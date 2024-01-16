import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  constructor(){}


  //@ts-ignore
  AdminInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
  is_user_logged_in = !!sessionStorage.getItem('infoLogin')


  ngOnInit(): void {
    console.log(this.AdminInfo);

  }

}
