import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros/cadastros.component';



@NgModule({
  declarations: [CadastrosComponent],
  imports: [CommonModule, CadastrosRoutingModule, MatTableModule],
})
export class CadastrosModule {}
