import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { PixService } from '../../../../services/pix.service';
import { jsPDF } from 'jspdf';
import { PerfilService } from '../../../../services/perfil.service';

@Component({
  selector: 'app-pix-modal-comprovante',

  templateUrl: './pix-modal-comprovante.component.html',
  styleUrl: './pix-modal-comprovante.component.scss',
})
export class PixModalComprovanteComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(public userService: UserService, public pixService: PixService, public perfilService:PerfilService) {}

  nome = this.pixService.chaveExistente.getValue().nome_cliente;
  valor = localStorage.getItem('valorAmount');

  cpf = '21432535325';
  chave =
    this.pixService.chaveExistente.getValue().telefone ||
    this.pixService.chaveExistente.getValue().email ||
    this.pixService.chaveExistente.getValue().cpf;
  agencia = '24-40/01';

  pdfName: any; // Propriedade para armazenar o nome do PDF

  // downloadPDF() {
  //   const doc = new jsPDF();
  //   doc.text('Hello World', 10, 10);

  //   doc.save(this.pdfName + '.pdf'); // Usar o nome do PDF definido pelo usuário
  // }
  downloadPDF() {
    this.pdfName =
      'Comprovante ' + this.nome + ' ' + localStorage.getItem('last-operation') || null;

    const pdf = new jsPDF('l', 'px', 'a4');
    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save(this.pdfName + '.pdf'); // Usar o nome do PDF definido pelo usuário
      },
    });
  }
}
