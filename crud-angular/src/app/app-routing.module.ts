// Módulo global de rotas

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastros',
  },
  {
    //Lazy load:
    path: 'cadastros',
    loadChildren: () =>
      import('src/app/cadastros/cadastros.module').then(
        (m) => m.CadastrosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
