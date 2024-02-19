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


  saldo:string = "30"
  toPay:string = ""


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: ['', [Validators.min(0), Validators.required]],

    });
    
  }








  @Output() public fecharPix: EventEmitter<boolean> = new EventEmitter(); //quando é um componente filho

@Input() public tipoPix: string ;//quando é um componente pai


  
}
