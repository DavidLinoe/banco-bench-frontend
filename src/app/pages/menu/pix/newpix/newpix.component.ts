import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PixComponent } from '../pix.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newpix',

  templateUrl: './newpix.component.html',
  styleUrl: './newpix.component.scss',
})
export class NewpixComponent {

  public payForm: FormGroup;

  toPay: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [, [Validators.min(0), Validators.required]],
      
    });
    
  }
  mudarChave(){

    var chave = document.getElementById('choose');
  

  console.log(chave)
  }


   

  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

  @Input() public tipoPix: string; //quando é um componente pai

  public qrConditionView: boolean = true;

  public xInput = 'input[input-pix="x"]';

  public chaveAleatoria: string = '';

  qrView() {
    console.log(this.chaveAleatoria);

    if (this.chaveAleatoria === '') {
      alert('Todos os campos devem estar preenchidos!');
    } else if (this.chaveAleatoria === 'chaveteste') {
      this.qrConditionView = !this.qrConditionView;

      // window.open('../../../../../assets/images/qrcode-pix.png')
    } else {
      alert('Chave Invalida');
    }
  }
}
