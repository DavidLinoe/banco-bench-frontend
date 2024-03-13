import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  public sidebarState = '';
  constructor(
    private sidebarService: NbSidebarService,
    public userService: UserService,
    private http: HttpClient
  ) {}

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
    this.sidebarService.getSidebarState('left').subscribe((state) => {
      console.log(state);
      this.sidebarState = state;
    });
  }
  
  ngOnInit(): void {
    //const id_cliente = localStorage.getItem("id_cliente")
    const id_cliente = sessionStorage.getItem("id_cliente")

    this.enviarDadosUser({id_cliente});
  }
  enviarDadosUser(res: any) {
    this.http.post('http://localhost:3000/user', res).subscribe({
      next: (res: any) => {
        this.userService.usuario.next(res.user); //envia a res para o service !

      },
      error: (err: any) => {
        console.log('erro');
      },
    });
  }
  r = 'R$ ';
  saldo = "***";
  bSaldo = '***';

  public eyeCondition: boolean = true;

  eye() {
    setTimeout(() => {
      this.eyeCondition = !this.eyeCondition;
      if (this.eyeCondition)
      this.saldo = this.bSaldo;
      else  this.saldo = this.r + this.userService.usuario.getValue().saldo_cliente;
    }, 400);
  }
}
