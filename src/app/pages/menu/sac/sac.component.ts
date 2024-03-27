import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sac',
  // standalone: true,
  // imports: [],
  templateUrl: './sac.component.html',
  styleUrl: './sac.component.scss',
})
export class SacComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  s: any;
  s2: any;
  s3: any;

  public sacForm: FormGroup;
  public topicosList: any;
  public topicosList2: any;
  public topicosList3: any;
  public searchH: any;

  public modal: any;

  public mState: boolean;

  // searchQuery: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Outro Item', 'Mais um Item'];
  filteredItems: string[] = [];

  ngOnInit(): void {
    this.sacForm = this.formBuilder.group({
      select1: [''],
      select2: [''],
      select3: [''],
      topicos: [''],
      modal: [''],
      searchQuery: [''],
    });

    // const chaveSelecionada = this.payForm.value.choose
  }
  openModal() {
    // let m = this.sacForm.value.modal;
    // this.modal += 'audhaid';
    // this.modal.style.display = 'fixed';

    this.mState = !this.mState;

    // if (this.mState) {
    //   this.modal += 'TCHAU';
    // } else {
    //   this.modal += 'OI';
    // }
  }

  closeModal() {
    // this.modal.style.display = 'none';
    this.mState = !this.mState;
  }

  funcao() {
    this.s = this.sacForm.value.select1;
    this.s2 = this.sacForm.value.select2;
    this.s3 = this.sacForm.value.select3;

    // let topicosDiv = this.sacForm.value.topicos;
    // this.topicosList = this.sacForm.value.topicosId;

    // console.log('log do select SAC ', this.sacForm.value.select1);

    this.topicosList = '';
    this.topicosList2 = '';
    this.topicosList3 = '';

    // Adicionar tópicos correspondentes ao select
    if (this.s === '1') {
      this.topicosList += '<h1>Duvida Pix 1 </h1>';
      this.topicosList += '<li>coisa 1 </li>';
      this.topicosList += '<li>coisa 2 </li>';
    } else if (this.s === '2') {
      this.topicosList += '<h1>Duvida Pix 2</h1>';
      this.topicosList += '<li>coisa 3</li>';
      this.topicosList += '<li>coisa 4</li>';
    } else if (this.s === '3') {
      this.topicosList += '<h1>Duvida Pix 3</h1>';
      this.topicosList += '<li>coisa 5</li>';
      this.topicosList += '<li>coisa 6</li>';
    } else {
      this.topicosList = '';
    }

    if (this.s2 === '1') {
      this.topicosList2 += '<h1>Duvida Conta 1 </h1>';
      this.topicosList2 += '<li>coisa 1 </li>';
      this.topicosList2 += '<li>coisa 2 </li>';
    } else if (this.s2 === '2') {
      this.topicosList2 += '<h1>Duvida Conta 2</h1>';
      this.topicosList2 += '<li>coisa 3</li>';
      this.topicosList2 += '<li>coisa 4</li>';
    } else if (this.s2 === '3') {
      this.topicosList2 += '<h1>Duvida Conta 3</h1>';
      this.topicosList2 += '<li>coisa 5</li>';
      this.topicosList2 += '<li>coisa 6</li>';
    } else {
      this.topicosList2 = '';
    }

    if (this.s3 === '1') {
      this.topicosList3 += '<h1>Duvida Geral 1 </h1>';
      this.topicosList3 += '<li>coisa 1 </li>';
      this.topicosList3 += '<li>coisa 2 </li>';
    } else if (this.s3 === '2') {
      this.topicosList3 += '<h1>Duvida Geral 2</h1>';
      this.topicosList3 += '<li>coisa 3</li>';
      this.topicosList3 += '<li>coisa 4</li>';
    } else if (this.s3 === '3') {
      this.topicosList3 += '<h1>Duvida Geral 3</h1>';
      this.topicosList3 += '<li>coisa 5</li>';
      this.topicosList3 += '<li>coisa 6</li>';
    } else {
      this.topicosList3 = '';
    }
  }

  search() {
    const nameValue = this.sacForm.get('searchQuery')?.value.toLowerCase();

    if (nameValue === 'pix') {
      this.searchH = 'pix';
      this.sacForm.value.select1 = '1';
      this.funcao();
    } else if (nameValue === 'conta') {
      this.searchH = 'conta';
      this.sacForm.value.select2 = '1';
      this.funcao();
    } 
    else if (nameValue === 'geral') {
      this.searchH = 'geral';
      this.sacForm.value.select3 = '1';
      this.funcao();
    } 
    
    else {
      this.searchH = ' nenhum topico encontrado!';
      this.sacForm.value.select1 = '';
      this.funcao();
    }
  }
}
