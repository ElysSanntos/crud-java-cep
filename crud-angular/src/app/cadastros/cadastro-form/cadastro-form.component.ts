import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CadastrosService } from './../services/cadastros.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastrosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group(controlsConfig, {
      nome: [null],
      categoria: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  //Voltar para a tela de cadastro clicando no btn cancelar ou add
  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cadastro realizado com sucesso!', '', {
      duration: 500,
    });
    this.onCancel();//voltando a tela inicial
  }

  private onError() {
    this.snackBar.open('Erro ao realizar cadastro.', '', { duration: 5000 });
  }
}



function controlsConfig(controlsConfig: any, arg1: {}): FormGroup {
  throw new Error('Function not implemented.');
}

