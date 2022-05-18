import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { CadastrosService } from '../services/cadastros.service';
import { Cadastro } from './../models/cadastro';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss'],
})
export class CadastrosComponent  {
  // Devido ao modo strict estar como true, temos obrigatóriamente que iniciar essa variavel, o que tbm pode ser feito no constructor.
  cadastros$:Observable <Cadastro[]>;

  //Colunas que serão exibidas
  displayedColumns = ['_id', 'nome', 'categoria'];

  constructor(
    private cadastroService: CadastrosService,
    public dialog: MatDialog
    ) {
    this.cadastros$ = this.cadastroService.listaTudo()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar cadastros.');
        return of([])
      })
    );


}
 onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  }


