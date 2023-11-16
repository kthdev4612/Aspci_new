import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperviseurComponent } from './superviseur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListSectionAgentComponent } from './list-section-agent/list-section-agent.component';
import { AgentSectionRapportComponent } from './agent-section-rapport/agent-section-rapport.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
const routes: Routes = [
  {
    path: '',
    component: SuperviseurComponent,
    children: [
      { path: '', redirectTo: 'accueill', pathMatch: 'full' },
      { path: 'accueill', component: AccueilComponent },
      { path: 'lists_section_agents', component: ListSectionAgentComponent },
      {
        path: 'agent_section_rapport',
        component: AgentSectionRapportComponent,
      },
      {
        path: 'qrcode',
        component: QrCodeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperviseurRoutingModule {}
