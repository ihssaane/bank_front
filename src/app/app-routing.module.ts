import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home/home.module').then((m) => m.HomeModule) },
  { path: 'clients', loadChildren: () => import('./pages/clients/clients/clients.module').then((m) => m.ClientsModule) },
  { path: 'comptes', loadChildren: () => import('./pages/comptes/comptes/comptes.module').then((m) => m.ComptesModule) },
  { path: 'operations', loadChildren: () => import('./pages/operations/operations/operations.module').then((m) => m.OperationsModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
