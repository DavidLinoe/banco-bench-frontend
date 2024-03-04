import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbCardModule, NbDialogModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { LoginComponent } from './login/containers/login/login.component';
import { BoletoComponent } from './menu/boleto/boleto.component';
import { ExtratoComponent } from './menu/extrato/extrato.component';
import { TransferenciaComponent } from './menu/transferencia/transferencia.component';
import { PixComponent } from './menu/pix/pix.component';
import { CarteiraComponent } from './menu/carteira/carteira.component';
import { SacComponent } from './menu/sac/sac.component';
import { AboutComponent } from './menu/about/about.component';
import { AccountComponent } from './menu/account/account.component';
import { NewpixComponent } from './menu/pix/newpix/newpix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PixConfirmComponent } from './menu/pix/pix-confirm/pix-confirm.component';
import { PixModalPagarComponent } from './menu/pix/pix-modal-pagar/pix-modal-pagar.component';
import { PixModalCopiaColaComponent } from './menu/pix/pix-modal-copia-cola/pix-modal-copia-cola.component';
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
  {
    path: 'sac',
    component: SacComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    PixComponent,
    NewpixComponent,
    PixConfirmComponent,
    PixModalPagarComponent,
    PixModalCopiaColaComponent

  ],//declarar aqui as outras paginas que vao usar nb
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbSidebarModule,
    NbDialogModule.forRoot(),
    NbCardModule,//Card do nebular
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class PagesModule {

}
