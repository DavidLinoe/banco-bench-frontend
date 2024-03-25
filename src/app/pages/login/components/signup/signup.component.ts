import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  public rotaDinamica: string | null = localStorage.getItem('BACKEND');

  public registerErr: string;

  public RegisterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      nome: [
        ,
        [
          Validators.maxLength(35),
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
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
    });
  }
  enviarRegistro() {
    this.http
      .post(this.rotaDinamica + '/authentication/register', {
        dados: this.RegisterForm.value,
      })
      .subscribe({
        next: (res: any) => {
          console.log('res');
          this.routerNavigate.navigateByUrl('/reload');
          localStorage.removeItem('check');
          alert('Cadastro Realizado Com Sucesso!');
        },
        error: (err: any) => {
          if(err.status == 405) {
            alert('Email ja Cadastrado ! Tente Logar');
           }
          else if(err.status == 409) {
            alert('CPF ja Cadastrado !');
           }
           else if (err.status == 412) {
            alert('Telefone ja Cadastrado !');
           }
           else{
            alert('UAI!');

           }
          // }
          //   else if ((err.status = 409)) {
          //     console.log(err.status);
          //     alert('Cpf ja Cadastrado !');
          //   }

          //   else if ((err.status = 412)) {
          //     console.log(err.status);
          //     alert('Telefone ja Cadastrado !');
          //   }
          //   else{
          //     alert('UAI !!!');

          //   }

          // console.log('erro');
        },
      });
  }
  // check() {

  //   localStorage.removeItem('check');
  // }

  registerError() {
    if (this.RegisterForm.get('senha')!.hasError('maxlength')) {
      this.registerErr = 'Senha Muito Grande, Tu vai esquecer ! ';
    } else if (this.RegisterForm.get('senha')!.hasError('minlength')) {
      this.registerErr = 'Senha Muito Miuda, Vao te Hackear ! ';
    } else if (this.RegisterForm.get('email')!.hasError('email')) {
      this.registerErr = 'Não é um formato de email válido. ';
    } else if (this.RegisterForm.get('email')!.hasError('maxlength')) {
      this.registerErr = 'Email Gigante, Tu vai esquecer ! ';
    } else if (this.RegisterForm.get('nome')!.hasError('maxlength')) {
      this.registerErr = 'Nome Gigante Ein, Dom Predo De Primas?  ';
    } else if (this.RegisterForm.get('nome')!.hasError('pattern')) {
      this.registerErr = 'Nome De Numero? Novidade No Cartorio  ';
    } else if (this.RegisterForm.get('telefone')!.hasError('maxlength')) {
      this.registerErr = 'Telefone de outro Planeta ? Digita um valido ai ';
    } else if (this.RegisterForm.get('telefone')!.hasError('pattern')) {
      this.registerErr = 'Telefone ou Texto ? Converte ele para Binario  ';
    } else if (this.RegisterForm.get('cpf')!.hasError('maxlength')) {
      this.registerErr = ' CPF de outro Planeta ? Digita um valido ai !  ';
    } else if (this.RegisterForm.get('cpf')!.hasError('pattern')) {
      this.registerErr = 'CPF Apenas Numeros ';
    } else {
      this.registerErr = '';
    }
  }
}
