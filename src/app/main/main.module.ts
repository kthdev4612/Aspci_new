import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { SideBarreComponent } from './side-barre/side-barre.component';
import { HeaderComponent } from './header/header.component';
import { QrcodeComponent } from './qrcode/qrcode.component';


@NgModule({
  declarations: [
    MainComponent,
    AccueilComponent,
    ListAgentComponent,
    SideBarreComponent,
    HeaderComponent,
    QrcodeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
