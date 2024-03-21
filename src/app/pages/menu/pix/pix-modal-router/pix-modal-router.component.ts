import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PixService } from '../../../../services/pix.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-pix-modal-router',

  templateUrl: './pix-modal-router.component.html',
  styleUrl: './pix-modal-router.component.scss',
})
export class PixModalRouterComponent {
  public state: string = 'pagar';
  public payForm: FormGroup;
  public balanceForm: FormGroup;

  public key: any;

  public qrConditionView: boolean = true;
  public chaveAleatoria: any;
  public chaveCorreta: any;
  public valor: any;
  // public stateChange: any;
  public currentAmount: any;
  public clear: any;
  public clx: any;

  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

  constructor(
    private formBuilder: FormBuilder,
    public pixService: PixService,
    private http: HttpClient,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.min(0), Validators.required]],
    });

    this.keyF();
  }

  pagar() {
    this.state = 'pagar';
  }
  confirm() {
    this.state = 'confirm';
    localStorage.removeItem('chaveAleatoria');
    localStorage.removeItem('chavePix');
  }
  keyF() {
    this.key = sessionStorage.getItem('rp');
    setTimeout(() => {
      sessionStorage.removeItem('rp');
    }, 500);
  }
  closePix() {
    this.clx = localStorage.getItem('clx');
    localStorage.setItem('modalOpen', 'fechar');

    if (this.clx == 'clx') {
      setTimeout(function () {
        location.reload();
      }, 400);

      localStorage.clear();
    }

    setTimeout(() => {
      localStorage.removeItem('modalOpen');
    }, 430);
  }
  modalNext() {
    localStorage.setItem('stateChange', 'mdlnext');
    console.log('modal next ', localStorage.getItem('mdlnext'));

    this.chaveAleatoria = localStorage.getItem('chaveAleatoria');
    this.chaveCorreta = localStorage.getItem('chavePix');
    this.valor = localStorage.getItem('valor');

    // this.chaveCorreta = this.pixService.chaveExistente.getValue().telefone;//SE FOR USAR O SERVICE

    console.log('log no modalRouter chave Digitada= ', this.chaveAleatoria);
    console.log('log no modalRouter chave Correta= ', this.chaveCorreta);

    if (
      this.chaveAleatoria === this.chaveCorreta &&
      this.chaveCorreta != null
    ) {
      if (this.valor === 'valor') {
        alert('Insira Um Valor Valido !');
        localStorage.removeItem('valor');
      } else {
        localStorage.removeItem('valor');
        this.confirm();
      }
    } else {
      localStorage.removeItem('valor');
      alert('Insira Uma Chave Valida');
    }

    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();
    const hora = date.getHours();
    const min = date.getMinutes();

    const data = dia + '/' + mes + '/' + ano + ' ' + hora + 'h ' + min + 'min';
    // const hoje = dia + '/' + mes + '/' + ano ;

    console.log(data);
    localStorage.setItem('last-operation', data);
  }
  comprovante() {
    // const id_cliente = '1'
    // this.saldoAdd({id_cliente});//id_Remetente
    this.currentAmount = localStorage.getItem('valorAmount');

    this.saldoRemove({
      id_cliente: this.userService.usuario.getValue().id_cliente,
      saldo: this.currentAmount,
    });
  }
  saldoAdd(res: any) {
    this.http
      .post(localStorage.getItem('BACKEND')+'/saldo/add', {
        res,
      })
      .subscribe({
        next: (res: any) => {
          console.log('Next Do Comprovante! ');

          this.state = 'comprovante';
          this.clear = localStorage.setItem('clx', 'clx');
        },
        error: (err: any) => {
          console.log('Error Do Comprovante! ', err);
        },
      });
  }
  saldoRemove(res: any) {
    this.http
      .post(localStorage.getItem('BACKEND')+'/saldo/remove', {
        res,
      })
      .subscribe({
        next: (res: any) => {
          console.log('Next Do Comprovante! ');

          this.saldoAdd({
            id_cliente: this.pixService.chaveExistente.getValue().id_cliente,
            saldo: this.currentAmount,
          });
          //
        },
        error: (err: any) => {
          console.log('Error Do Comprovante! ', err);
          alert('Erro ao concluir o Pix, Verifique os campos e saldo !');
        },
      });
  }
}
