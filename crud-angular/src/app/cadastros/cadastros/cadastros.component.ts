import { Cadastro } from './../models/cadastro';
import { Component, OnInit } from '@angular/core';
import { CadastrosService } from '../services/cadastros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss'],
})
export class CadastrosComponent implements OnInit {
  // Devido ao modo strict estar como true, temos obrigatóriamente que iniciar essa variavel, o que tbm pode ser feito no constructor.
  cadastros:Observable <Cadastro[]>;

  //Colunas que serão exibidas
  displayedColumns = ['_id', 'nome', 'categoria'];

  constructor(private cadastroService: CadastrosService) {
    this.cadastros = this.cadastroService.listaTudo();
  }

  ngOnInit(): void {


  }
}
