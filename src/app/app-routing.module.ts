import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar_pensamento', pathMatch: 'full' },
  { path: 'criar_pensamento', component: CreateThoughtsComponent },
  { path: 'listar_pensamento', component: ListThoughtsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
