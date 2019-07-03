import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ListUsuarioComponent} from './list-usuario/list-usuario.component';
import {DetailUsuarioComponent} from './detail-usuario/detail-usuario.component';

@NgModule({
  declarations: [
    ListUsuarioComponent,
    DetailUsuarioComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule {
}
