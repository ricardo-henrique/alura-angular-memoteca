import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar_pensamento', pathMatch: 'full' },
  { path: 'criar_pensamento', component: CreateThoughtsComponent },
  { path: 'listar_pensamento', component: ListThoughtsComponent },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'pensamentos/editarPensamentos/:id',
    component: UpdateThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
