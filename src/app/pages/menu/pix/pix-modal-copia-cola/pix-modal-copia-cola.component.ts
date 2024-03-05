import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pix-modal-copia-cola',
  templateUrl: './pix-modal-copia-cola.component.html',
  styleUrl: './pix-modal-copia-cola.component.scss',
})
export class PixModalCopiaColaComponent {

  @Input() public fecharPix: EventEmitter<boolean> = new EventEmitter(); 
  @Output() public tipoPix: string;


  public payForm: FormGroup;

  public qrConditionView: boolean = true;
  public chaveAleatoria: string = '';

  qrView() {
    if (this.chaveAleatoria === '') {
      alert('Todos os campos devem estar preenchidos!');
    } else if (this.chaveAleatoria === 'chaveteste') {
      this.qrConditionView = !this.qrConditionView;

      // window.open('../../../../../assets/images/qrcode-pix.png')
    } else {
      alert('Chave Invalida');
    }
  }
  modalPix() {
    this.tipoPix = 'confirm';
  }
  fecharModal() {}
}
