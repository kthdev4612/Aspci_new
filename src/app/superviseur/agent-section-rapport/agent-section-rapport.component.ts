import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-agent-section-rapport',
  templateUrl: './agent-section-rapport.component.html',
  styleUrls: ['./agent-section-rapport.component.scss']
})
export class AgentSectionRapportComponent implements OnInit{


  constructor(private http: ApiService){}


  @ViewChild('card') card: any
  data:any

  ngOnInit(): void {
    this.getAllReport()
  }



  getAllReport(){
    this.http.GetReport1()?.subscribe({
      next: (r:any)=>{
        this.data = r?.result
        console.log(this.data);

      }
    })
  }

  closeCard(cardElement: any){
    cardElement.style.display = 'none';
  }


}
