import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{
  ngOnInit(): void {
    $('.table').DataTable();
  }
 

}
