import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface chave {
  telefone: string;
  email: string;
  cpf: string;

}

@Injectable({
  providedIn: 'root',
})
export class PixService {
  constructor() {
    this.chaveExistente.subscribe((value) =>
      console.log('log no service do Pix ', { value })
    );
  }

  public chaveExistente: BehaviorSubject<chave> = new BehaviorSubject<chave>({
    telefone: '',
    email: '',
    cpf: '',

  });
}
