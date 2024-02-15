import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
} from '@nebular/theme';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
  exports:[
    NavigationComponent

  ]
})
export class NavigationModule {}
