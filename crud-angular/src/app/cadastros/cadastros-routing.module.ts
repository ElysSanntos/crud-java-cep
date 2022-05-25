import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CadastrosComponent,
  },
  {
    path: 'new',
    component: CadastroFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {}
