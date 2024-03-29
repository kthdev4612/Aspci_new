import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'superviseur',
    loadChildren: () => import('./superviseur/superviseur.module').then((m) => m.SuperviseurModule),
  },
  {
    path: 'scanne',
    loadChildren: () => import('./scanne/scanne.module').then((m) => m.ScanneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
