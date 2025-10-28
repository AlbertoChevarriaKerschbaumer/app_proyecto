import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'apsti',
    loadComponent: () => import('./apsti/apsti.page').then( m => m.ApstiPage)
  },
  {
    path: 'enfermeria',
    loadComponent: () => import('./enfermeria/enfermeria.page').then( m => m.EnfermeriaPage)
  },
  {
    path: 'contabilidad',
    loadComponent: () => import('./contabilidad/contabilidad.page').then( m => m.ContabilidadPage)
  },
];
