import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Cadastro } from './../models/cadastro';


@Injectable({
  providedIn: 'root',
})
export class CadastrosService {
  private readonly API = '/api/cadastros';
  //private readonly API = '../../../assets/cadastros.json';

  constructor(private httpClient: HttpClient) {}

  //metodo para retornar uma lista de cursos para o component

  listaTudo() {
    return this.httpClient.get<Cadastro[]>(this.API).pipe(
      first(),
      delay(50),
      tap((listaCadastros) => console.log(listaCadastros))
    );
  }
  //aqui salvamos o registro de um cadastro
  save(registro: Cadastro){
    //console.log(registro);
    return this.httpClient.post<Cadastro>(this.API,registro).pipe(first());

  }
}
