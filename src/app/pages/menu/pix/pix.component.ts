import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NewpixComponent } from './newpix/newpix.component';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { PixModalRouterComponent } from './pix-modal-router/pix-modal-router.component';

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
  public state: any;

 
  pagarPix() {
    this._newPixComponent = this.dialogService.open(this.newPixComponent);
    this.tipoPix = 'pagar';

   
  }
  copiaColaPix() {
    this._newPixComponent = this.dialogService.open(this.newPixComponent);
    this.tipoPix = 'copiacola';
  }

  fecharPix() {
    this.state = localStorage.getItem('modalOpen');

    if (this.state === 'fechar') {
      localStorage.removeItem('modalOpen'),
        console.log('log state ', this.state),
        this._newPixComponent.close();
    }
  }
}
