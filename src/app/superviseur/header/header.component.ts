import { Component, OnInit } from '@angular/core';
declare var $:any


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(){}

  //@ts-ignore
  userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
  is_user_logged_in = !!sessionStorage.getItem('infoLogin')


  ngOnInit(): void {
    console.log(this.userInfo);

  }


  logout(){
    $.removeCookie('isLoggedIn', { path: '/' });
    sessionStorage.removeItem('infoLogin')
    window.location.href = '/'
  }
}
