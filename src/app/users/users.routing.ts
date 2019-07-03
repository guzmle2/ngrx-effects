import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListUsuarioComponent} from './list-usuario/list-usuario.component';
import {UsersModule} from './users.module';
import {DetailUsuarioComponent} from './detail-usuario/detail-usuario.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUsuarioComponent
  },
  {
    path: 'user/:id',
    component: DetailUsuarioComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UsersModule
  ],
  exports: [RouterModule]
})
export class UsersRouting {
}
