import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/containers/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: '',
    loadChildren: () =>
      import('./aplicacao/aplicacao.module').then((m) => m.AplicacaoModule),
  },

  {
    path: 'home',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'carteira',
    component: LoginComponent,
  },

  {
    path: 'pix',
    component: LoginComponent,
  },

  {
    path: 'transferencia',
    component: LoginComponent,
  },

  {
    path: 'boleto',
    component: LoginComponent,
  },

  {
    path: 'extrato',
    component: LoginComponent,
  },
];
