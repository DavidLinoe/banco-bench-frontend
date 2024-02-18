import { Component } from '@angular/core';

@Component({
  selector: 'app-carteira',
  standalone: true,
  imports: [],
  templateUrl: './carteira.component.html',
  styleUrl: './carteira.component.scss'
})



export class CarteiraComponent {

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
}
