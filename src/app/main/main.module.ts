import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { SideBarreComponent } from './side-barre/side-barre.component';
import { HeaderComponent } from './header/header.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { AgentRapportComponent } from './agent-rapport/agent-rapport.component';
import { FichePayeComponent } from './fiche-paye/fiche-paye.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    MainComponent,
    AccueilComponent,
    ListAgentComponent,
    SideBarreComponent,
    HeaderComponent,
    QrcodeComponent,
    AgentRapportComponent,
    FichePayeComponent,
    PartenaireComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
