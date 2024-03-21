import { Component, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PixService } from '../../../../services/pix.service';
import { PixModalConferirDadosComponent } from '../pix-modal-conferir-dados/pix-modal-conferir-dados.component';
@Component({
  selector: 'app-pix-modal-pagar',
  templateUrl: './pix-modal-pagar.component.html',
  styleUrl: './pix-modal-pagar.component.scss',
})
export class PixModalPagarComponent {
  valorAmount: any;

  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.required]],
      chave: [],
      chaveAleatoria: [],
      choose: [],
    });

    // const chaveSelecionada = this.payForm.value.choose
  }

  public state: string = 'pagar';
  public payForm: FormGroup;
  valor: any;

  @ViewChild('teste') public componente: string;
  private _PixModalPagarComponent: PixModalPagarComponent;

  @Output() public conferirValor: any; //quando é um componente pai

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public pixService: PixService
  ) {}

  comprovante() {
    this.state = 'comprovante';
  }
  pagar() {
    this.state = 'pagar';
  }
  confirm() {
    this.state = 'confirm';
  }

  waitChange() {
    this.conferirValor = this.payForm.value.amount;
    this.valorAmount = this.payForm.value.amount;
    localStorage.setItem('valorAmount', this.valorAmount);
    localStorage.setItem('stateChange', 'mdlnext');
    localStorage.setItem('chaveAleatoria', this.payForm.value.chaveAleatoria);

    if (localStorage.getItem('stateChange') == 'mdlnext') {
      console.log('Log no waitChange pix modal Router Funciona');
      if (this.conferirValor > 0) {
        this.chaveAleatoria();
        localStorage.removeItem('valor');
      } else {
        this.valor = localStorage.setItem('valor', 'valor');
      }
    } else {
      console.log('Log no waitChange pix modal Router NAO ');
    }
  }
  chaveAleatoria() {
    localStorage.setItem('chaveAleatoria', this.payForm.value.chaveAleatoria);
    console.log(
      ' log da chave digitada ',
      localStorage.getItem('chaveAleatoria')
    );
    console.log('log do choose', this.payForm.value.choose);

    if (this.payForm.value.choose === '3') {
      this.verificarChaveTelefone();
    } else if (this.payForm.value.choose === '4') {
      this.verificarChaveEmail();
    } else {
      this.verificarChaveCpf(); //cpf e cpnj depois
    }
  }

  verificarChaveTelefone() {
    this.http
      .post(localStorage.getItem('BACKEND')+'/verificar/chave/telefone', {
        dadosChave: this.payForm.value.chaveAleatoria,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('chavePix', res.telefone.toString());
          console.log('Resposta do Next Telefone  ', res.telefone);
          this.pixService.chaveExistente.next(res); //envia a res para o service !
        },
        error: (err: any) => {
          console.log('Nenhuma Chave Telefone Encontrada !');
          localStorage.removeItem('chavePix');
        },
      });
  }
  verificarChaveEmail() {
    this.http
      .post(localStorage.getItem('BACKEND')+'/verificar/chave/email', {
        dadosChave: this.payForm.value.chaveAleatoria,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('chavePix', res.email.toString());
          console.log('Resposta do Next Email ', res.email.toString());
          this.pixService.chaveExistente.next(res); //envia a res para o service !
        },
        error: (err: any) => {
          console.log('Nenhuma Chave Email Encontrada ! ');
          localStorage.removeItem('chavePix');
        },
      });
  }
  verificarChaveCpf() {
    this.http
      .post(localStorage.getItem('BACKEND')+'/verificar/chave/cpf', {
        dadosChave: this.payForm.value.chaveAleatoria,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('chavePix', res.cpf.toString());
          console.log('Resposta do Next Email ', res.cpf.toString());
          this.pixService.chaveExistente.next(res); //envia a res para o service !
        },
        error: (err: any) => {
          console.log('Nenhuma Chave Cpf Encontrada ! ');
          localStorage.removeItem('chavePix');
        },
      });
  }
}
