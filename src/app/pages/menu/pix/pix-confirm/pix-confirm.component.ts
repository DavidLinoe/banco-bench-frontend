import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pix-confirm',

  templateUrl: './pix-confirm.component.html',
  styleUrl: './pix-confirm.component.scss'
})

export class PixConfirmComponent {

  @Input() public tipoPix: string; //quando é um componente pai
  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

tipoIf(){
    
  this.tipoPix = "pagar"
}
}
