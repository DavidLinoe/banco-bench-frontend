import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface usuario {
  nome_cliente: string;
  saldo_cliente: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public usuario: BehaviorSubject<usuario> = new BehaviorSubject<usuario>({
    saldo_cliente: '',
    nome_cliente: '',
  });

  constructor() {
    this.usuario.subscribe((value) => console.log({ value }));
  }
}
