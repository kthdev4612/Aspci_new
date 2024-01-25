import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-presence-matinale',
  templateUrl: './presence-matinale.component.html',
  styleUrls: ['./presence-matinale.component.scss']
})
export class PresenceMatinaleComponent implements OnInit{


  constructor(private http: ApiService){}

  data:any
  ngOnInit(): void {
    this.Presence()
  }


  Presence(){
    this.http.GetReport().subscribe({
      next: (res:any)=>{
        this.data = res?.result
        console.log(this.data);

      }
    })
  }

}
