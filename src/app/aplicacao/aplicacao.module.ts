import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';
import { NavigationComponent } from '../navigation/navigation.component';

export const routes: Routes = [

  // {
  //     path:'',component:LoginComponent

  // },
  {
      path:'pages',
     component: NavigationComponent,
      loadChildren:()=> import("../pages/pages.module").then(m => m.PagesModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AplicacaoModule { }
