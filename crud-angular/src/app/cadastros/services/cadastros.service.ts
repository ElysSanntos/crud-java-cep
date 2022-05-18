import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cadastro } from './../models/cadastro';


@Injectable({
  providedIn: 'root',
})
export class CadastrosService {

  constructor(private httpClient:HttpClient) { }

  //metodo para retornar uma lista de cursos para o component

  listaTudo(): Cadastro[]{
    return [
      { _id: '1', nome: 'Elys Sanntos', categoria: 'Pessoa Fisíca' },
      { _id: '2', nome: 'Cleiton Peres', categoria: 'Pessoa Juridica' },
    ];
  }
}
