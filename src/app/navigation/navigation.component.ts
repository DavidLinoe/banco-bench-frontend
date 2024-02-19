import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  public sidebarState = '' 
  constructor(private sidebarService: NbSidebarService) {
  }

 
  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
    this.sidebarService.getSidebarState('left')
      .subscribe(state => {
        console.log(state)
        this.sidebarState = state
      })
  }



  
  public eyeCondition: boolean = true;

  user: string = 'Luis Henrique Martins Dos Santos'
  saldo: string = ' '
  bSaldo = this.saldo

  eye() {
    setTimeout(() => {


      this.eyeCondition = !this.eyeCondition;
      if (!this.eyeCondition)

        this.saldo = '156800.75 $'

          ;

      else

        this.saldo = this.bSaldo

          ;


    }, 400);
  }
}
