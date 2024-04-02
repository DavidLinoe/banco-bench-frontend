import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbThemeModule } from '@nebular/theme';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { HomeComponent } from '../../home/home.component';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
  provideNgxMask,
} from 'ngx-mask';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,
    ForgotPassComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbCardModule,
    CheckboxComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NgxMaskDirective,
    NgxMaskPipe,

    // NbThemeModule.forRoot(),
  ],
})
export class LoginModule {}
