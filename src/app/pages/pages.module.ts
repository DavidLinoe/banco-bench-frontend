import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { LoginComponent } from './login/containers/login/login.component';
import { BoletoComponent } from './menu/boleto/boleto.component';
import { ExtratoComponent } from './menu/extrato/extrato.component';
import { TransferenciaComponent } from './menu/transferencia/transferencia.component';
import { PixComponent } from './menu/pix/pix.component';
import { CarteiraComponent } from './menu/carteira/carteira.component';
// import { NavigationComponent } from '../navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
    component: CarteiraComponent,
  },

  {
    path: 'pix',
    component: PixComponent,
  },

  {
    path: 'transferencia',
    component: TransferenciaComponent,
  },

  {
    path: 'boleto',
    component: BoletoComponent,
  },

  {
    path: 'extrato',
    component: ExtratoComponent,
  },
]

@NgModule({
  declarations: [DashboardComponent],//declarar aqui as outras paginas que vao usar nb
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbSidebarModule,
  ]
})
export class PagesModule {
  constructor(){
    console.log('b');
    
  }
}
