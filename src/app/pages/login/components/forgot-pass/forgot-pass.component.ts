import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  // standalone: true,
  // imports: [],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.scss',
})
export class ForgotPassComponent {
  public forgotForm: FormGroup;
  public rotaDinamica: string | null = localStorage.getItem('BACKEND');

  public loginErr: string;

  public load: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: [
        ,
        [Validators.email, Validators.required, Validators.maxLength(50)],
      ],

      senha: [
        ,
        [
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.required,
        ],
      ],
      cpf: [
        ,
        [
          Validators.maxLength(11),
          Validators.required,
          Validators.pattern('[0-9]*'),
        ],
      ],
      telefone: [
        ,
        [
          Validators.maxLength(11),
          Validators.required,
          Validators.pattern('[0-9]*'),
        ],
      ],
    });
  }

  enviarLogin() {
    let resposta: any;
    let sucess: boolean = true;

    if (!resposta) {
      this.routerNavigate.navigateByUrl('/loading');
      sucess = false;

      setTimeout(() => {
        if (!sucess) {
          resposta = this.http
            .post(this.rotaDinamica + '/authentication', {
              dados: this.forgotForm.value,
            })
            .subscribe({
              next: (res: any) => {
                sessionStorage.setItem('id_cliente', res.token);

                this.routerNavigate.navigateByUrl('/pages');
                // setTimeout(function() {
                //   location.reload();
                // }, 40);
              },
              error: (err: any) => {
                console.log('erro');
                alert('Email ou Senha Invalidos !');
                this.routerNavigate.navigateByUrl('/');
              },
            });
        }
      }, 1000);
    }
  }

  loginError() {
    if (this.forgotForm.get('senha')!.hasError('maxlength')) {
      this.loginErr = 'Senha Exede o Tamanho Maximo!';
    } else if (this.forgotForm.get('email')!.hasError('maxlength')) {
      this.loginErr = 'Email Exede o Tamanho Maximo!';
    } else if (this.forgotForm.get('email')!.hasError('email')) {
      this.loginErr = 'Email invalido!';
    } else {
      this.loginErr = '';
    }
  }
}
