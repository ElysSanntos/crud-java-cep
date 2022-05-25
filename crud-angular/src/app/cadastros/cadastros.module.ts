import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros/cadastros.component';


@NgModule({
  declarations: [CadastrosComponent, CadastroFormComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ],
})
export class CadastrosModule {}
