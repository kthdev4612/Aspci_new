import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanneComponent } from './scanne.component';

const routes: Routes = [
  {
    path: '',
    component: ScanneComponent,
    children: [
      { path: '', redirectTo: 'scann_form', pathMatch: 'full' },
      { path: 'scann_form', component: ScanneComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanneRoutingModule { }
