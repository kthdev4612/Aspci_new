import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{


  constructor(private http: ApiService){}


  data:any
  ngOnInit(): void {
    this.getAllStatusReport()
  }



  getAllStatusReport(){
    this.http.GetReportStatus().subscribe({
      next: (r:any)=>{
        this.data = r?.result
        if (r?.status === "success") {
          setTimeout(() => {
            $('.table').DataTable()
          }, 1000);
        }
      }
    })
  }
}
