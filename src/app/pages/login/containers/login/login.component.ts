import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
interface loginResponse {
  validation: boolean;
  email: string;
  senha: string;
}
@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  public conditionSignIn: boolean = true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    localStorage.setItem(
      'BACKEND',
      'https://smiling-quality-mudfish.ngrok-free.app'// rota ngrok fixa 
    );
    // localStorage.setItem('check', 'checked');

    this.loginForm = this.formBuilder.group({
      email: ['david@gmail.com', [Validators.email, Validators.required]],

      senha: ['senha123', Validators.required],
    });
  }

  modificarCardLogin() {
    this.conditionSignIn = !this.conditionSignIn;
  }
}
