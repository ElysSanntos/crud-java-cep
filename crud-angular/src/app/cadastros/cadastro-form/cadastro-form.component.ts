import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private service:CadastrosService,
    ) {

    this.form = this.formBuilder.group({
      nome:[null],
      categoria:[null]
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    //console.log(this.form.value);
    this.service.save(this.form.value)
    .subscribe(resultado => console.log(resultado));
  }
  onCancel(){}
}
