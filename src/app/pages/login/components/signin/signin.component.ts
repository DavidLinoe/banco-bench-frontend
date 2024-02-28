import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface loginResponse {
  validation: boolean;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'devoltapropassado@gmail.com',
        [Validators.email, Validators.required],
      ],

      senha: ['12345678', Validators.required],
    });
  }

  enviarLogin() {
    this.http
      .post('http://localhost:3000/authentication', {
        dados: this.loginForm.value,
      })
      .subscribe({
        next: (res: any) => {
          console.log('res');
          this.routerNavigate.navigateByUrl('pages');
        },
        error: (err: any) => {
          console.log('erro');
        },
      });
  }
}
