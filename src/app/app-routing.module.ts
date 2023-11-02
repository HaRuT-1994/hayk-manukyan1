import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/landing/landing.component').then((x) => x.LandingComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./modules/contact/contact.component').then((x) => x.ContactComponent),

  }, 
  {
    path: 'note',
    loadComponent: () => import('./modules/notes/notes.component').then((x) => x.NotesComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component').then((x) => x.AboutComponent),
  },
  {
    path: 'admin',
    loadComponent: () => import('./modules/amdin/amdin-login.component').then((x) => x.AmdinLoginComponent),
  },
  {
    path: 'admin/home',
    loadComponent: () => import('./modules/amdin/components/admin-home/admin-home.component').then((x) => x.AdminHomeComponent),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
