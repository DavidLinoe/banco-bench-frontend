import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface usuario {
  nome_cliente: string;
  saldo_cliente: number;
  id_cliente:number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    
    // this.usuario.subscribe((value) => console.log("log User Service",{ value }));
  }
 
  
  public usuario: BehaviorSubject<usuario> = new BehaviorSubject<usuario>({
    saldo_cliente:0,
    nome_cliente: '',
    id_cliente: 0,
 
  });

  

}
