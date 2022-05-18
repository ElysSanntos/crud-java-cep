import { Cadastro } from './../models/cadastro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss'],
})
export class CadastrosComponent implements OnInit {
  // Devido ao modo strict estar como true, temos obrigatóriamente que iniciar essa variavel, o que tbm pode ser feito no constructor.
  cadastros: Cadastro[] = [
    {_id: '1',nome: 'Elys Sanntos',categoria: 'Pessoa Fisíca'},
    {_id: '2',nome: 'Cleiton Peres',categoria: 'Pessoa Juridica'},

  ];

  //Colunas que serão exibidas
  displayedColumns = ['_id', 'nome', 'categoria'];

  constructor() {}

  ngOnInit(): void {}
}
