import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface chave {
  telefone: string;
  email: string;
  cpf: string;
  id_cliente: number;
  nome_cliente: string;
}

@Injectable({
  providedIn: 'root',
})
export class PixService {
  constructor() {
    this.chaveExistente.subscribe((value) =>
      console.log('log no service do Pix ', value.id_cliente)
    );
  }

  public chaveExistente: BehaviorSubject<chave> = new BehaviorSubject<chave>({
    telefone: '',
    email: '',
    cpf: '',
    id_cliente: 0,
    nome_cliente: '',
  });
}
