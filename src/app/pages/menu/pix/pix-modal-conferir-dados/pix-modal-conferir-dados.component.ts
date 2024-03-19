import { Component, Input, Output, ViewChild } from '@angular/core';
import { PixModalPagarComponent } from '../pix-modal-pagar/pix-modal-pagar.component';
import { isDate } from 'util/types';

@Component({
  selector: 'app-pix-modal-conferir-dados',
  templateUrl: './pix-modal-conferir-dados.component.html',
  styleUrl: './pix-modal-conferir-dados.component.scss',
})
export class PixModalConferirDadosComponent {
  @Input() public conferirValor: string; //quando é um componente pai
  constructor() {
 
  }

  public atualizarDados = {
    
    "data": localStorage.getItem('last-operation'),
    "valor": localStorage.getItem('valorAmount'),
    "nome": localStorage.getItem('nome')
  }


}
