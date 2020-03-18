import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[AuthGuard]},
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'listaproprietarios',
    loadChildren: () => import('./listaproprietarios/listaproprietarios.module').then( m => m.ListaproprietariosPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'confirmareserva/:id_prop',
    loadChildren: () => import('./confirmareserva/confirmareserva.module').then( m => m.ConfirmareservaPageModule)
  },
  {
    path: 'confirmasaida',
    loadChildren: () => import('./confirmasaida/confirmasaida.module').then( m => m.ConfirmasaidaPageModule)
  },
  {
    path: 'listavagasprop',
    loadChildren: () => import('./listavagasprop/listavagasprop.module').then( m => m.ListavagaspropPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
