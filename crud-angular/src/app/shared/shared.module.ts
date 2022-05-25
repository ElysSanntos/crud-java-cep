import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrosRoutingModule } from '../cadastros/cadastros-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoriaPipe } from './pipes/categoria.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, CategoriaPipe],
  imports: [
    CommonModule,
    AppMaterialModule,
    CadastrosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoriaPipe
],
})
export class SharedModule {}
