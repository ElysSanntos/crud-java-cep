import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros/cadastros.component';

@NgModule({
  declarations: [CadastrosComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    AppMaterialModule,
    SharedModule

  ],
})
export class CadastrosModule {}
