import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { ACTIONS_USERS, CargarUsuariosFailAction, CargarUsuariosSuccessAction} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {


  constructor(private actions$: Actions, public userService: UsersService) {
  }

  cargarUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS_USERS.CARGAR_USERS),
      switchMap(e => this.userService.getAll()
        .pipe(
          map(users => new CargarUsuariosSuccessAction(users)),
          catchError(error => of(new CargarUsuariosFailAction(error)))
        ))
    ));


}
