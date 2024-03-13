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
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();
    const hora = date.getHours();
    const min = date.getMinutes();

    // const hoje = dia + '/' + mes + '/' + ano + ' ' + hora + 'h ' + min + 'min';
    const hoje = dia + '/' + mes + '/' + ano ;


    localStorage.setItem('dia', hoje);

    console.log(hoje);
  }
  // atualizarDados(){

  //   var data = localStorage.getItem('dia');
  //   var valor = localStorage.getItem('valorAmount');
  //   var nome = localStorage.getItem('nome');

  // }
  public atualizarDados = {
    "data": localStorage.getItem('dia'),
    "valor": localStorage.getItem('valorAmount'),
    "nome": localStorage.getItem('nome')
  }

  // public buscarDadosLocalStarege(name: string){
  //   return localStorage.getItem(name)
  // }
}
