import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ACTIONS_USER, CargarUsuarioFailAction, CargarUsuarioSuccessAction} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class UserEffects {


  constructor(private actions$: Actions, public userService: UsersService) {
  }

  cargarUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS_USER.CARGAR_USER),
      switchMap((action: any) => this.userService.getUser(action.id)
        .pipe(
          map(user => new CargarUsuarioSuccessAction(user)),
          catchError(error => of(new CargarUsuarioFailAction(error)))
        ))
    ));


}
