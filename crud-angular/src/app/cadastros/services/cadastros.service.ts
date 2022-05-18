import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Cadastro } from './../models/cadastro';


@Injectable({
  providedIn: 'root',
})
export class CadastrosService {

  private readonly API = '../../../assets/cadastros.json'

  constructor(private httpClient:HttpClient) { }

  //metodo para retornar uma lista de cursos para o component

  listaTudo(){
    return  this.httpClient.get<Cadastro[]>(this.API)
    .pipe(
      first(),
      tap(listaCadastros=>console.log(listaCadastros))
      );
  }
}
