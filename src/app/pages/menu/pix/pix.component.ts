import { Component } from '@angular/core';

@Component({
  selector: 'app-pix',
  standalone: true,
  imports: [],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.scss'
})
export class PixComponent {

  public eyeCondition: boolean = true;

  user: string = 'David Eduardo Lino'
  saldo: string = ' 300 $'
  bSaldo = this.saldo

  eye() {
    setTimeout(() => {


      this.eyeCondition = !this.eyeCondition;
      if (!this.eyeCondition)

        this.saldo = ''

          ;

      else

        this.saldo = this.bSaldo

          ;


    }, 400);
  }
  pix(){

console.log('Pix works')


  }

}
