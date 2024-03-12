import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PixService } from '../../../../services/pix.service';

@Component({
  selector: 'app-pix-modal-router',

  templateUrl: './pix-modal-router.component.html',
  styleUrl: './pix-modal-router.component.scss',
})
export class PixModalRouterComponent {
  public state: string = 'pagar';
  public payForm: FormGroup;
  public key: any;

  public qrConditionView: boolean = true;
  public chaveAleatoria: any;
  public chaveCorreta: any;
  public valor: any;
  // public stateChange: any;

  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

  constructor(
    private formBuilder: FormBuilder,
    public pixService: PixService
  ) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.min(0), Validators.required]],
    });
    this.keyF();
  }
  comprovante() {
    this.state = 'comprovante';
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
    localStorage.setItem('modalOpen', 'fechar');
    setTimeout(() => {
      localStorage.removeItem('modalOpen');
    }, 430);
  }
  modalNext() {
    localStorage.setItem('stateChange', 'true');
    console.log('modal next ', localStorage.getItem('stateChange'));

    this.chaveAleatoria = localStorage.getItem('chaveAleatoria');
    this.chaveCorreta = localStorage.getItem('chavePix');
    this.valor = localStorage.getItem('valor');

    // this.chaveCorreta = this.pixService.chaveExistente.getValue().telefone;//SE FOR USAR O SERVICE

    console.log('log no modalRouter chave Digitada= ', this.chaveAleatoria);
    console.log('log no modalRouter chave Correta= ', this.chaveCorreta);

    if (this.chaveAleatoria === this.chaveCorreta &&this.chaveCorreta != null) {
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
  }
}
