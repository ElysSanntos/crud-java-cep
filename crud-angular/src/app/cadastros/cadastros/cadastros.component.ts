import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { CadastrosService } from '../services/cadastros.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Cadastro } from './../models/cadastro';


@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss'],
})
export class CadastrosComponent {
  // Devido ao modo strict estar como true, temos obrigatóriamente que iniciar essa variavel, o que tbm pode ser feito no constructor.

  cadastros$!: Observable<Cadastro[]>;

  //Colunas que serão exibidas
  displayedColumns = ['_id', 'nome', 'categoria', 'actions'];

  constructor(
    private cadastroService: CadastrosService,
    public dialog: MatDialog,
    private router: Router, //controla o roteamento no Angular
    private route: ActivatedRoute
  ) {
    this.cadastros$ = this.cadastroService.listaTudo().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os cadastros.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {

     this.router.navigate(['new'], { relativeTo: this.route });
  }
}
