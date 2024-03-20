import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { PixService } from '../../../../services/pix.service';

@Component({
  selector: 'app-pix-modal-comprovante',

  templateUrl: './pix-modal-comprovante.component.html',
  styleUrl: './pix-modal-comprovante.component.scss',
})
export class PixModalComprovanteComponent {
  constructor(
    public userService: UserService,
    public pixService: PixService,

    ) {}

  nome = this.pixService.chaveExistente.getValue().nome_cliente;
  valor = localStorage.getItem('valorAmount');

  cpf = '21432535325';
  chave = this.pixService.chaveExistente.getValue().telefone || this.pixService.chaveExistente.getValue().email || this.pixService.chaveExistente.getValue().cpf;
  agencia = '24-40/01';
}
