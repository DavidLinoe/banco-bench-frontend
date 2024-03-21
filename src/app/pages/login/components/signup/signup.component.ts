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

  public rotaDinamica:string | null = localStorage.getItem('BACKEND');


  public RegisterForm: FormGroup;
  constructor(
     private formBuilder: FormBuilder,
     private http: HttpClient,
     private routerNavigate: Router,
     private userService: UserService
    ) {}
  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      nome: [, Validators.required],

      telefone: [, Validators.required],

      email: [, [Validators.email, Validators.required]],

      senha: [, Validators.required],

      cpf: [, Validators.required],
    });
  }
  enviarRegistro() {
    this.http
      .post(this.rotaDinamica +'/authentication/register', {
        dados: this.RegisterForm.value,
      })
      .subscribe({
        next: (res: any) => {
          console.log('res');
          this.routerNavigate.navigateByUrl('/reload');
          localStorage.setItem('check', '');
          alert('Cadastro Realizado Com Sucesso!');
        },
        error: (err: any) => {
          console.log('erro');
          localStorage.setItem('check', 'checked');
        },
      });
}
checked: any;
check() {
  this.checked = !this.checked;

  if (!this.checked) {
    localStorage.setItem('check', 'checked');
  } else {
    localStorage.setItem('check', '');
  }
}
}
