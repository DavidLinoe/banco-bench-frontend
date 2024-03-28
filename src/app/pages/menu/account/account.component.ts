import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { PixService } from './../../../services/pix.service';
import { PerfilService } from '../../../services/perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  public perfilForm: FormGroup;
  public perfilFormSenha: FormGroup;
  public rotaDinamica: string | null = localStorage.getItem('BACKEND');

  ngOnInit(): void {
    this.perfilForm = this.formbuilder.group({
      nome: ['', [Validators.maxLength(35), Validators.pattern('[a-zA-Z ]*')]],
      emailC: [''],
      telefone: ['', [Validators.maxLength(11), Validators.pattern('[0-9]*')]],
      email: ['', [Validators.email, Validators.maxLength(50)]],

      // conta: [''],
    });
    this.perfilFormSenha = this.formbuilder.group({
      senhaAtual: [
        '',
        [
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.required,
        ],
      ],
      senhaNova: ['', [Validators.minLength(6), Validators.maxLength(12)]],
      email: [''],
    });
  }

  constructor(
    public userService: UserService,
    public pixService: PixService,
    public perfilService: PerfilService,
    public formbuilder: FormBuilder,
    public http: HttpClient,
    public routerNavigate: Router
  ) {}

  salvarSenha() {
    if (this.perfilFormSenha.value.email == '') {
      this.perfilFormSenha.value.email = this.perfilService.dados.value.email;
    }

    this.http
      .post(this.rotaDinamica + '/perfil/senha', {
        dados: this.perfilFormSenha.value,
      })
      .subscribe({
        next: (res: any) => {
          // sessionStorage.setItem('id_cliente', res.token);
          alert('Senha Valida !');

          // if (this.perfilFormSenha.value.senhaNova == '') {
          //   this.perfilFormSenha.value.senhaNova = res.body.value.senhaCorreta;
          console.log('SENHA CORRETA NO SALVAR SENHA:', res.body);
          // }
          this.salvarAlteracoes();
        },
        error: (err: any) => {
          console.log('erro');
          alert('Senha Atual Invalida !');
          this.routerNavigate.navigateByUrl('/pages/account');
        },
      });
  }
  salvarAlteracoes() {
    if (this.perfilForm.value.nome == '') {
      this.perfilForm.value.nome = this.perfilService.dados.value.nome_cliente;
    }
    if (this.perfilForm.value.email == '') {
      this.perfilForm.value.email = this.perfilService.dados.value.email;
    }
    if (this.perfilForm.value.telefone == '') {
      this.perfilForm.value.telefone = this.perfilService.dados.value.telefone;
    }
    if (this.perfilFormSenha.value.senhaNova == '') {
      this.perfilFormSenha.value.senhaNova = this.perfilFormSenha.value.senhaAtual;
    }
    if (this.perfilForm.value.emailC == '') {
      this.perfilForm.value.emailC = this.perfilService.dados.value.email;
    }

    this.http
      .post(this.rotaDinamica + '/perfil/alterar', {
        dados: this.perfilForm.value,
        dados1: this.perfilFormSenha.value.senhaNova,
      })
      .subscribe({
        next: (res: any) => {
          // sessionStorage.setItem('id_cliente', res.token);
          alert('Dados Alterados !');
          this.routerNavigate.navigateByUrl('/pages/account');
        },
        error: (err: any) => {
          console.log('erro');
            alert('Dados Alterados !');
          this.routerNavigate.navigateByUrl('/pages/account');
        },
      });
  }
}
