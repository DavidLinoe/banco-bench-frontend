import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public sidebarState = '';
  constructor(
    private sidebarService: NbSidebarService,
    public userService: UserService
  ) {}

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
    this.sidebarService.getSidebarState('left').subscribe((state) => {
      console.log(state);
      this.sidebarState = state;
    });
  }

  r="R$ "
  saldo = this.r +this.userService.usuario.getValue().saldo_cliente; 
  bSaldo = "***";

  public eyeCondition: boolean = true;

  eye() {
    setTimeout(() => {

      this.eyeCondition = !this.eyeCondition;
      if (this.eyeCondition) this.saldo = this.r + this.userService.usuario.getValue().saldo_cliente ;
      else this.saldo = this.bSaldo;

    }, 400);
  }
}
