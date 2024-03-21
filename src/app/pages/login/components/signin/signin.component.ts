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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  public rotaDinamica:string | null = localStorage.getItem('BACKEND');

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [,[Validators.email, Validators.required],],

      senha: [, Validators.required],

    });
  }

  enviarLogin() {
    this.http
      .post(this.rotaDinamica + '/authentication', {
        dados: this.loginForm.value,
      })
      .subscribe({
        next: (res: any) => {
          // sessionStorage.setItem("id_cliente",res.id_cliente.toString())
          // const id_cliente = res.id_cliente.toString()

          sessionStorage.setItem("id_cliente",res.token)

          // const id_cliente = sessionStorage.getItem("id_cliente")


          // // const token_cliente = res.id_cliente.toString()
          // console.log("Token do Usuario: ",id_cliente)



          // sessionStorage.setItem("token_cliente",res.token.toString())
          // this.enviarDadosUser(res.token.toString()); //envia a res para o service !

         // localStorage.setItem("id_cliente",res.id_cliente.toString())
          // this.userService.usuario.next(res) //envia a res para o service !
          // const id_cliente = sessionStorage.getItem("id_cliente")

          // this.enviarDadosUser({token_cliente});
          // this.enviarDadosUser({id_cliente});

          this.routerNavigate.navigateByUrl('/pages');
          // setTimeout(function() {
          //   location.reload();
          // }, 40);
        
        },
        error: (err: any) => {
          console.log('erro');
          alert("Email ou Senha Invalidos !")
        },
      });
  }


 
}
