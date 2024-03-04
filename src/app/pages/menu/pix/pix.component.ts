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

  private _newPixComponent: NbDialogRef<NewpixComponent>;

  public tipoPix: string;
  public confirmarPix: string;

  public eyeCondition: boolean = true;

  pagarPix() {
    this._newPixComponent = this.dialogService.open(this.newPixComponent);

    this.tipoPix = 'pagar';
  }
  copiaColaPix() {
    this._newPixComponent = this.dialogService.open(this.newPixComponent);

    this.tipoPix = 'copiacola';
  }


  fecharPix() {
    this._newPixComponent.close();
  }
}
