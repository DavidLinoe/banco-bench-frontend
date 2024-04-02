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

  recuperar() {
    let resposta: any;
    let sucess: boolean = true;

    if (!resposta) {
      // this.routerNavigate.navigateByUrl('/loading');
      sucess = false;

      // setTimeout(() => {
      if (!sucess) {
        resposta = this.http
          .post(this.rotaDinamica + '/recuperar', {
            dados: this.forgotForm.value,
          })
          .subscribe({
            next: (res: any) => {
              alert('Senha Atualizada, Verifique Sua caixa de entrada email !');

              setTimeout(function () {
                location.reload();
              }, 400);
            },
            error: (err: any) => {
              console.log('erro');
              alert('Dados Não Conferem !');
              // this.routerNavigate.navigateByUrl('/');
            },
          });
      }
      // }, 1000);
    }
  }

  loginError() {
    if (this.forgotForm.get('email')!.hasError('maxlength')) {
      this.loginErr = 'Email Exede o Tamanho Maximo!';
    } else if (this.forgotForm.get('email')!.hasError('email')) {
      this.loginErr = 'Email invalido!';
    } else {
      this.loginErr = '';
    }
  }
}
