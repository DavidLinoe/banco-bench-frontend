import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pix-modal-pagar',
  templateUrl: './pix-modal-pagar.component.html',
  styleUrl: './pix-modal-pagar.component.scss'
})
export class PixModalPagarComponent {

  public payForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.min(0), Validators.required]],
      
    });
    
  }
mudarChave(){

}

tipoIf(){

}
pixConfirm(){}


}
