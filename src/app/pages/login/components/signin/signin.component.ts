import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

interface loginResponse {
  validation: boolean;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-signin',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  public rotaDinamica: string | null = localStorage.getItem('BACKEND');

  public loginErr: string;

  public load: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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
              dados: this.loginForm.value,
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
      },1000);
    }
  }

  loginError() {
    if (this.loginForm.get('senha')!.hasError('maxlength')) {
      this.loginErr = 'Senha Exede o Tamanho Maximo!';
    } else if (this.loginForm.get('email')!.hasError('maxlength')) {
      this.loginErr = 'Email Exede o Tamanho Maximo!';
    } else if (this.loginForm.get('email')!.hasError('email')) {
      this.loginErr = 'Email invalido!';
    } else {
      this.loginErr = '';
    }
  }
}
// while (!resposta)
// try {
//   resposta = this.http
//     .post(this.rotaDinamica + '/authentication', {
//       dados: this.loginForm.value,
//     })
//     .subscribe({
//       next: (res: any) => {
//         sessionStorage.setItem('id_cliente', res.token);

//         this.routerNavigate.navigateByUrl('/pages');
//         // setTimeout(function() {
//         //   location.reload();
//         // }, 40);
//       },
//       error: (err: any) => {
//         console.log('erro');
//         alert('Email ou Senha Invalidos !');
//       },
//     });
// } catch (error) {
//   this.load = !this.load;

//   if (this.load) {
//     setTimeout(() => {
//       this.routerNavigate.navigateByUrl('/loading');
//     }, 2000);
//   }
// }
