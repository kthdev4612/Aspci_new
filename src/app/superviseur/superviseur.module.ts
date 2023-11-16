import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperviseurRoutingModule } from './superviseur-routing.module';
import { SuperviseurComponent } from './superviseur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SideBarreComponent } from './side-barre/side-barre.component';
import { HeaderComponent } from './header/header.component';
import { AgentSectionRapportComponent } from './agent-section-rapport/agent-section-rapport.component';
import { ListSectionAgentComponent } from './list-section-agent/list-section-agent.component';
import { QrCodeComponent } from './qr-code/qr-code.component';


@NgModule({
  declarations: [
    SuperviseurComponent,
    AccueilComponent,
    SideBarreComponent,
    HeaderComponent,
    AgentSectionRapportComponent,
    ListSectionAgentComponent,
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    SuperviseurRoutingModule
  ]
})
export class SuperviseurModule { }
