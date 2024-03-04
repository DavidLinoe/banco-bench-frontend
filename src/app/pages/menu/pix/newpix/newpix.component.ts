import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newpix',

  templateUrl: './newpix.component.html',
  styleUrl: './newpix.component.scss',
})
export class NewpixComponent {


  mudarChave(){

    var chave = document.getElementById('choose');
  

  console.log(chave)
  }


  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

  @Input() public tipoPix: string; //quando é um componente pai





  tipoIf(){

    
    this.tipoPix = "pagar"
    }


  pixConfirm(){

    
    this.tipoPix = "copia e cola"
    }





}
