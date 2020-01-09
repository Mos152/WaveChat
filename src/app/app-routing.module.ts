import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate : [AuthGuard]},
  { path: 'login',  loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),canActivate: [NologinGuard]},
  { path: 'registro', loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule),canActivate:[NologinGuard]},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
