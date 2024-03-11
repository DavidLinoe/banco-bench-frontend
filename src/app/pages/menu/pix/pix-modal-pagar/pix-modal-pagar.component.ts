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
  
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.required]],
      chave: [],
      chaveAleatoria: [],
    });
    
  }

  public state: string = 'pagar';
  public payForm: FormGroup;
  valor: any;

  @ViewChild('teste') public componente: string;
  private _PixModalPagarComponent: PixModalPagarComponent;
 
  @Output() public conferirValor: any ; //quando é um componente pai

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
    this.conferirValor = this.payForm.value.amount
    if (localStorage.getItem('stateChange') == 'true') {
      console.log('Log no waitChange pix modal Router Funciona');
      if(this.conferirValor > 0 ){
        this.chaveAleatoria();
      }else{
        this.valor = localStorage.setItem("valor","valor");

      }

    } else {
      console.log('Log no waitChange pix modal Router NAO FUNCIONAAAAAAA');
    }
    // console.log('Aguardando Ser True');
  }
  chaveAleatoria() {
    localStorage.setItem('chaveAleatoria', this.payForm.value.chaveAleatoria);
    console.log(' log da chave digitada ',localStorage.getItem('chaveAleatoria')
    );

    this.verificarChave();
  }

  verificarChave() {
    this.http
      .post('http://localhost:3000/verificar/chave', {
        dadosChave: this.payForm.value.chaveAleatoria,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('chavePix', res.telefone.toString());
          // this.pixService.chaveExistente.next(res.telefone.toString()); //envia a res para o Pix service !

          console.log('Resposta do Next  ', res.telefone.toString());
        },
        error: (err: any) => {
          console.log('erro');
          localStorage.removeItem('chavePix');
        },
      });
  }
}
