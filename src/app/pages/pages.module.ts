import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
// import { NavigationComponent } from '../navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
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
