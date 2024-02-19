import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PixComponent } from '../pix.component';

@Component({
  selector: 'app-newpix',

  templateUrl: './newpix.component.html',
  styleUrl: './newpix.component.scss',
})
export class NewpixComponent {

  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

@Input() public tipoPix: string ;//quando é um componente pai


  
}
