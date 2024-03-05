import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pix-modal-router',

  templateUrl: './pix-modal-router.component.html',
  styleUrl: './pix-modal-router.component.scss',
})
export class PixModalRouterComponent {
  public state: string = 'pagar';
  public payForm: FormGroup;
  public key: any;

  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.min(0), Validators.required]],
    });
  }
  comprovante() {
    this.state = 'comprovante';
  }
  pagar() {
    this.state = 'pagar';
  }
  confirm() {
    this.state = 'confirm';
  }
  keyF() {
    this.key = sessionStorage.getItem('rp');
    setTimeout(() => {
      sessionStorage.removeItem('rp');
    }, 500);
  }
}
