import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule,NbCardModule,NbThemeModule } from '@nebular/theme';



@NgModule({
  declarations: [LoginComponent,SigninComponent,SignupComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbCardModule,
   // NbThemeModule.forRoot(),
  ]
})
export class LoginModule { }
