import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { NewpixComponent } from './newpix/newpix.component';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-pix',

  templateUrl: './pix.component.html',
  styleUrl: './pix.component.scss',
})
export class PixComponent {
  constructor(private dialogService: NbDialogService) {}

  @ViewChild('pixpay') public newPixComponent: TemplateRef<NewpixComponent>;

  public eyeCondition: boolean = true;
  private _newPixComponent:NbDialogRef<NewpixComponent>;
  public tipoPix: string;

  user: string = 'David Eduardo Lino';
  saldo: string = ' 300 $';
  bSaldo = this.saldo;

pagarPix(){

this._newPixComponent = this.dialogService.open(this.newPixComponent)


this.tipoPix = "pagar"
}
copiaColaPix(){

  this._newPixComponent = this.dialogService.open(this.newPixComponent)
  
  
  this.tipoPix = "copia e cola"
  }
  

fecharPix(){

this._newPixComponent.close();


}
  eye() {
    setTimeout(() => {
      this.eyeCondition = !this.eyeCondition;
      if (!this.eyeCondition) this.saldo = '';
      else this.saldo = this.bSaldo;
    }, 400);
  }

}
