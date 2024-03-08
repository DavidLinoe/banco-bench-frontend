import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PixService } from '../../../../services/pix.service';

@Component({
  selector: 'app-pix-modal-pagar',
  templateUrl: './pix-modal-pagar.component.html',
  styleUrl: './pix-modal-pagar.component.scss',
})
export class PixModalPagarComponent {
  public state: string = 'pagar';
  public payForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public pixService: PixService
  ) {}
  ngOnInit(): void {
    this.payForm = this.formBuilder.group({
      amount: [0, [Validators.required]],
      chave: [],
      chaveAleatoria: [],
    });
  }

  comprovante() {
    this.state = 'comprovante';
  }
  pagar() {
    this.state = 'pagar';
  }
  confirm() {
    this.state = 'confirm';
  }

  waitChange() {
    if (localStorage.getItem('stateChange') == 'true') {
      console.log('Log no waitChange pix modal Router Funciona');
      this.chaveAleatoria();
    } else {
      console.log('Log no waitChange pix modal Router NAO FUNCIONAAAAAAA');
    }
    console.log('Aguardando Ser True');
  }
  chaveAleatoria() {
    localStorage.setItem('chaveAleatoria', this.payForm.value.chaveAleatoria);
    console.log(
      ' log da chave digitada ',
      localStorage.getItem('chaveAleatoria')
    );

    this.verificarChave();
  }

  verificarChave() {
    this.http
      .post('http://localhost:3000/verificar/chave', {
        dadosChave: this.payForm.value.chaveAleatoria,
      })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('chavePix', res.telefone.toString());
          // this.pixService.chaveExistente.next(res.telefone.toString()); //envia a res para o Pix service !

          console.log('Resposta do Next  ', res.telefone.toString());
        },
        error: (err: any) => {
          console.log('erro');
          localStorage.removeItem('chavePix');
        },
      });
  }
}
