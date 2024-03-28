import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface dadosPerfil {
  telefone: string;
  email: string;
  nome_cliente: string;
}

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor() {}

  public dados: BehaviorSubject<dadosPerfil> = new BehaviorSubject<dadosPerfil>(
    {
      telefone: '',
      email: '',
      nome_cliente: '',
    }
  );
}
