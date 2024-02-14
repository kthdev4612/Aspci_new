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
import { PresenceMatinaleComponent } from './presence-matinale/presence-matinale.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { ReactiveFormsModule } from '@angular/forms';
// import DataTable from 'datatables.net-dt';


@NgModule({
  declarations: [
    SuperviseurComponent,
    AccueilComponent,
    SideBarreComponent,
    HeaderComponent,
    AgentSectionRapportComponent,
    ListSectionAgentComponent,
    QrCodeComponent,
    PresenceMatinaleComponent,
    AgentProfileComponent,
    ViewReportComponent
  ],
  imports: [
    CommonModule,
    SuperviseurRoutingModule,
    ReactiveFormsModule,
    // DataTable
  ]
})
export class SuperviseurModule { }
