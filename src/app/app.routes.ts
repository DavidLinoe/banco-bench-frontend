import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/containers/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'reload',
    component: LoginComponent,
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },

  {
    path: '',
    loadChildren: () =>
      import('./aplicacao/aplicacao.module').then((m) => m.AplicacaoModule),
  },

];
