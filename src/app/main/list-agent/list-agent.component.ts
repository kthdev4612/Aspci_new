import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss'],
})
export class ListAgentComponent implements OnInit {
  ngOnInit(): void {
    $('.table').DataTable();
  }
}
