import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  public sidebarState = '';

  public rotaDinamica: string | null = localStorage.getItem('BACKEND');

  constructor(
    private sidebarService: NbSidebarService,
    public userService: UserService,
    private http: HttpClient,
    private routerNavigate: Router
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
    try {
      const id_cliente = sessionStorage.getItem('id_cliente');
      this.enviarDadosUser({ id_cliente });
    } catch (error) {
      console.error('Nenhum Usuario Logado');
    }
    // localStorage.clear();s

    // const id_cliente = sessionStorage.getItem('id_cliente');
  }
  enviarDadosUser(res: any) {
    this.http.post(this.rotaDinamica + '/user', res).subscribe({
      next: (res: any) => {
        console.log('Resposta do enviar dados User: ', res.id_cliente);
        console.log('Resposta do enviar dados User: ', res.nome_cliente);
        console.log('Resposta do enviar dados User: ', res.saldo_cliente);

        this.userService.usuario.next(res); //envia a res para o service !
      },
      error: (err: any) => {
        console.log('erro no enviar dados user !');
        alert('Sessão Expirada !');
        this.routerNavigate.navigateByUrl('/');
      },
    });
  }

  bSaldo = '***';
  saldoFormat: any;

  public eyeCondition: boolean = true;

  eye() {
    const currencyFormatter = (amount: number) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);
    };

    setTimeout(() => {
      this.eyeCondition = !this.eyeCondition;
      if (this.eyeCondition) this.saldoFormat = this.bSaldo;
      else
        this.saldoFormat = currencyFormatter(
          this.userService.usuario.getValue().saldo_cliente
        );
    }, 400);
  }
}
