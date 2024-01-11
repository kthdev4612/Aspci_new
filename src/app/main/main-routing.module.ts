import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { AgentRapportComponent } from './agent-rapport/agent-rapport.component';
import { FichePayeComponent } from './fiche-paye/fiche-paye.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'accueill', pathMatch: 'full' },
      { path: 'accueill', component: AccueilComponent },
      { path: 'lists_agents', component: ListAgentComponent },
      { path: 'fiche_paye', component: FichePayeComponent },
      { path: 'qrcode', component: QrcodeComponent },
      { path: 'partenaire', component: PartenaireComponent },
      { path: 'edit/:u_uid', component: EditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
