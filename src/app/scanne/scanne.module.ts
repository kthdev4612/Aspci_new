import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanneRoutingModule } from './scanne-routing.module';
import { ScanneComponent } from './scanne.component';
import { ScanneFormComponent } from './scanne-form/scanne-form.component';


@NgModule({
  declarations: [
    ScanneComponent,
    ScanneFormComponent
  ],
  imports: [
    CommonModule,
    ScanneRoutingModule
  ]
})
export class ScanneModule { }
