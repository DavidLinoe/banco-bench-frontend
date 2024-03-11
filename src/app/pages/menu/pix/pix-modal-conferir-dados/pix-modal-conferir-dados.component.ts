import { Component, Input, Output, ViewChild } from '@angular/core';
import { PixModalPagarComponent } from '../pix-modal-pagar/pix-modal-pagar.component';

@Component({
  selector: 'app-pix-modal-conferir-dados',
  templateUrl: './pix-modal-conferir-dados.component.html',
  styleUrl: './pix-modal-conferir-dados.component.scss',
})
export class PixModalConferirDadosComponent {
  @Input() public conferirValor: string; //quando é um componente pai

}
